import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkController } from './bookmarks.controller';
import { BookmarkService } from './bookmarks.service';
import { BookmarkSchema, TotalBookmarkSchema, UserInfoSchema } from './bookmarks.schema';
import { UserJobSkillSchema } from 'src/analytics/analytics.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Bookmark', schema: BookmarkSchema },
      { name: 'TotalBookmark', schema: TotalBookmarkSchema },
      { name: 'UserJobSkill', schema: UserJobSkillSchema },
      { name: 'UserInfo', schema: UserInfoSchema }
    ]),
  ],
  controllers: [BookmarkController],
  providers: [BookmarkService],
})

export class BookmarkModule {}
