import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

import { UserInfoSchema } from 'src/bookmarks/bookmarks.schema';
import { JobTitleSchema, UserJobSkillSchema } from 'src/analytics/analytics.schema';
import { InterestedJobSchema } from './search.schema' ;

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserInfo', schema: UserInfoSchema },
      { name: 'JobTitle', schema: JobTitleSchema } ,
      { name: 'UserJobSkill', schema: UserJobSkillSchema } ,
      { name: 'InterestedJob', schema: InterestedJobSchema } ,
    ]),
  ],
  controllers: [ SearchController ],
  providers: [ SearchService ],
})

export class SearchModule {}

