import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

import { UserInfoSchema } from 'src/bookmarks/bookmarks.schema';
import { JobTitleSchema, UserJobSkillSchema } from 'src/analytics/analytics.schema';
import { TotalBookmarkSchema } from './search.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserInfo', schema: UserInfoSchema },
      { name: 'TotalBookmark', schema: TotalBookmarkSchema },
      { name: 'JobTitle', schema: JobTitleSchema } ,
      { name: 'UserJobSkill', schema: UserJobSkillSchema } ,
    ]),
  ],
  controllers: [ SearchController ],
  providers: [ SearchService ],
})

export class SearchModule {}

