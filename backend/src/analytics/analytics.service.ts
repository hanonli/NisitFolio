import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Skill, UserSkill, InterestedJob, ClassifySkill, ClassifySkillSchema, UserAddSkill } from './analytics.schema';

import { ObjectId } from 'mongodb' ;
import * as mongoose from 'mongoose';


@Injectable()
export class AnalyticsService {
  constructor(

    @InjectModel('UserAdditionalSkill')
    private UserAddSkill: Model<UserAddSkill>,

    @InjectModel('UserSkill')
    private UserSkillModel: Model<UserSkill>,

    @InjectModel('Skill')
    private SkillModel: Model<Skill>,
    
    @InjectModel('InterestedJob')
    private JobModel: Model<InterestedJob>,

    @InjectModel('ClassifySkill')
    private ClassifySkillModel: Model<ClassifySkill>,
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
      console.log(res);
      results[i] = res;
    }


    //-----------------------------------------------
    //--------------- for all jobs ------------------
    //-----------------------------------------------
    let all = {};

    const queryAll = await this.UserAddSkill.aggregate([
      { $group: { _id: { userId: "$userId", SoftSkill: "$SoftSkill" } } }
      ]).exec();

    console.log(queryAll);
    
    for ( var j of queryAll ) {
      console.log(j);
      let skillName = j["_id"].SoftSkill;
      if( all.hasOwnProperty(skillName) ){
        console.log("yay");
        all[skillName] += 1;
      }
      else {
        all[skillName] = 1;
      }
    }

    let sorted = Object.keys(all).sort(function(a,b) {return all[b]-all[a]} )

    console.log(sorted);
    
    let allUsers = {};
    for( var skill of sorted ){
      allUsers[skill] = all[skill];
    }

    
    
    return {results, allUsers};
    }

  // -------------------- UserSkill ---------------------------
  
  async findAllUserSkill(): Promise<UserSkill[]> {
    return this.UserSkillModel.find().exec() ;
  }

  async findUserSkill(userId: ObjectId): Promise<UserSkill[]> {
    const userSkill = await this.UserSkillModel.find({userId: userId}).exec() ;
    return userSkill ;
  }

  async AnalysUserSkill(userId: ObjectId): Promise<any[]> {
    const AllSkill: UserSkill[] = await this.findAllUserSkill() ;
    const userSkill: UserSkill[] = await this.findUserSkill(userId) ;
    let SkillA : number ;
    let SkillB : number ;
    let SkillC : number ;
    let sum: number = 0 ;
    const array = [] ;
    let size: number = userSkill.length ;
    for (var item of userSkill) {
      console.log(item.Score) ;
      sum = sum + item.Score ;
    }
    return [];
  }
  
  async createUserSkill(userId: ObjectId, inJobId: ObjectId, SkillId: ObjectId, Score: number){
    const newUserSkill = new this.UserSkillModel({
      userId, inJobId, SkillId, Score
    }) ;
    return await newUserSkill.save() ;
  }

  // -------------------- ClassifySkill ---------------------------
  
  async createClassifySkill(userId: ObjectId, JobTitle: string, SkillName: string, IsMain: number): Promise<ClassifySkill> {
    const newClassifySkill = new this.ClassifySkillModel({
      userId, JobTitle, SkillName, IsMain
    }) ;
    return await newClassifySkill.save() ;
  }

  // -------------------- Interseted Job ---------------------------
  
  async createInterestedJob(userId: ObjectId, objective: string): Promise<InterestedJob> {
    const newJob = new this.JobModel({userId, objective}) ;
    return await newJob.save() ;
  }

  async InterestedJobPercentage(JobTitle: string, IsMain: number): Promise<any[]> {
    const size = await (await this.ClassifySkillModel.find({JobTitle: JobTitle, IsMain: IsMain})).length ;
    const eachSkill = await this.ClassifySkillModel.aggregate([
                        {
                          $group:
                          {
                            _id: { SkillName: "$SkillName"},
                            total: { $sum: 1}                        
                          }
                        }
    ])
    const array = [] ;
    for (var item of eachSkill) {
      const per = item.total*100/size ;
      //console.log(per) ;
      array.push({name: item._id, percentage: per})
    }
    return array;
    // const size = AllSkill.length ;
    // mongoose.Aggregate
    // return AllSkill ;
  }

  // -------------------- Skill ---------------------------

  async findAllSkill(): Promise<Skill[]>{
    return this.SkillModel.find().exec() ;
  }

  async createSkill(SkillName: string) {
    const newSkill = new this.SkillModel({SkillName}) ;
    return await newSkill.save() ;
  }
}
