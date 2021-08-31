import { Get, Post, Controller, Body, Param, Delete } from "@nestjs/common";
import * as mongoose from 'mongoose';
import { Bookmark } from './bookmarks.schema'
import { BookmarkService } from "./bookmarks.service";

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  // ---------------------------- Save Bookmark ---------------------------

  @Post('saveBookmark')
  async saveBookmark(
    @Body() detail: { userId: string, link: string, type: string, thatUserId: string, projectName?: string} 
  ): Promise<Bookmark> {
    const oid1 = mongoose.Types.ObjectId(detail.userId);
    const oid2 = mongoose.Types.ObjectId(detail.thatUserId);
    return await this.bookmarkService.SaveBookmark(oid1, detail.link, detail.type, oid2, detail.projectName) ;
  }

  // ---------------------------- Delete Bookmark ---------------------------
  
  @Delete('saveBookmark')
  async deleteBookmark(
    @Body() detail: { userId: string, link: string, type: string, thatUserId: string, projectName?: string} 
  ): Promise<any> {
    const oid1 = mongoose.Types.ObjectId(detail.userId);
    const oid2 = mongoose.Types.ObjectId(detail.thatUserId);
    return await this.bookmarkService.DeleteBookmark(oid1, detail.link, detail.type, oid2, detail.projectName) ;
  }

  // ---------------------------- Find All Bookmark ---------------------------
  @Get('find/:id')
  async findBookmark(@Param('id') id:string): Promise<any[]> {
    const oid = mongoose.Types.ObjectId(id) ;
    console.log(oid); 
    return await this.bookmarkService.findBookmark(oid) ;
  }

}