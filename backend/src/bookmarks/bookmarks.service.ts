import { Date, Model, Mongoose } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { ObjectId } from "mongodb";
import { Bookmark, TotalBookmark, userBookmarkSchema, UserInfo, UserInfoModel } from "./bookmarks.schema";
import * as mongoose from "mongoose";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

import { UserJobSkill } from "src/analytics/analytics.schema";

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel('Bookmark')
    private BookmarkModel: Model<Bookmark>,

    @InjectModel('TotalBookmark')
    private TotalBookmarkModel: Model<TotalBookmark>,

    @InjectModel('UserJobSkill')
    private UserJobSkillModel: Model<UserJobSkill>,

    @InjectModel('UserInfo')
    private UserInfoModel: Model<UserInfo>,

  ) {}

  async updateTotalBookmark( method: String, type: String, userId: ObjectId, projectName: String ): Promise<void> {
    /*
    * Update total number in TotalBookmark table.
    * method: "add" (total++) or "delete" (total--)
    * add:    If that document is not found then create a new one.
    * delete: If total = 0 then delete that document.
    */

    let bookmark;
   
    if (type == "user") {
      bookmark = await this.TotalBookmarkModel.findOne({ type: type, userId: userId });
    }
    else if (type == "project") {
      bookmark = await this.TotalBookmarkModel.findOne({ type: type, userId: userId, projectName: projectName});
    }

    // If bookmark is added.
    if (method == "add") {

      // found
      if ( bookmark != null) {
        bookmark.totalBookmarks += 1;
      }

      // if not found
      else {
        bookmark = new this.TotalBookmarkModel({ type: type, userId: userId, projectName: projectName, totalBookmarks: 1});
        //console.log(bookmark);
      }

      // save the change
      await bookmark.save();
    }

    // If bookmark is deleted.
    else if (method == "delete") {

      // If this is the last one.
      if ( bookmark.totalBookmarks == 1 ) {
        await this.TotalBookmarkModel.deleteOne(bookmark);
      }

      // if total > 1
      else {
        bookmark.totalBookmarks -= 1;
        await bookmark.save();
      }
    }
  }
  // ---------------------------- Save Bookmark ---------------------------
  
  async SaveBookmark(userId: ObjectId, link: string, type: string, 
    thatUserId: ObjectId,projectName?: string): Promise<any> {
    const createBookmark = new this.BookmarkModel({userId, link, type, thatUserId, projectName}) ;
    //console.log({userId, link, type, thatUserId, projectName});
    await this.updateTotalBookmark("add", type, thatUserId, projectName);
    return await createBookmark.save() ;
  }

  // ---------------------------- Delete Bookmark ---------------------------
  
  async DeleteBookmark(userId: ObjectId, link: string, type: string, 
    thatUserId: ObjectId,projectName?: string): Promise<any> {
    await this.updateTotalBookmark("delete", type, thatUserId, projectName);
    return await this.BookmarkModel.deleteMany( { userId: userId, link: link, type: type, thatUserId: thatUserId, projectName: projectName}, 
      function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      }
    ) ;
  }

  // ---------------------------- Find All Bookmark ---------------------------

  async findBookmark(userId: ObjectId) : Promise<any[]> {
    const All = await this.BookmarkModel.find({userId: userId}).select(['userId','link', 'thatUserId']).sort({updatedAt: -1}).exec() ;
    console.log(All) ;
    return All ;
  }

  async userBookmark(userId: ObjectId, sort: String): Promise<any> {
    const bookmarks = await this.BookmarkModel.find( { userId: userId }).exec();
    //console.log(bookmarks);
    let res = {};
    let i=0;
    for ( var bookmark of bookmarks) {

      const query = await this.TotalBookmarkModel.findOne( { type: bookmark.type, userId: bookmark.thatUserId , projectName: bookmark.projectName}).exec();
      const total = query.totalBookmarks;

      if ( bookmark.type == 'user' ) {
        //console.log(bookmark);
        const jobs = await this.UserJobSkillModel.find( { userId: bookmark.thatUserId }).select("JobName -_id").distinct('JobName').exec();
        const details = await this.UserInfoModel.findOne({ UserId: bookmark.thatUserId }).select("-_id Firstname Lastname AboutMe").exec();
        console.log(details);
        res[i] = {  link: bookmark.link,
                    type: bookmark.type,
                    thatUserId: bookmark.thatUserId,
                    name: details.Firstname + " " + details.Lastname,
                    profilePic: "",
                    jobs: jobs,
                    about: details.AboutMe,
                    timeUpdated: bookmark.updatedAt,
                    totalBookmarks: total 
                  };
      }
      i++;
    }
    // if (sort == 'time'){
    //   const keysSorted = Object.keys(res).sort(function(a,b) {return res[b].time-res[a].time});
    // }
    let keysSorted;

    if (sort == 'time'){
      keysSorted = Object.keys(res).sort(function(a,b) {return res[b].timeUpdated-res[a].timeUpdated});
    }
    else {
      keysSorted = Object.keys(res).sort(function(a,b) {return res[b].totalBookmarks-res[a].totalBookmarks});
    }

    let final = [];
    for ( var key of keysSorted ) {
      final.push(res[key]);
    }
    console.log(final);
    return final;
  }
}