import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import * as mongoose from 'mongoose' ;

import { ObjectId } from 'mongodb' ;
import { TotalBookmark, UserInfo, JobTitle, UserJobSkill } from './search.schema';
import { InterestedJob } from 'src/register/entity/Register.entity';
import { Account, Bookmark, Portfolio } from 'src/bookmarks/bookmarks.schema';

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
    @InjectModel('Account')
    private AccountModel: Model<Account>,
    ) {}

  // async findJobName(q: string, userId: string): Promise<any[]> {
  //   let result = [] ;
  //   const regex = new RegExp(escapeRegex(q), 'gi') ;
  //   const Job = await this.JobTitleModel.findOne({ $or: [ { Name: regex }, { THName: regex }]}).exec() ;
  //   if (Job == null) 
  //   return result ;
  //   console.log("Job Name:", Job.THName, Job.Name) ;
    
  //   // -------------------------------------- profile ------------------------------------
    
  //   let type = 'profile' ;
  //   const id = await this.UserInfoModel.find({tags: {"$in": [Job.Name, Job.THName]}}).exec() ;
  //   console.log("JobName id:", id) ;
  //   //let nid = id.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 ));
  //   for (var obj of id) {
  //     const is_pub = await this.AccountModel.findOne({_id: mongoose.Types.ObjectId(obj.UserId)}) ;
  //     const is_Bookmark = await this.BookmarkModel.find({ userId: userId, thatUserId: obj.UserId, type: type}).exec() ;
  //     if (is_pub.Privacy == "Public" || is_Bookmark.length != 0) {
  //       console.log(is_Bookmark) ;
  //       let check ;
  //       if (is_Bookmark.length != 0) {
  //         check = "true" ;
  //       }
  //       else {
  //         check = "false" ;
  //       }
  //       result.push({"name": obj.Firstname + " " + obj.Lastname, "type": type, "thatUserId": obj.UserId, 
  //         "pic": obj.ProfilePic, "about": obj.AboutMe, "tags": obj.tags , "bookmark": check, "AvgScore": obj.AvgScore, "totalBookmark": obj.totalBookmark }) ;
  //     }
  //   }

  //   // ------------------------------------ portfolio -----------------------------------
    
  //   type = "work" ;
  //   const port = await this.PortfolioModel.find({Port_Tag: { "$in": [Job.Name, Job.THName]}}).exec() ;
  //   console.log("Job Name Port:",port);
  //   //let nport = port.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : -1 )) ;
  //   for (var obj1 of port) {
  //     const is_Bookmark = await this.BookmarkModel.find({ userId: userId, projectName: obj1.Port_Name, thatUserId: obj1.UserId, type: type}).exec() ;
  //     let check ;
  //     if (is_Bookmark.length != 0) 
  //       check = "true" ;
  //     else 
  //       check = "false" ;
  //     result.push({"name": obj1.Port_Name, "type": type, "thatUserId": obj1.UserId, 
  //       "pic": obj1.portfolioPictures, "about": obj1.Port_Info, "owner": obj1.Owner, "bookmark": check, "AvgScore": 1, "totalBookmark": obj1.totalBookmark }) ;
  //   }
  //   return result ;
  // }

  // async findUserName(q: string, userId: string): Promise<any[]> {
  //   const regex = new RegExp(escapeRegex(q), 'gi') ;
  //   let result = [] ;

  //   // --------------------------------------------- Profile --------------------------------------------

  //   const user1 = await this.UserInfoModel.find({ "$text": {"$search": regex} }).exec();
  //   const user2 = await this.UserInfoModel.find({ $or: [ { Firstname: regex }, { Lastname: regex }]}).exec();
  //   let user ;
  //   if (user1.length > user2.length)
  //     user = user1 ;
  //   else 
  //     user = user2 ;
  //   console.log("UserName User:", user);
  //   //let nUser = user.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 ));
  //   let type = "profile" ;
  //   for (var obj of user) {
  //     const is_pub = await this.AccountModel.findOne({ _id: mongoose.Types.ObjectId(obj.UserId)}) ;
  //     const is_Bookmark = await this.BookmarkModel.find({ userId: userId, thatUserId: obj.UserId, type: type}).exec() ;
  //     if (is_pub.Privacy == "Public" || is_Bookmark.length != 0) {
  //       console.log(is_Bookmark) ;
  //       let check ;
  //       if (is_Bookmark.length != 0) 
  //         check = "true" ;
  //       else 
  //         check = "false" ;
  //       result.push({"name": obj.Firstname + " " + obj.Lastname, "type": type, "thatUserId": obj.UserId, 
  //         "pic": obj.ProfilePic, "about": obj.AboutMe, "tags": obj.tags , "bookmark": check, "AvgScore": obj.AvgScore, "totalBookmark": obj.totalBookmark }) ;
  //     }
  //   }

  //   // ------------------------------------------ portfolio ----------------------------------------

  //   const port = await this.PortfolioModel.find( {Port_Name: regex, Port_Privacy: "Public"} ).exec() ;
  //   //let nport = port.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : -1 )) ;
  //   console.log("UserName Port:", port) ;
  //   type = "work" ;
  //   for (var obj1 of port) {
  //     const is_Bookmark = await this.BookmarkModel.find({ userId: userId, projectName: obj1.Port_Name, thatUserId: obj1.UserId, type: type}).exec() ;
  //     let check ;
  //     if (is_Bookmark.length != 0) 
  //       check = "true" ;
  //     else 
  //       check = "false" ;
  //     result.push({"name": obj1.Port_Name, "type": type, "thatUserId": obj1.UserId, 
  //       "pic": obj1.portfolioPictures, "about": obj1.Port_Info, "owner": obj1.Owner, "bookmark": check, "AvgScore": 1, "totalBookmark": obj1.totalBookmark }) ;
  //   }

  //   //let result = temp.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 ));
  //   return  result ;
  // }

  async find_Query(q: string, userId: string) : Promise<any> {
    const regex = new RegExp(escapeRegex(q), 'gi') ; 
    console.log(regex) 
    const JobName = await this.JobTitleModel.findOne({ $or: [{Name: regex}, {THName: regex}]}) ;
    let is_mem ;
    if (userId == "1") {
      is_mem = false ;
    }
    else {
      is_mem = true ;
    }
    const BookmarkUserList = await this.BookmarkModel.find({userId: userId, type: "profile"}).distinct("thatUserId") ;
    const BookmarkPortList = await this.BookmarkModel.find({userId: userId, type: "work"}) ;
    let BookmarkWorkList = []
    for (var item of BookmarkPortList) {
      BookmarkWorkList.push(item.details.Port_Name) ;
    }
    console.log(BookmarkUserList) ;
    console.log(BookmarkWorkList) ;
    let result = [] ;

    // --------------------------------------------- Find Profile ------------------------------------
    let privacy = ["Public"] ;
    let Jobs = [] ;
    if (JobName != null) {
      Jobs.push(JobName.THName) ;
      Jobs.push(JobName.Name) ;
    }
    if (is_mem) {
      privacy.push("Members") ;
    }
    const findUserId = await this.UserInfoModel.find({$or: [{Firstname: regex}, {Lastname: regex}, {tags: {"$in": Jobs}}], Privacy: {"$in": privacy}}) ;
    const findPort = await this.PortfolioModel.find({$or: [{Port_Name: regex}, {Port_Info: regex}, {Port_Tag: {"$in": Jobs}}], Port_Privacy: {"$in": privacy}}) ;
    // const findPort = [] ;
    const sorted_profile = findUserId.sort((a,b) => (
      a.totalBookmark == b.totalBookmark ? (a.AvgScore == b.AvgScore ?
      (a.last_modified[a.last_modified.length-1] < b.last_modified[b.last_modified.length-1] ? 1 : -1)
      : (a.AvgScore < b.AvgScore ? 1 : -1)) : 
      (a.totalBookmark < b.totalBookmark ? 1 : -1)
    ));
    const sorted_work = findPort.sort((a,b) => (
      a.totalBookmark == b.totalBookmark ? 
      (a.last_modified[a.last_modified.length-1] < b.last_modified[b.last_modified.length-1] ? 1 : -1) 
      : (a.totalBookmark < b.totalBookmark ? 1 : -1)
    )) ;
    console.log(sorted_profile) ;
    console.log(sorted_work) ;
    let is_Bookmarking ;
    for (var obj1 of sorted_profile) {
      if (BookmarkUserList.includes(obj1.UserId)) 
        is_Bookmarking = true ;
      else 
        is_Bookmarking = false ;
      if (obj1.tags.length > 0) 
        result.push({"name": obj1.Firstname + " " + obj1.Lastname, "type": "profile", "thatUserId": obj1.UserId, "pic": obj1.ProfilePic, "about": obj1.AboutMe, "tags": obj1.tags, "bookmark": is_Bookmarking}) ;
    } 
    for (var obj2 of sorted_work) {
      if (BookmarkWorkList.includes(obj2.Port_Name))
        is_Bookmarking = true ;
      else 
        is_Bookmarking = false ;
      result.push({"name": obj2.Port_Name, "Port_id": obj2._id.toString(),"type": "work", "thatUserId": obj2.UserId, "pic": obj2.portfolioPictures, "about": obj2.Port_Info, "owner": obj2.Owner, "bookmark": is_Bookmarking}) ;
    }
    console.log("result:", result) ;
    // result["Profile"] = sorted_profile ;
    // result["Work"] = sorted_work ;
    return result ;
  }
}

function sorting_array(array: any[]): any[] {
  let sorted_array = array.sort((a,b) => (a.totalBookmark < b.totalBookmark ? 1 : a.totalBookmark == b.totalBookmark ? (a.AvgScore < b.AvgScore ? 1 : -1) : -1 )) ;
  let result = [] ;
  for (var obj of sorted_array) {
    if (obj.type == "profile") 
      result.push({"name": obj.name, "type": obj.type, "thatUserId": obj.thatUserId, 
        "pic": obj.pic, "about": obj.about, "tags": obj.tags , "bookmark": obj.bookmark }) ;
    else 
      result.push({"name": obj.name, "type": obj.type, "thatUserId": obj.thatUserId, 
        "pic": obj.pic, "about": obj.about, "owner": obj.owner, "bookmark": obj.bookmark}) ;
  }
  return result ;
} 

function escapeRegex(text: string): any {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') ;
}