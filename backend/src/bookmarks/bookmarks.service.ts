import { Date, Model, Mongoose } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Account, Bookmark, Portfolio, UserInfo } from "./bookmarks.schema";

import { UserJobSkill } from "src/analytics/analytics.schema";
import { ObjectId } from "bson";

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
  
  async SaveBookmark(userId: string, type: string, thatUserId: string, port_id?: ObjectId): Promise<any> {
    const [success, message] = await this.UpdateBookmark(userId, type, "add", thatUserId, port_id);
    if (success) {
      console.log("Success: " + message)
    }
    else {
      console.log("Failed: " + message)
    }
    return message;
  }

  // ---------------------------- Delete Bookmark ---------------------------
  
  async DeleteBookmark(userId: string, type: string, thatUserId: string, port_id?: ObjectId): Promise<any> {
    const [success, message] = await this.UpdateBookmark(userId, type, "delete", thatUserId, port_id);
    if (success) {
      console.log("Success: " + message)
    }
    else {
      console.log("Failed: " + message)
    }
    return message;
  }

  /*
  * Update method
  */

  async UpdateBookmark(userId: string, type: string, option: string, thatUserId: string, port_id?: ObjectId): Promise<any> {
    if (type=='profile') {
      if (option=='add') {

          if (await this.isBookmarked(userId, thatUserId, type) ) 
            return [0, "You already bookmarked this."];

          const found = await this.UserInfoModel.findOne({UserId: thatUserId}).countDocuments();
          
          if ( !found ) return [0, "Failed to bookmark. This profile might not exist."];
          
          await this.UserInfoModel.updateOne({UserId: thatUserId}, { $inc: { totalBookmark: 1 }});
          const tags = [];
          const info = await this.UserInfoModel.findOne({ UserId: thatUserId }).select("_id Firstname Lastname AboutMe totalBookmark ProfilePic tags").exec();
          //console.log(bookmark.thatUserId);
          // console.log(profilePic);
          const id = info._id;
          const details = { 
                          name: info.Firstname + " " + info.Lastname, 
                          pic: info.ProfilePic,
                          about: info.AboutMe,
                          tags: info.tags,
                        }
          const newBookmark = new this.BookmarkModel({
                                                        userId: userId,
                                                        thatUserId: thatUserId,
                                                        type: type,
                                                        id: id,
                                                        details: details,
                                                        totalBookmark: info.totalBookmark,
                                                      });
          await newBookmark.save()
          await this.BookmarkModel.updateMany({type: "profile", thatUserId: thatUserId}, {totalBookmark: info.totalBookmark});
          return [1, "Saved successfully."];
      }
      else {
        const found = await this.BookmarkModel.findOne({userId: userId, type: type, thatUserId: thatUserId}).countDocuments();
        if (!found) return [0, "Failed to delete. This bookmark might not exist."];

        await this.BookmarkModel.deleteOne({userId: userId, type: type, thatUserId: thatUserId});
        await this.UserInfoModel.updateOne({UserId: thatUserId}, { $inc: { totalBookmark: -1 }});
        const info = await this.UserInfoModel.findOne({UserId: thatUserId}).select("-_id totalBookmark").exec()
        await this.BookmarkModel.updateMany({type: "profile", thatUserId: thatUserId}, { totalBookmark: info.totalBookmark});
        return [1, "Deleted successfully."];
      }
    }
    else if (type=='work') {
      const found = await this.PortfolioModel.findOne({ _id: port_id }).countDocuments();
      
      if ( !found ) return [0, "Failed to bookmark. This portfolio might not exist."];
      
      if (option=='add') {
        if ( await this.isBookmarked(userId, thatUserId, type, port_id ) ) 
          return [0, "You already bookmarked this."];
        await this.PortfolioModel.updateOne({ _id: port_id }, { $inc: { totalBookmark: 1 }});
        const info = await this.PortfolioModel.findOne({ _id: port_id })
                                    .select("_id Port_Name Port_Info portfolioPictures Owner totalBookmark").exec();
        
        const details = {
                          Port_Name: info.Port_Name,
                          Port_Info: info.Port_Info,
                          Port_Pic: info.portfolioPictures[0].Pic[0],
                          numberOfPic: (info.portfolioPictures[0].Pic).length,
                          owner: info.Owner,
        }

        const id = info._id;
        const newBookmark = new this.BookmarkModel({
                                                      userId: userId,
                                                      thatUserId: thatUserId,
                                                      type: type,
                                                      id: port_id,
                                                      details: details,
                                                      totalBookmark: info.totalBookmark,
                                                    });
        await newBookmark.save();
        await this.BookmarkModel.updateMany({type: "work", thatUserId: thatUserId, id: port_id }, {totalBookmark: info.totalBookmark});
        return [1, "Saved successfully."];
      }
      else {
        const found = await this.BookmarkModel.findOne({userId: userId, type: type, thatUserId: thatUserId, id: port_id}).countDocuments();
        if (!found) return [0, "Failed to delete. This bookmark might not exist."];

        await this.BookmarkModel.deleteOne({userId: userId, type: type, thatUserId: thatUserId, id: port_id });
        await this.PortfolioModel.updateOne({ _id: port_id }, { $inc: { totalBookmark: -1 }});
        const info = await this.PortfolioModel.findOne({ _id: port_id }).select("-_id totalBookmark").exec();
        await this.BookmarkModel.updateMany({type: "work", thatUserId: thatUserId, id: port_id }, {totalBookmark: info.totalBookmark});
        return [1, "Deleted successfully."];
      }
    }
  }

  async userBookmark(userId: string, sort: string): Promise<any> {
    let bookmarks;
    if (sort=='time') {
      bookmarks = await this.BookmarkModel.find( { userId: userId }).sort( { updatedAt: -1, _id: 1})
                                                                          .select("-_id -__v -createdAt").exec();
    }
    else{
      bookmarks = await this.BookmarkModel.find( { userId: userId }).sort( { totalBookmark: -1, _id: 1})
                                                                          .select("-_id -__v -createdAt").exec();
    }
    return bookmarks;
  }

  async isBookmarked(userId: string, thatUserId: string, type: string, id?: ObjectId) {
    let found;
    if(type=='profile')
      found = await this.BookmarkModel.findOne({userId: userId, type: type, thatUserId: thatUserId}).countDocuments();
    if(type=='work')
      found = await this.BookmarkModel.findOne({userId: userId, type: type, thatUserId: thatUserId, id: id }).countDocuments();
    //console.log(found);
    return found;    
  }
  
  async editBookmark(type: string, thatUserId: string, port_id?: ObjectId ) {
    if ( type == 'profile' ) {
      const info = await this.UserInfoModel.findOne({ UserId: thatUserId }).select("_id Firstname Lastname AboutMe totalBookmark ProfilePic tags").exec();
          //console.log(bookmark.thatUserId);
          // console.log(profilePic);
      const id = info._id;
      const details = { 
                      name: info.Firstname + " " + info.Lastname, 
                      pic: info.ProfilePic,
                      about: info.AboutMe,
                      tags: info.tags,
                    };
      const totalBookmark = info.totalBookmark;
      await this.BookmarkModel.updateMany({ type: "profile", thatUserId: thatUserId}, { details: details , totalBookmark: totalBookmark});
    }
    else if ( type == 'work' ) {
      const info = await this.PortfolioModel.findOne({ _id: port_id })
                                            .select("_id Port_Name Port_Info portfolioPictures Owner totalBookmark").exec();

      const details = {
            Port_Name: info.Port_Name,
            Port_Info: info.Port_Info,
            Port_Pic: info.portfolioPictures[0].Pic[0],
            numberOfPic: (info.portfolioPictures[0].Pic).length,
            owner: info.Owner,
      }
      const totalBookmark = info.totalBookmark;
      await this.BookmarkModel.updateMany({ type: "work", thatUserId: thatUserId, id: port_id }, { details: details , totalBookmark: totalBookmark});
    }
  }

  async resetBookmark() {
    await this.PortfolioModel.updateMany({},{ totalBookmark: 0});
    await this.UserInfoModel.updateMany({},{ totalBookmark: 0});
  }
}