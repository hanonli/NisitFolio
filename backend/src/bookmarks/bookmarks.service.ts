import { Date, Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { ObjectId } from "mongodb";
import { Bookmark, TotalBookmark } from "./bookmarks.schema";

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel('Bookmark')
    private BookmarkModel: Model<Bookmark>,

    @InjectModel('TotalBookmark')
    private TotalBookmarkModel: Model<TotalBookmark>,
  ) {}

  
  async updateTotalBookmark(method: String, type: String, userId: ObjectId, projectName: String): Promise<void> {
    /*
    * Update total number in TotalBookmark table.
    * method: "add" (total++) or "delete" (total--)
    * If total = 0 then delete that document.
    */
    if (method == "add") {

      let bookmark;
      
      if (type == "user") {
        bookmark = await this.TotalBookmarkModel.findOne({ type: type, userId: userId });
      }
      else if (type == "project") {
        bookmark = await this.TotalBookmarkModel.findOne({ type: type, userId: userId, projectName: projectName});
      }

      // found
      if ( bookmark != null) {
        bookmark.totalBookmarks += 1;
      }

      // if not found
      else {

      }

    }

    else if (method == "delete") {

    }
  }
  // ---------------------------- Save Bookmark ---------------------------
  
  async SaveBookmark(userId: ObjectId, link: string, type: string, 
    thatUserId: ObjectId,projectName?: string): Promise<any> {
    const createBookmark = new this.BookmarkModel({userId, link, type, thatUserId, projectName}) ;
    return await createBookmark.save() ;
  }

  // ---------------------------- Delete Bookmark ---------------------------
  
  async DeleteBookmark(userId: ObjectId, link: string, type: string, 
    thatUserId: ObjectId,projectName?: string): Promise<any> {
    return await this.BookmarkModel.deleteMany( { userId: userId, link: link, type: type, thatUserId: thatUserId, projectName: projectName}, 
      function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      }
    ) ;
  }

  // ---------------------------- Find All Bookmark ---------------------------

  async findBookmark(userId: ObjectId) : Promise<any[]> {
    const All = await this.BookmarkModel.find({userId: userId}).sort({updatedAt: -1}) ;
    console.log(All) ;
    return All ;
  }
}