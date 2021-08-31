import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { ObjectId } from "mongodb";
import { TotalBookmark } from "./bookmarks.shema";

@Injectable()
export class BookmarkService {
  constructor(
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
}