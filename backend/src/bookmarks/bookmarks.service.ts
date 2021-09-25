import { Date, Model, Mongoose } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Account, Bookmark, Portfolio, UserInfo } from "./bookmarks.schema";

import { UserJobSkill } from "src/analytics/analytics.schema";

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel('Bookmark')
    private BookmarkModel: Model<Bookmark>,

    @InjectModel('UserJobSkill')
    private UserJobSkillModel: Model<UserJobSkill>,

    @InjectModel('UserInfo')
    private UserInfoModel: Model<UserInfo>,

    @InjectModel('Account')
    private AccountModel: Model<Account>,

    @InjectModel('Portfolio')
    private PortfolioModel: Model<Portfolio>,
  ) {}
  
  async SaveBookmark(userId: string, link: string, type: string, thatUserId: string, portName?: string): Promise<any> {
    const success = await this.UpdateBookmark(userId, type, "add", link, thatUserId, portName);
    let log;
    if (success) {
      console.log("Save bookmark succesfully.");
      log = "Save bookmark succesfully.";
    }
    else {
      console.log("Failed to bookmark. This profile or portfolio might not exist.")
      log = "Failed to bookmark. This profile or portfolio might not exist.";
    }
    return log;
  }

  // ---------------------------- Delete Bookmark ---------------------------
  
  async DeleteBookmark(userId: string, link: string, type: string, thatUserId: string, portName?: string): Promise<any> {
    const success = await this.UpdateBookmark(userId, type, "delete", link, thatUserId, portName);
    let log;
    if (success) {
      console.log("Delete bookmark succesfully.");
      log = "Delete bookmark succesfully.";
    }
    else {
      console.log("Failed to delete. This bookmark might not exist.")
      log = "Failed to delete. This bookmark might not exist.";
    }
    return log;
  }

  /*
  * Update method
  */

  async UpdateBookmark(userId: string, type: string, option: string, link: string, thatUserId: string, portName?: string): Promise<any> {
    if (type=='profile') {
  
      if (option=='add') {
          const found = await this.UserInfoModel.findOne({UserId: thatUserId}).countDocuments();
          
          if ( !found ) return 0;
          
          await this.UserInfoModel.updateOne({UserId: thatUserId}, { $inc: { totalBookmark: 1 }});
          const tags = [];
          const info = await this.UserInfoModel.findOne({ UserId: thatUserId }).select("-_id Firstname Lastname AboutMe totalBookmark").exec();
          const profilePic = await this.AccountModel.findOne({ _id: thatUserId }).select("-_id ProfilePic").exec();
          //console.log(bookmark.thatUserId);
          // console.log(profilePic);
          const details = { 
                          name: info.Firstname + " " + info.Lastname, 
                          pic: profilePic.ProfilePic,
                          about: info.AboutMe,
                          tags: tags,
                        }
          const newBookmark = new this.BookmarkModel({
                                                        userId: userId,
                                                        link: link,
                                                        thatUserId: thatUserId,
                                                        type: type,
                                                        details: details,
                                                        totalBookmark: info.totalBookmark,
                                                      });
          await newBookmark.save()
          return 1;
      }
      else {
        const found = await this.BookmarkModel.findOne({userId: userId, type: type, thatUserId: thatUserId}).countDocuments();
        if (!found) return 0;

        await this.BookmarkModel.deleteOne({userId: userId, type: type, thatUserId: thatUserId});
        await this.UserInfoModel.updateOne({UserId: thatUserId}, { $inc: { totalBookmark: -1 }});
        return 1;
      }
    }
    else if (type=='work') {
      const found = await this.PortfolioModel.findOne({UserId: thatUserId, Port_Name: portName}).countDocuments();
      
      if ( !found ) return 0;
      
      if (option=='add') {
        await this.PortfolioModel.updateOne({UserId: thatUserId, Port_Name: portName}, { $inc: { totalBookmark: 1 }});
        const info = await this.PortfolioModel.findOne({UserId: thatUserId, Port_Name: portName})
                                    .select("-_id Port_Name Port_Info portfolioPictures Owner totalBookmark").exec();
        
        const details = {
                          Port_Info: info.Port_Info,
                          Port_Pic: info.portfolioPictures[0].Pic[0],
                          numberOfPic: (info.portfolioPictures[0].Pic).length,
                          owner: info.Owner,
        }

        const newBookmark = new this.BookmarkModel({
                                                      userId: userId,
                                                      link: link,
                                                      thatUserId: thatUserId,
                                                      portName: portName,
                                                      type: type,
                                                      details: details,
                                                      totalBookmark: info.totalBookmark,
                                                    });
        await newBookmark.save();
        return 1;
      }
      else {
        const found = await this.BookmarkModel.findOne({userId: userId, type: type, thatUserId: thatUserId, portName: portName}).countDocuments();
        if (!found) return 0;

        await this.BookmarkModel.deleteOne({userId: userId, type: type, thatUserId: thatUserId});
        await this.PortfolioModel.updateOne({UserId: thatUserId, Port_Name: portName}, { $inc: { totalBookmark: -1 }});
        return 1;
      }
    }
  }

  async userBookmark(userId: string, sort: string): Promise<any> {
    let bookmarks;
    if (sort=='time') {
      bookmarks = await this.BookmarkModel.find( { userId: userId }).sort( { updatedAt: -1, _id: 1})
                                                                          .select("-_id -__V").exec();
    }
    else{
      bookmarks = await this.BookmarkModel.find( { userId: userId }).sort( { totalBookmark: -1, _id: 1})
                                                                          .select("-_id -__V").exec();
    }
    return bookmarks;
  }
  
}