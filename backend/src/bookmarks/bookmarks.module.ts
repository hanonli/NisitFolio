import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkController } from './bookmarks.controller';
import { BookmarkSchema } from './bookmarks.schema';
import { BookmarkService } from './bookmarks.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Bookmark', schema: BookmarkSchema },
    ]),
  ],
  controllers: [ BookmarkController, ],
  providers: [ BookmarkService, ],
})

export class BookmarkModule {}
