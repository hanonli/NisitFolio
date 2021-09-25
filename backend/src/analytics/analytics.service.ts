import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserAddSkill, UserJobSkill, AdditionalSkill, JobTitle } from './analytics.schema';
import * as mongoose from 'mongoose' ;
import { ObjectId } from 'mongodb' ;
import { ConstraintMetadata } from 'class-validator/types/metadata/ConstraintMetadata';



@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel('UserAdditionalSkill')
    private UserAddSkill: Model<UserAddSkill>,
    @InjectModel('UserJobSkill')
    private UserJobSkillModel: Model<UserJobSkill>,
    @InjectModel('AdditionalSkill')
    private AdditionalSkillModel: Model<AdditionalSkill>,
    @InjectModel('JobTitle')
    private JobTitleModel: Model<JobTitle>,    

  ) {}
  
  async additionalAnalytics(id: string): Promise<any> {
    const Jobs = await this.UserJobSkillModel.aggregate([
      { $match: {UserId: id} },
      { 
        $group: { 
          _id: { Job_JobName: "$Job_JobName" } 
        },
      },
      { $sort: { _id: 1 } },
    ]);
    console.log("Jobs :", Jobs) ;
    let jobs = [];
    for ( var job of Jobs ) {
      const job_name = job._id.Job_JobName;
      const job_THname = await this.JobTitleModel.findOne({ $or: [ { THName: job_name }, { Name: job_name }]}).select({ Name: 1, THName: 1, _id: 0 }).exec();
      console.log("JobTHName: " ,job_THname) ;
      jobs.push({ name: job_THname.Name, THname: job_THname.THName });
    }

    console.log("jobs: ",jobs);
    let finalResults = {};
    finalResults['InterestedJobs'] = jobs;
    const mySkills = await this.AdditionalSkillModel.find({ UserId: id }).select({ AdditionalSkill: 1 , _id: 0 }).distinct('AdditionalSkill');
    console.log("My Skill: ", mySkills);
    finalResults['mySkills'] = mySkills;

    for ( var job of jobs ) {
      const job_name = job.name;
      console.log(job_name);
      console.log(job.THname);
      const Users = await this.UserJobSkillModel.find({Job_JobName: { "$in": [job_name, job.THname]}}).select({ UserId: 1, _id: 0 }).distinct('UserId').exec();
      console.log("Users: ",Users);
      let users=[];
      for ( var user of Users ) {
        //console.log(user);
        users.push(user.toString());
      }
      //console.log(users);
      const numberOfUsers = users.length;

      const rawResults = await this.AdditionalSkillModel.aggregate([
        {
          $match: { UserId: { $in: users } }
        },
        {  
          $group: {
            _id: { AdditionalSkill: "$AdditionalSkill"},
            total: { $sum: 1 }                        
          }
        },
        { $sort: { total: -1, _id: 1 }}
      ]).exec();

      console.log("Raw Result :",rawResults);

      let ModifiedResults = [];
      for (var result of rawResults) {
        ModifiedResults.push({ AdditionalSkill: result['_id'].AdditionalSkill,
                              total: result.total,
                              percentage: result.total/numberOfUsers * 100
                            });
      }

      finalResults[job_name] = {};
      finalResults[job_name]['numberOfUsers'] = numberOfUsers;
      finalResults[job_name]['List'] = ModifiedResults;
    }
    /*
    * Overview
    */
    const totalUsers = await this.UserJobSkillModel.find().select({ UserId: 1, _id: 0 }).distinct('UserId');
    console.log("Total User: ", totalUsers) ;
    const totalNumberOfUsers = totalUsers.length;
    const rawResults = await this.AdditionalSkillModel.aggregate([
      {  
        $group: {
          _id: { AdditionalSkill: "$AdditionalSkill"},
          total: { $sum: 1 }                        
        }
      },
      { $sort: {total: -1 , _id: 1 }}
    ]).exec();
    console.log("RawResult2: ",rawResults);
    let ModifiedResults = [];
    for (var result of rawResults) {
      if (result['_id'].AdditionalSkill == null) {continue;};
      ModifiedResults.push({ AdditionalSkill: result['_id'].AdditionalSkill,
                            total: result.total,
                            percentage: result.total/totalNumberOfUsers * 100
                          });
  
    }
    finalResults['Overview'] = {};
    finalResults['Overview']['numberOfUsers'] = totalNumberOfUsers;
    finalResults['Overview']['List'] = ModifiedResults;
    return finalResults;
  }
  
/*
* ******************************************************************************************************************************************
*/

  async findUserJobSkill(UserId: string): Promise<any> {
    const userSkill = await this.UserJobSkillModel.aggregate([
                        { $match: {UserId: UserId} },
                        { 
                          $group: { 
                            _id: { Job_JobName: "$Job_JobName" } 
                          }
                        },
                        { $sort: { _id: 1 }},
    ]) ;
    console.log(userSkill) ;
    let array = {} ;
    let InterestedJobs = [] ;
    let THnameJobs = [] ;
    console.log(userSkill) ;
    for ( var job of userSkill ) {
      const job_name = job._id.Job_JobName;
      const job_THname = await this.JobTitleModel.findOne({ $or: [ { THName: job_name }, { Name: job_name }]}).select({ Name: 1,THName: 1, _id: 0 }).exec();
      InterestedJobs.push(job_name) ;
      THnameJobs.push({ "name": job_THname.Name, "THname": job_THname.THName })
    }
    console.log("THName: ", THnameJobs) ;
    array['InterestedJobs'] = THnameJobs ;

    const mySkills = await this.UserJobSkillModel.find({ UserId: UserId }).select({ Job_SkillName: 1 , _id: 0 }).distinct('Job_SkillName').exec();
    console.log("MySkill: ", mySkills) ;
    array['mySkills'] = mySkills;

    for (var job of InterestedJobs) {
      const SumSkill = await this.UserJobSkillModel.aggregate([
                        { $match: { Job_JobName: job } },
                        {
                          $group: {
                            _id: { Job_SkillName: "$Job_SkillName"},
                            mean: { $avg: "$Job_Score" } , 
                            total: { $sum: 1 },
                          }
                        },
                        { $sort : {total: -1, _id: 1}},
      ])
      console.log("SumSkill: ", SumSkill) ; 
      const userList = await this.UserJobSkillModel.aggregate([
                        { $match: { Job_JobName: job } },
                        { 
                          $group: {
                            _id: { UserId : "$UserId"}, 
                            total: { $sum: 1 },
                          }
                        }
      ])
      console.log("userList: ", userList) ;
      //console.log(SumSkill) ;
      let numberOfUsers = userList.length ;
      array[job] = {numberOfUsers: numberOfUsers} ;
      let countTop = 0 ;
      let temp = [] ;
      for (var i of SumSkill){ 
        const _name = i._id.Job_SkillName ;
        const _sum = i.total ;
        const mean = i.mean ;
        const AllUser = await this.UserJobSkillModel.find({Job_JobName: job, Job_SkillName: _name}).sort({ Job_Score: 1 }).exec() ;
        console.log("AllUser: ", AllUser) ;
        if ( countTop <= 2 || mySkills.includes(_name) ) {  
          // ---------- AllUser Score --------------//
          
          let AllScore = [] ;
          let UserScore = null ;
          let n = 0 ;
          //console.log(AllUser) ;
          for (var j of AllUser) {
            if (UserId == j.UserId) { 
              UserScore = j.Job_Score ;
            }
            AllScore.push(j.Job_Score) ;
            n += 1 ;
          }
          const detailList = find_mode(AllScore) ;
          const newAllScore = detailList[0]
          const count = detailList[1] ;
          const mode = detailList[2] ;
          
          // console.log(_name);
          // console.log(_sum);
          temp.push({SkillName: _name, total: _sum, "AllScore": newAllScore, "UserScore": UserScore, "Count": count,"Mean": mean, "Mode": mode, "percentage": n/numberOfUsers*100}) ;
        }
        else { 
          temp.push({SkillName: _name, total: _sum, "percentage": AllUser.length/numberOfUsers*100})
        }
        countTop ++ ;
      }
      array[job]['List'] = temp ;
    }

    // ----------------------------------------- Overview -------------------------------------------------

    const users = await this.UserJobSkillModel.find( {Job_JobName: { "$in" : InterestedJobs }} ).select({ UserId: 1, _id: 0 }).distinct('UserId');
    console.log("users :", users) ;
    const numberOfUsers = users.length;
    
    const New = await this.UserJobSkillModel.aggregate([
      { 
        $match: { Job_JobName: { "$in" : InterestedJobs } } 
      },
      { 
        $group: { 
          _id: { Job_SkillName: "$Job_SkillName" }, 
          mean: { $avg: "$Job_Score"} ,
          total: { $sum: 1 },
        }
      },
      { 
        $sort: { total: -1 , _id: 1 },
      },
    ])
    console.log("New: ", New) ;
    let temp2 = [] ;
    let percentage = 0 ;
    
    let countTop = 0 ;
    for (var i of New) {
      const Skill = i._id.Job_SkillName ;
      const total = i.total ;
      const AllUserScore = await this.UserJobSkillModel.find( { Job_JobName: { "$in": InterestedJobs }, Job_SkillName: Skill } ).select({ UserId: 1, Job_Score: 1, _id: 0 }).sort({Job_Score: 1}) ;
      console.log("AllUserSCore: ", AllUserScore) ;
      let AllScore = [] ;
      let UserScore = null ;
      if (countTop <= 2 || mySkills.includes(Skill)) {
        countTop += 1 ;
        for (var obj of AllUserScore) {
          // console.log(obj.Score) ;
          // console.log(obj.userId) ;
          AllScore.push(obj.Job_Score) ;
          if (UserId == obj.UserId) {
            UserScore = obj.Job_Score ;
          }
        }
        const details = find_mode(AllScore) ;
        const newAllScore = details[0] ;
        const count = details[1] ;
        const mode = details[2] ;
        percentage = total/numberOfUsers*100 ;
        temp2.push({"SkillName": Skill, "total": total, "AllScore": newAllScore, "UserScore": UserScore, "Count": count, "Mean": i.mean, "Mode": mode, "percentage": percentage}) ;
      }
      else {
        temp2.push({ "SkillName": Skill, "total": total, "Percentage": total/numberOfUsers*100 })
      }
    }
    array["Overview"] = {};
    array['Overview']['numberOfUser'] = numberOfUsers ;
    array['Overview']['List'] = temp2 ; 
    //console.log(New) ;
    //console.log(array);
    return array ;
  }
}

function find_mode( arr: any[] ): any {
  let count = {};
  let max_count = 0;
  for ( let i=0; i<arr.length; i++ ) {
    const num = arr[i].toFixed(2);
    if(count.hasOwnProperty(num)){
      count[num]++;
    }
    else count[num]=1;
    if(count[num]>max_count)
      max_count = count[num];
  }

  let Score = [] ;
  let freq = [] ;
  for ( const num in count ) {
    Score.push(parseFloat(num)) ;
    freq.push(count[num])
  }

  let mode=[];
  let count_mode=0;
  for ( const num in count ) {
    if (count[num] == max_count){
      mode.push(parseFloat(num));
      count_mode++
    }
    if(count_mode>2){
      mode=[];
      break;
    }
  }
  return [Score, freq, mode];
}