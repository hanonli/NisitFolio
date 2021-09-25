import { Get, Post, Controller, Body, Param, Delete } from "@nestjs/common";
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
    @Body() detail: { userId: string, type: string, thatUserId: string, projectName?: string} 
  ): Promise<Bookmark> {
    return await this.bookmarkService.SaveBookmark(detail.userId, detail.type, detail.thatUserId, detail.projectName) ;
  }

  // ---------------------------- Delete Bookmark ---------------------------
  
  @Delete('saveBookmark')
  async deleteBookmark(
    @Body() detail: { userId: string, type: string, thatUserId: string, projectName?: string} 
  ): Promise<any> {
    return await this.bookmarkService.DeleteBookmark(detail.userId, detail.type, detail.thatUserId, detail.projectName) ;
  }

  // ---------------------------- Get Bookmark ---------------------------
  @Get('/:id&&:sort')
  async getThisUserBookmarks(
    @Param('id') userId: string,
    @Param('sort') sort: string
  ): Promise<any[]> {
    return this.bookmarkService.userBookmark(userId, sort);
  }


}