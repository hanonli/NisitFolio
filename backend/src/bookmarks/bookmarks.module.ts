import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkController } from './bookmarks.controller';
import { BookmarkService } from './bookmarks.service';
import { BookmarkSchema, TotalBookmarkSchema } from './bookmarks.shema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Bookmark', schema: BookmarkSchema },
      { name: 'TotalBookmark', schema: TotalBookmarkSchema },
    ]),
  ],
  controllers: [BookmarkController],
  providers: [BookmarkService],
})

export class BookmarkModule {}
