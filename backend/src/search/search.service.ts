import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ObjectId } from 'mongodb' ;
import { TotalBookmark, UserInfo, JobTitle, UserJobSkill } from './search.schema';
import { InterestedJob } from 'src/register/entity/Register.entity';
import { Bookmark, Portfolio } from 'src/bookmarks/bookmarks.schema';

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
    @InjectModel('Bookmark')
    private BookmarkModel: Model<Bookmark>,
    @InjectModel('Portfolio')
    private PortfolioModel: Model<Portfolio> ,
    ) {}

  async findJobName(q: string, userId: string): Promise<any[]> {
    let result = [] ;
    const regex = new RegExp(escapeRegex(q), 'gi') ;
    const Job = await this.JobTitleModel.findOne({ $or: [ { Name: regex }, { THName: regex }]}).select({ Name: 1, THName: 1, _id: 0}) ;
    if (Job == null) 
      return result ;
    // console.log(Job.THName, Job.Name) ;
    
    // -------------------------------------- profile ------------------------------------

    let type = 'profile' ;
    const id = await this.UserInfoModel.find({tags: {"$in": [Job.Name, Job.THName]}}).select({Firstname: 1, Lastname: 1, UserId: 1, AboutMe: 1, ProfilePic: 1, tags: 1, AvgScore: 1, totalBookmark: 1, _id: 0}) ;
    // console.log(id) ;
    let nid = id.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 ));
    for (var obj of nid) {
      const is_Bookmark = await this.BookmarkModel.find({ userId: userId, thatUserId: obj.UserId, type: type}) ;
      console.log(is_Bookmark) ;
      let check ;
      if (is_Bookmark.length != 0) 
        check = "true" ;
      else 
        check = "false" ;
      result.push({"name": obj.Firstname + " " + obj.Lastname, "type": type, "thatUserId": obj.UserId, 
        "pic": obj.ProfilePic, "about": obj.AboutMe, "tags": obj.tags , "bookmark": check, /* "AvgScore": obj.AvgScore, "totalBookmark": obj.totalBookmark */ }) ;
    }

    // ------------------------------------ portfolio -----------------------------------
    
    type = "work" ;
    const port = await this.PortfolioModel.find({Port_Tag: { "$in": [Job.Name, Job.THName]}}).select({Port_Name: 1, UserId: 1, portfolioPictures: 1, Port_Tag: 1, Port_Info: 1, Owner: 1, _id: 0}).exec() ;
    let nport = port.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : -1 )) ;
    for (var obj1 of nport) {
      const is_Bookmark = await this.BookmarkModel.find({ userId: userId, projectName: obj1.Port_Name, thatUserId: obj1.UserId, type: type}).exec() ;
      let check ;
      if (is_Bookmark.length != 0) 
        check = "true" ;
      else 
        check = "false" ;
        result.push({"name": obj1.Port_Name, "type": type, "thatUserId": obj1.UserId, 
        "pic": obj1.portfolioPictures, "about": obj1.Port_Info, "tags": obj1.Port_Tag, "owner": obj1.Owner, "bookmark": check, /* "AvgScore": obj.AvgScore, "totalBookmark": obj.totalBookmark */ }) ;
    }
    //let sorted_result = result.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 ));
    return /* sorted_*/result ;
  }

  async findUserName(q: string, userId: string): Promise<any[]> {
    const regex = new RegExp(escapeRegex(q), 'gi') ;
    let result = [] ;

    // --------------------------------------------- Profile --------------------------------------------

    const user1 = await this.UserInfoModel.find({ "$text": {"$search": regex} }).select({Firstname: 1, Lastname: 1, UserId: 1, AboutMe: 1, ProfilePic: 1, tags: 1, AvgScore: 1, totalBookmark: 1, _id: 0}).exec();
    const user2 = await this.UserInfoModel.find({ $or: [ { Firstname: regex }, { Lastname: regex }]}).select({Firstname: 1, Lastname: 1, UserId: 1, AboutMe: 1, ProfilePic: 1, tags: 1, AvgScore: 1, totalBookmark: 1, _id: 0}).exec();
    let user ;
    if (user1.length > user2.length)
      user = user1 ;
    else 
      user = user2 ;
    let nUser = user.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 ));
    let type = "profile" ;
    for (var obj of nUser) {
      const is_Bookmark = await this.BookmarkModel.find({ userId: userId, thatUserId: obj.UserId, type: type}).exec() ;
      console.log(is_Bookmark) ;
      let check ;
      if (is_Bookmark.length != 0) 
        check = "true" ;
      else 
        check = "false" ;
      result.push({"name": obj.Firstname + " " + obj.Lastname, "type": type, "thatUserId": obj.UserId, 
        "pic": obj.ProfilePic, "about": obj.AboutMe, "tags": obj.tags , "bookmark": check, /* "AvgScore": obj.AvgScore, "totalBookmark": obj.totalBookmark */ }) ;
    }

    // ------------------------------------------ portfolio ----------------------------------------

    const port = await this.PortfolioModel.find( {Port_Name: regex, Port_Privacy: "Public"} ).select({Port_Name: 1, UserId: 1, portfolioPictures: 1, Port_Tag: 1, Port_Info: 1, Owner: 1, _id: 0}).exec() ;
    let nport = port.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : -1 )) ;
    type = "work" ;
    for (var obj1 of nport) {
      const is_Bookmark = await this.BookmarkModel.find({ userId: userId, projectName: obj1.Port_Name, thatUserId: obj1.UserId, type: type}).exec() ;
      let check ;
      if (is_Bookmark.length != 0) 
        check = "true" ;
      else 
        check = "false" ;
        result.push({"name": obj1.Port_Name, "type": type, "thatUserId": obj1.UserId, 
        "pic": obj1.portfolioPictures, "about": obj1.Port_Info, "tags": obj1.Port_Tag, "owner": obj1.Owner, "bookmark": check, /* "AvgScore": obj.AvgScore, "totalBookmark": obj.totalBookmark */ }) ;
    }

    //let result = temp.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 ));
    return  result ;
  }

}
function escapeRegex(text: string): any {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') ;
}