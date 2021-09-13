import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserAddSkill, UserJobSkill, AdditionalSkill, JobTitle } from './analytics.schema';

import { ObjectId } from 'mongodb' ;



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
  
  async additionalAnalytics(id: ObjectId): Promise<any> {
    const Jobs = await this.UserJobSkillModel.aggregate([
      { $match: {userId: id} },
      { 
        $group: { 
          _id: { JobName: "$JobName" } 
        },
      },
      { $sort: { _id: 1 } },
    ]);

    let jobs = [];
    for ( var job of Jobs ) {
      const job_name = job._id.JobName;
      const job_THname = await this.JobTitleModel.findOne({ Name: job_name }).select({ THName: 1, _id: 0 }).exec();
      jobs.push({ name: job_name, THname: job_THname.THName });
    }

    console.log(jobs);
    let finalResults = {};
    finalResults['InterestedJobs'] = jobs;
    const mySkills = await this.AdditionalSkillModel.find({ UserId: id }).select({ AdditionalSkill: 1 , _id: 0 }).distinct('AdditionalSkill');
    //console.log(mySkills);
    finalResults['mySkills'] = mySkills;

    for ( var job of jobs ) {
      const job_name = job.name;
      console.log(job_name);
      console.log(job.THname);
      const users = await this.UserJobSkillModel.find({ JobName: job_name }).select({ userId: 1, _id: 0 }).distinct('userId');
      //console.log(users);
      const numberOfUsers = users.length;

      const rawResults = await this.AdditionalSkillModel.aggregate([
        {
          $match: { UserId: { "$in": users } }
        },
        {  
          $group: {
            _id: { AdditionalSkill: "$AdditionalSkill"},
            total: { $sum: 1 }                        
          }
        },
        { $sort: { total: -1, _id: 1 }}
      ]).exec();

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
    const totalUsers = await this.UserJobSkillModel.find().select({ userId: 1, _id: 0 }).distinct('userId');
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
    //console.log(rawResults);
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

  async findUserJobSkill(userId: ObjectId): Promise<any> {
    const userSkill = await this.UserJobSkillModel.aggregate([
                        { $match: {userId: userId} },
                        { 
                          $group: { 
                            _id: { JobName: "$JobName" } 
                          }
                        },
                        { $sort: { _id: 1 }},
    ]) ;
    let array = {} ;
    let InterestedJobs = [] ;
    let THnameJobs = [] ;
    
    for ( var job of userSkill ) {
      const job_name = job._id.JobName;
      const job_THname = await this.JobTitleModel.findOne({ Name: job_name }).select({ THName: 1, _id: 0 }).exec();
      InterestedJobs.push(job._id.JobName) ;
      THnameJobs.push({ "name": job_name, "THname": job_THname.THName })
    }

    array['InterestedJobs'] = THnameJobs ;

    const mySkills = await this.UserJobSkillModel.find({ userId: userId }).select({ SkillName: 1 , _id: 0 }).distinct('SkillName').exec();
    array['mySkills'] = mySkills;

    for (var job of InterestedJobs) {
      const SumSkill = await this.UserJobSkillModel.aggregate([
                        { $match: { JobName: job } },
                        {
                          $group: {
                            _id: { SkillName: "$SkillName"},
                            mean: { $avg: "$Score" } , 
                            total: { $sum: 1 },
                          }
                        },
                        { $sort : {total: -1, _id: 1}},
      ])
      const userList = await this.UserJobSkillModel.aggregate([
                        { $match: { JobName: job } },
                        { 
                          $group: {
                            _id: { userId : "$userId"}, 
                            total: { $sum: 1 },
                          }
                        }
      ])
      //console.log(SumSkill) ;
      let numberOfUsers = userList.length ;
      array[job] = {numberOfUsers: numberOfUsers} ;
      let countTop = 0 ;
      let temp = [] ;
      for (var i of SumSkill){ 
        const _name = i._id.SkillName ;
        const _sum = i.total ;
        const mean = i.mean ;
        if ( countTop <= 2 || mySkills.includes(_name) ) {  
          // ---------- AllUser Score --------------//
          const AllUser = await this.UserJobSkillModel.find({JobName: job, SkillName: _name}).sort({ Score: 1 }).exec() ;
          
          let AllScore = [] ;
          let UserScore = null ;
          let n = 0 ;
          //console.log(AllUser) ;
          for (var j of AllUser) {
            if (userId.equals(j.userId)) { 
              UserScore = j.Score ;
            }
            AllScore.push(j.Score) ;
            n += 1 ;
          }
          const detailList = find_mode(AllScore) ;
          const newAllScore = detailList[0]
          const count = detailList[1] ;
          const mode = detailList[2] ;
          
          // console.log(_name);
          // console.log(_sum);
          temp.push({SkillName: _name, total: _sum, "AllScore": newAllScore, "UserScore": UserScore, "Count": count,"Mean": mean, "Mode": mode, percentage: n/numberOfUsers*100}) ;
        }
        else { 
          temp.push({SkillName: _name, total: _sum, "Mean": mean})
        }
        countTop ++ ;
      }
      array[job]['List'] = temp ;
    }

    // ----------------------------------------- Overview -------------------------------------------------

    const users = await this.UserJobSkillModel.find( {JobName: { "$in" : InterestedJobs }} ).select({ userId: 1, _id: 0 }).distinct('userId');
    const numberOfUsers = users.length;
    
    const New = await this.UserJobSkillModel.aggregate([
      { 
        $match: { JobName: { "$in" : InterestedJobs } } 
      },
      { 
        $group: { 
          _id: { SkillName: "$SkillName" }, 
          mean: { $avg: "$Score"} ,
          total: { $sum: 1 },
        }
      },
      { 
        $sort: { total: -1 , _id: 1 },
      },
    ])
    let temp2 = [] ;
    let percentage = 0 ;
    
    let countTop = 0 ;
    for (var i of New) {
      const Skill = i._id.SkillName ;
      const total = i.total ;
      const AllUserScore = await this.UserJobSkillModel.find( { JobName: { "$in": InterestedJobs }, SkillName: Skill } ).select({ userId: 1, Score: 1, _id: 0 }).sort({Score: 1}) ;
      //console.log(AllUserScore) ;
      let AllScore = [] ;
      let UserScore = null ;
      if (countTop <= 2 || mySkills.includes(Skill)) {
        countTop += 1 ;
        for (var obj of AllUserScore) {
          // console.log(obj.Score) ;
          // console.log(obj.userId) ;
          AllScore.push(obj.Score) ;
          if (userId.equals(obj.userId)) {
            UserScore = obj.Score ;
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
        temp2.push({ "SkillName": Skill, "total": total, "Mean": i.mean })
      }
    }
    array["Overview"] = {};
    array['Overview']['numberOfUser'] = numberOfUsers ;
    array['Overview']['List'] = temp2 ; 
    //console.log(New) ;
    //console.log(array);
    return array ;
  }

  // -------------------- Skill ---------------------------[]

  async createUserJobSkill(userId: ObjectId, Objective: string, Score: number, JobName: string, SkillName: string) {
    const createUserJobSkill =  new this.UserJobSkillModel({userId, Objective, Score, JobName, SkillName}) ;
    return createUserJobSkill.save() ;
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