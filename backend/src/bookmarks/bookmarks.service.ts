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
        console.log("add");
        console.log(type);
        bookmark = new this.TotalBookmarkModel({ type: type, userId: userId, projectName: projectName, totalBookmarks: 1});
        console.log(bookmark);
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
}