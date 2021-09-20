import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ObjectId } from 'mongodb' ;
import { TotalBookmark, UserInfo } from './search.schema';

@Injectable()
export class SearchService {
  constructor (
    @InjectModel('UserInfo')
    private UserInfoModel: Model<UserInfo>,
    @InjectModel('TotalBookmark')
    private TotalBookmarkModel: Model<TotalBookmark>,
  ) {}

  async findTopic(q: string): Promise<any[]> {
    const regex = new RegExp(escapeRegex(q), 'gi') ;
    // const user = await this.UserInfoModel.find({ "$text": {"$search": q, "$caseSensitive": true} }).select({ UserId: 1, Firstname: 1, Lastname: 1, _id: 0});
    const user = await this.UserInfoModel.find({ $or: [ { Firstname: regex }, { Lastname: regex }]}).select({ UserId: 1, Firstname: 1, Lastname: 1, _id: 0});
    let result = [] ;
    for (var obj of user) {
      // const bookmark = await this.TotalBookmarkModel.findOne({userId: obj.UserId}).select({ totalBookmarks: 1, _id: 0}); 
      // result.push({ "Bookmark": bookmark.totalBookmarks, "UserId": obj.UserId, "Name": obj.Firstname + " " + obj.Lastname}) ;
      result.push({ "UserId": obj.UserId, "Name": obj.Firstname + " " + obj.Lastname }) ;
    }
    result = result.sort() ;
    result = result.reverse() ;
    //let bookmarkUser = [] ;
    return result ;
  }

}
function escapeRegex(text: string): any {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') ;
}