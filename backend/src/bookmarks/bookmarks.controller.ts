import { Get, Post, Controller, Body, Param } from "@nestjs/common";
import * as mongoose from 'mongoose';
import { BookmarkService } from "./bookmarks.service";

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

}