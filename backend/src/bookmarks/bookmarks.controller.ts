import { Get, Post, Controller, Body, Param, Delete } from "@nestjs/common";
import { ObjectId } from "bson";
import { string } from "joi";
import * as mongoose from 'mongoose';
import { Bookmark } from './bookmarks.schema'
import { BookmarkService } from "./bookmarks.service";

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  // ---------------------------- Save Bookmark ---------------------------

  @Post('saveBookmark')
  async saveBookmark(
    @Body() detail: { userId: string, type: string, thatUserId: string, port_id?: string} 
  ): Promise<Bookmark> {
    const port_id = mongoose.Types.ObjectId(detail.port_id);
    return await this.bookmarkService.SaveBookmark(detail.userId, detail.type, detail.thatUserId, port_id) ;
  }

  // ---------------------------- Delete Bookmark ---------------------------
  
  @Delete('saveBookmark')
  async deleteBookmark(
    @Body() detail: { userId: string, type: string, thatUserId: string, port_id?: string} 
  ): Promise<any> {
    const port_id = mongoose.Types.ObjectId(detail.port_id);
    return await this.bookmarkService.DeleteBookmark(detail.userId, detail.type, detail.thatUserId, port_id) ;
  }

  // ---------------------------- Get Bookmark ---------------------------
  @Get('/:id&&:sort')
  async getThisUserBookmarks(
    @Param('id') userId: string,
    @Param('sort') sort: string
  ): Promise<any[]> {
    return this.bookmarkService.userBookmark(userId, sort);
  }

  // ---------------------------- Edit Bookmark ---------------------------
  @Post('edit')
  async editBookmark(
    @Body() detail: { type: string, thatUserId: string, port_id?: string } 
  ): Promise<any> {
    const port_id = mongoose.Types.ObjectId(detail.port_id);
    return this.bookmarkService.editBookmark( detail.type, detail.thatUserId, port_id ) ;
  }

  // ---------------------------- Reset TotalBookmark --------------------

  @Get('reset')
  async resetBookmark() {
    return this.bookmarkService.resetBookmark();
  }

}