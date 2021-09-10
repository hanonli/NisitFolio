import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserAddSkill, UserJobSkill, AdditionalSkill } from './analytics.schema';

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

  ) {}
  
  async additionalAnalytics(id: ObjectId): Promise<any> {
    const InterestedJobs = await this.UserJobSkillModel.find({ userId: id }).select({ JobName: 1 , _id: 0 }).distinct('JobName');
    //console.log(InterestedJobs);
    let finalResults = {};
    finalResults['InterestedJobs'] = InterestedJobs;
    const mySkills = await this.AdditionalSkillModel.find({ UserId: id }).select({ AdditionalSkill: 1 , _id: 0 }).distinct('AdditionalSkill');
    //console.log(mySkills);
    finalResults['mySkills'] = mySkills;

    for ( var job of InterestedJobs ) {
      const users = await this.UserJobSkillModel.find({ JobName: job }).select({ userId: 1, _id: 0 }).distinct('userId');
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
      finalResults[job] = {};
      finalResults[job]['numberOfUsers'] = numberOfUsers;
      finalResults[job]['List'] = ModifiedResults;
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
    const findObjective = await this.UserJobSkillModel.aggregate([
                          { $match: {userId: userId} },
                          { 
                            $group: { 
                              _id: { JobName: "$JobName" } 
                            }
                          }
    ]) ;
    let array = {} ;
    let InterestedJobs = [] ;

    for (var obj of findObjective ) {
      InterestedJobs.push(obj._id.JobName) ;  
    }
    array['InterestedJobs'] = InterestedJobs ;

    for (var job of InterestedJobs ) {
      const SumSkill = await this.UserJobSkillModel.aggregate([
                      { $match: { JobName: job } },
                      {
                        $group: {
                          _id: { SkillName: "$SkillName"}, 
                          total: { $sum: 1},
                        }
                      },
                      { $sort : {total: -1}},
      ])
      let n = 0 ;
      for (var i of SumSkill) {
        n += i.total ;
      }
      array[job] = {numberOfUsers: n} ;
      // let count = 0 ;
      // results[job] = { numberOfUsers: numberOfUsers };
      // results[job]["List"] = ArrangedResult;
      let temp = [] ;
      for (var i of SumSkill){ 
        // console.log(i) ;
        const _name = i._id.SkillName ;
        const _sum = i.total ;
        // console.log(_name);
        // console.log(_sum);
        temp.push({SkillName: _name, total: _sum, percentage: _sum/n}) ;
        // count ++ ;
        // if (count == 3) break ;
      }
      array[job]['List'] = temp ;
      console.log(array);
      //console.log(SumSkill);
    }
    return array ;
    //console.log(findObjective);
  }

  async findAUserSkill(SkillName: string, userId: ObjectId): Promise<any> {
    const AllUser = await this.UserJobSkillModel.find({SkillName: SkillName}) ; 
    const size = AllUser.length ;
    const Skill = await this.UserJobSkillModel.aggregate([
                  { $match: { SkillName: SkillName } },
                  { $group: {
                      _id: { SkillName: "$SkillName" },
                      Score: { $sum: "$Score" } ,
                    }
                  },
                  { $sort : {total: -1} },
    ]) ;

    // ------- All UserSkill ---------
    let AllScore = [] ;
    for (var i of AllUser) {
      AllScore.push(i.Score) ;
    }

    // ------- Find Mode ---------
    const Mode = await this.UserJobSkillModel.aggregate([
                  { $match: { SkillName: SkillName }} ,
                  { $group: 
                    {
                    _id: {Score: "$Score"},
                    total: {$sum: 1},
                    }
                  },
                  { $sort: {total: -1} },
    ])
    let Mode_Array = [] ;
    const Max = Mode[0]._id.total ;
    let check = 0 ;
    if (Mode.length > 3) {
      const fourth = Mode[3]._id.total ;
      if (Max == fourth) check = 1 ;
    }
    let count = 0 ;
    for (var index in Mode) {
      const isMode = Mode[index]._id.Score ;
      if (index == "0") {
        Mode_Array.push(isMode) ;
      }
      else {
        const Now = Mode[index]._id.total ;
        if (Now == Max) {
          Mode_Array.push(isMode) ;
        } else break ;
      }
      count ++ ;
      if (count == 3) break ;
    }

    // ------- Find Mean ---------
    const mean = Skill[0].Score/size ;
    
    // ------- User Score ---------
    const UserScore = await this.UserJobSkillModel.find({userId: userId, SkillName: SkillName}) ;
    
    // ------- Return Result ---------
    let array = {} ;
    array = { "AllUserScore": AllScore ,"SkillName": SkillName, "n": size, "Mean": mean, "UserScore": UserScore[0].Score, "Mode": Mode_Array }; 
    return array ;
  }

  // --------------- find SkillName in UserJobSkill by userId
  // const findUserSkill = await this.UserJobSkillModel.aggregate([
  //                   { $match : { userId : userId } },
  //                   {
  //                     $group: {
  //                       _id: { SkillName: "$SkillName"},
  //                     },
  //                   }
  // ]) ;
  // for (var item of findUserSkill) {
  //   console.log(item._id.SkillName);
  // }
  
  // -------------------- Interested Job ---------------------------
  
    // const size = await (await this.ClassifySkillModel.find({JobTitle: JobTitle, IsMain: IsMain})).length ;
    // const eachSkill = await this.ClassifySkillModel.aggregate([
    //                     {
    //                       $group:
    //                       {
    //                         _id: { SkillName: "$SkillName"},
    //                         total: { $sum: 1}                        
    //                       }
    //                     }
    // ])

  // -------------------- Skill ---------------------------[]

  async createUserJobSkill(userId: ObjectId, Objective: string, Score: number, JobName: string, SkillName: string) {
    const createUserJobSkill =  new this.UserJobSkillModel({userId, Objective, Score, JobName, SkillName}) ;
    return createUserJobSkill.save() ;
  }
}