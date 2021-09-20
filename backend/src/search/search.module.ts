import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TotalBookmarkSchema, UserInfoSchema } from 'src/bookmarks/bookmarks.schema';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserInfo', schema: UserInfoSchema },
      { name: 'TotalBookmark', schema: TotalBookmarkSchema },
    ]),
  ],
  controllers: [ SearchController ],
  providers: [ SearchService ],
})

export class SearchModule {}