import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ObjectId } from 'mongodb' ;
import { TotalBookmark, UserInfo, JobTitle, UserJobSkill } from './search.schema';
import { InterestedJob } from 'src/register/entity/Register.entity';

@Injectable()
export class SearchService {
  constructor (
    @InjectModel('UserInfo')
    private UserInfoModel: Model<UserInfo>,
    @InjectModel('JobTitle')
    private JobTitleModel: Model<JobTitle>,
    @InjectModel('UserJobSkill')
    private UserJobSkillModel: Model<UserJobSkill>,
    @InjectModel('InterestedJob')
    private InterestedJobModel: Model<InterestedJob>,
    ) {}

  async findJobName(q: string): Promise<any[]> {
    let result = [] ;
    const regex = new RegExp(escapeRegex(q), 'gi') ;
    const Job = await this.JobTitleModel.findOne({ $or: [ { Name: regex }, { THName: regex }]}).select({ Name: 1, THName: 1, _id: 0}) ;
    if (Job == null) 
      return result ;
    console.log(Job.THName, Job.Name) ;
    const id = await this.UserInfoModel.aggregate([
      { $match: { tags: { "$in": [Job.THName, Job.Name]}}},
      { 
        $group: {
          _id: { UserId: "$UserId" }
        }
      }
    ])
    let type = 'profile' ;
    const oid = await this.UserInfoModel.find({tags: {"$in": [Job.Name, Job.THName]}}).select({FirstName: 1, LastName: 1, UserId: 1, ProfilePic: 1, tags: 1}).distinct('UserId') ;
    console.log(oid) ;
    // const id = await this.UserJobSkillModel.find({ JobName: Job.Name }).select({ userId: 1, _id: 0}).distinct("userId") ;
    // for (var obj of id) {
    //   const user = await this.UserInfoModel.findOne({ UserId: obj.userId }) ;
    //   if (user != null) 
    //   result.push({ "Name": user.Firstname + ' ' + user.Lastname})
    // }
    return result ;
  }

  async findUserName(q: string): Promise<any[]> {
    const regex = new RegExp(escapeRegex(q), 'gi') ;
    const user1 = await this.UserInfoModel.find({ "$text": {"$search": regex} }).select({ UserId: 1, Firstname: 1, Lastname: 1, totalBookmarks: 1, _id: 0});
    const user2 = await this.UserInfoModel.find({ $or: [ { Firstname: regex }, { Lastname: regex }]}).select({ UserId: 1, Firstname: 1, Lastname: 1, totalBookmark: 1, _id: 0});
    let user ;
    if (user1.length > user2.length)
      user = user1 ;
    else 
      user = user2 ;
    let temp = [] ;
    for (var obj of user) {
      // const bookmark = await this.TotalBookmarkModel.findOne({userId: obj.UserId}).select({totalBookmarks: 1, _id: 0}); 

      temp.push({ "Bookmark": obj.totalBookmark, "UserId": obj.UserId, "Name": obj.Firstname + " " + obj.Lastname}) ;
      //result.push({ "Name": obj.Firstname + " " + obj.Lastname }) ;
    }
    let result = temp.sort((a,b) => (a.Bookmark < b.Bookmark ? 1 : a.Bookmark == b.Bookmark ? 1 : -1));
    // let New = result.sort() ;
    // result = result.reverse() ;
    //let bookmarkUser = [] ;
    return  result ;
  }

}
function escapeRegex(text: string): any {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') ;
}