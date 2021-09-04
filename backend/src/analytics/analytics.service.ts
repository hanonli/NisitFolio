import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserAddSkill, UserJobSkill } from './analytics.schema';

import { ObjectId } from 'mongodb' ;



@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel('UserAdditionalSkill')
    private UserAddSkill: Model<UserAddSkill>,
    @InjectModel('UserJobSkill')
    private UserJobSkillModel: Model<UserJobSkill>,

  ) {}
  
  /*
  * FindAdditionSkillById
  * parameters: id
  * return results (type: {})
  */

  async findAddSkillById(id: ObjectId): Promise<any> {
    
    //const oid = mongoose.Types.ObjectId('610d3832ca49ebf4cdfed02f');
    //const InterestedJobs = await this.UserJobSkillModel.find({ userId: id }).select({ JobName: 1 , _id: 0 }).distinct('JobName');
    //console.log(InterestedJobs);

    let results = {};
    const InterestedJobs = ["Software Engineer", "Data Scientist"]; // test
    results['InterestedJobs'] = InterestedJobs;

    /*
    * First find people who interest in the same job(s).
    * then count a number of them grouped by SoftSkill.
    */

    for (var job of InterestedJobs) {
      /*
      * Count number of users who interest in this job.
      */
      
      const users = await this.UserAddSkill.find( { Job: job }).select( { userId:1 }).distinct('userId').exec();
      const numberOfUsers = users.length;
      results[job] = { numberOfUsers: numberOfUsers };
      //console.log(numberOfUsers);
      
      // Match the job, group by SoftSkill, count, sort
      const rawResult = await this.UserAddSkill.aggregate([
        {
          $match: { Job: job }
        },
        {  
          $group: {
            _id: { SoftSkill: "$SoftSkill"},
            total: { $sum: 1}                        
          }
        },
        { $sort: {total: -1}}
      ]).exec();

      /*
      * rawResult is in the form of [ { _id: { SoftSkill: 'XXXXX' }, total: X }, ]
      * Need to rearrange to a simpler form.
      */

      let ArrangedResult = [];
      for (var result of rawResult) {
        ArrangedResult.push({ SoftSkill: result['_id'].SoftSkill,
                              total: result.total,
                              percentage: result.total/numberOfUsers * 100
                            })
      }
      results[job]["List"] = ArrangedResult;
    }

    /*
    * Now we look at the "Overview" considering all users.
    */
    
    const users = await this.UserAddSkill.find().select( { userId:1 } ).distinct('userId').exec();
    const numberOfUsers = users.length;

    results["Overview"] = { numberOfUsers: numberOfUsers };

    /*
    * Note that there are duplicates of one's skill sets, because we store at most 3 documents per job per user.
    * So we are going to drop those duplicates.
    */

    const queryResults = await this.UserAddSkill.aggregate([
      {  
        $group: { _id: { userId: "$userId", SoftSkill: "$SoftSkill"} }
      },
    ]).exec();

    console.log(queryResults);

    let skillCounts = {};

    for ( result of queryResults ) {
      const skill = result._id["SoftSkill"];
      if ( skillCounts.hasOwnProperty(skill) ) {
        skillCounts[skill] += 1;
      }
      else {
        skillCounts[skill] = 1;
      }
    }

    /*
    * Sort object by values in descending order. This is a little tricky.
    * We will get a list of keys.
    */

    const keysSorted = Object.keys(skillCounts).sort(function(a,b) {return skillCounts[b]-skillCounts[a]});

    /*
    * Finally for each key in that list. we add desired fields to it.
    * Then map the final result to "Overview".
    */
    let finalResults = [];
    for ( var key of keysSorted ) {
      finalResults.push({ SoftSkill: key,
                          total: skillCounts[key],
                          percentage: skillCounts[key]/numberOfUsers * 100
                        });
    }

    results["Overview"]["List"] = finalResults;

    // test -> http://localhost:2000/analytics/additional/610d3832ca49ebf4cdfed02e
    return results;
    }

  /*********************************************************************************************************************************************/

  async findUserJobSkill(userId: ObjectId): Promise<any> {
    const findObjective = await this.UserJobSkillModel.aggregate([
                          { $match: {userId: userId} },
                          { 
                            $group: { 
                              _id: { Objective: "$Objective" } 
                            }
                          }
    ]) ;
    let array = {} ;
    let InterestedJobs = [] ;

    for (var obj of findObjective ) {
      InterestedJobs.push(obj._id.Objective) ;  
    }
    array['InterestedJobs'] = InterestedJobs ;

    for (var job of InterestedJobs ) {
      const SumSkill = await this.UserJobSkillModel.aggregate([
                      { $match: { Objective: job } },
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