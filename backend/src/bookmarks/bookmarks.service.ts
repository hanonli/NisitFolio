import { Date, Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Bookmark } from "./bookmarks.schema";

import { ObjectId } from "mongodb";

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel('Bookmark')
    private BookmarkModel: Model<Bookmark>,
  
  ) {}

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
}