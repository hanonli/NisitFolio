import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkController } from './bookmarks.controller';
import { BookmarkService } from './bookmarks.service';
import { AccountSchema, BookmarkSchema, PortfolioSchema, UserInfoSchema } from './bookmarks.schema';
import { UserJobSkillSchema } from 'src/analytics/analytics.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Bookmark', schema: BookmarkSchema },
      { name: 'UserJobSkill', schema: UserJobSkillSchema },
      { name: 'UserInfo', schema: UserInfoSchema },
      { name: 'Account', schema: AccountSchema },
      { name: 'Portfolio', schema: PortfolioSchema}
    ]),
  ],
  controllers: [BookmarkController],
  providers: [BookmarkService],
})

export class BookmarkModule {}
