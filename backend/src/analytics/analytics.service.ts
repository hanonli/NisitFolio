import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserAddSkill, UserJobSkill } from './analytics.schema';

import { ObjectId } from 'mongodb' ;
import * as mongoose from 'mongoose';
import { any } from '@hapi/joi';
import { arrayNotContains } from 'class-validator';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel('UserAdditionalSkill')
    private UserAddSkill: Model<UserAddSkill>,
    @InjectModel('UserJobSkill')
    private UserJobSkillModel: Model<UserJobSkill>,

  ) {}
  
  // -------------------- AdditionalSkill ---------------------------

  async findAddSkillById(id: ObjectId): Promise<any> {
    
    // not yey developed
    // get job from interested job
    let job = ["Software Engineer", "Data Scientist"]; // test
    let results = {};


    //-----------------------------------------------
    //--------------- for each job ------------------
    //-----------------------------------------------
    for (var i of job){
      const res = await this.UserAddSkill.aggregate([
        {
          $match: { Job: i }
        },
        {  
          $group: {
            _id: { SoftSkill: "$SoftSkill"},
            total: { $sum: 1}                        
          }
        },
        { $sort: {total: -1}}
      ]).exec();
      //console.log(res);
      results[i] = res;
    }


    //-----------------------------------------------
    //--------------- for all jobs ------------------
    //-----------------------------------------------
    let all = {};

    const queryAll = await this.UserAddSkill.aggregate([
      { $group: { _id: { userId: "$userId", SoftSkill: "$SoftSkill" } } }
      ]).exec();

    //console.log(queryAll);
    
    for ( var j of queryAll ) {
      //console.log(j);
      let skillName = j["_id"].SoftSkill;
      if( all.hasOwnProperty(skillName) ){
        //console.log("yay");
        all[skillName] += 1;
      }
      else {
        all[skillName] = 1;
      }
    }

    let sorted = Object.keys(all).sort(function(a,b) {return all[b]-all[a]} )

    //console.log(sorted);
    
    let allUsers = {};
    for( var skill of sorted ){
      allUsers[skill] = all[skill];
    }


    // for test -> http://localhost:3000/analytics/additional/610d3832ca49ebf4cdfed02e
    return {results, allUsers};
    }

  async findUserJobSkill(userId: ObjectId): Promise<any> {
    const findObjective = await this.UserJobSkillModel.aggregate([
                          { $match: {userId: userId} },
                          { 
                            $group: { 
                              _id: { Objective: "$Objective" } 
                            }
                          }
    ]) ;
    let array = [] ;
    for (var obj of findObjective ) {
      const ObjectName = obj._id.Objective ;
      const SumSkill = await this.UserJobSkillModel.aggregate([
                      { $match: { Objective: ObjectName } },
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
      // let count = 0 ;
      for (var i of SumSkill){ 
        // console.log(i) ;
        const _name = i._id.SkillName ;
        const _sum = i.total ;
        // console.log(_name);
        // console.log(_sum);
        var temp2 = array.push({Objective: ObjectName, SkillName: _name, total: _sum, percentage: _sum/n}) ;
        // count ++ ;
        // if (count == 3) break ;
      }
      console.log(array);
      //console.log(SumSkill);
    }
    return array ;
    //console.log(findObjective);
  }

  async findAUserSkill(SkillName: string, userId: ObjectId): Promise<any[]> {
    const AllUser = await this.UserJobSkillModel.find({SkillName: SkillName}) ; 
    const size = AllUser.length ;
    const Skill = await this.UserJobSkillModel.aggregate([
                  { $match: { SkillName: SkillName} },
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
    let array = [] ;
    array.push( { AllUserScore: AllScore ,SkillName: SkillName, n: size, Mean: mean, UserScore: UserScore[0].Score, Mode: Mode_Array })
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

  // -------------------- Skill ---------------------------

  async createUserJobSkill(userId: ObjectId, Objective: string, Score: number, JobName: string, SkillName: string) {
    const createUserJobSkill =  new this.UserJobSkillModel({userId, Objective, Score, JobName, SkillName}) ;
    return createUserJobSkill.save() ;
  }
}