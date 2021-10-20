import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

import { AccountSchema, BookmarkSchema, PortfolioSchema, UserInfoSchema } from 'src/bookmarks/bookmarks.schema';
import { JobTitleSchema, UserJobSkillSchema } from 'src/analytics/analytics.schema';
import { InterestedJobSchema, ResumeSchema } from './search.schema' ;

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserInfo', schema: UserInfoSchema },
      { name: 'JobTitle', schema: JobTitleSchema } ,
      { name: 'UserJobSkill', schema: UserJobSkillSchema } ,
      { name: 'InterestedJob', schema: InterestedJobSchema } ,
      { name: 'Bookmark', schema: BookmarkSchema } ,
      { name: 'Portfolio', schema: PortfolioSchema } ,
      { name: 'Account', schema: AccountSchema } ,
      { name: 'Resume', schema: ResumeSchema }
    ]),
  ],
  controllers: [ SearchController ],
  providers: [ SearchService ],
})

export class SearchModule {}

