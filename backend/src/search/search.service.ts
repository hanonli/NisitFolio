import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ObjectId } from 'mongodb' ;
import { TotalBookmark, UserInfo, JobTitle, UserJobSkill } from './search.schema';

@Injectable()
export class SearchService {
  constructor (
    @InjectModel('UserInfo')
    private UserInfoModel: Model<UserInfo>,
    @InjectModel('TotalBookmark')
    private TotalBookmarkModel: Model<TotalBookmark>,
    @InjectModel('JobTitle')
    private JobTitleModel: Model<JobTitle>,
    @InjectModel('UserJobSkill')
    private UserJobSkillModel: Model<UserJobSkill>,
    ) {}

  async findJobName(q: string): Promise<any[]> {
    const regex = new RegExp(escapeRegex(q), 'gi') ;
    const Job = await this.JobTitleModel.findOne({ $or: [ { Name: regex }, { THName: regex }]}).select({ Name: 1, _id: 0}) ;
    const id = await this.UserJobSkillModel.find({ JobName: Job.Name }).select({ userId: 1, _id: 0}).distinct("userId") ;
    // let result = [] ;
    // for (var obj of id) {
    //   const user = await this.UserInfoModel.findOne({ UserId: obj.userId }) ;
    //   result.push({ "Name": user.Firstname + ' ' + user.Lastname})
    // }
    return id ;
  }

  async findUserName(q: string): Promise<any[]> {
    const regex = new RegExp(escapeRegex(q), 'gi') ;
    // const user = await this.UserInfoModel.find({ "$text": {"$search": q, "$caseSensitive": true} }).select({ UserId: 1, Firstname: 1, Lastname: 1, _id: 0});
    const user = await this.UserInfoModel.find({ $or: [ { Firstname: regex }, { Lastname: regex }]}).select({ UserId: 1, Firstname: 1, Lastname: 1, _id: 0});
    let result = [] ;
    for (var obj of user) {
      // const bookmark = await this.TotalBookmarkModel.findOne({userId: obj.UserId}).select({totalBookmarks: 1, _id: 0}); 
      // result.push({ "Bookmark": bookmark.totalBookmarks, "UserId": obj.UserId, "Name": obj.Firstname + " " + obj.Lastname}) ;
      result.push({ "Name": obj.Firstname + " " + obj.Lastname }) ;
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