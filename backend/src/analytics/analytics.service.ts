import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
<<<<<<< HEAD
import { AdditionalSkill, AdditionalSkillDocument, Skill, UserSkill } from './analytics.schema';
import { ObjectId } from 'mongodb';

import mainUserSkillAnalys from './Entities/userMainSkill.entity';
=======
import { AdditionalSkill, AdditionalSkillDocument, Skill, UserSkill, Account } from './analytics.schema';
import * as mongoose from 'mongoose';
>>>>>>> 7ef4f596ceabffd9d0d93848bce04a8b816484aa

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel('account')
    private AccountModel: Model<Account>,

    @InjectModel('AdditionalSkill')
    private AdditionalSkillModel: Model<AdditionalSkillDocument>,
    
    @InjectModel('UserSkill')
    private UserSkillModel: Model<UserSkill>,
    
    @InjectModel('Skill')
    private SkillModel: Model<Skill>,
    ) {}
  
  async findAllAccount(): Promise<Account[]> {
    return this.AccountModel.find().exec();
  }

  // -------------------- AdditionalSkill ---------------------------

  async findAddSkill(): Promise<AdditionalSkill[]> {
    return this.AdditionalSkillModel.find().exec();
  }

  async AddSkillPercentage(id: mongoose.Types.ObjectId): Promise<any[]> {
    const skills = await this.AdditionalSkillModel.find({userId: id})
                                                  .select('-_id -userId ')
                                                  .lean().exec();
    const count = await this.AccountModel.count();
    //console.log(skills);
    const results = [];
    for (var i=0; i<3; i++) {
      //console.log(skills[i].id);
      const num = await this.AdditionalSkillModel.countDocuments({id: skills[i].id}).exec();
      const percentage = num/count * 100;
      results.push({name: skills[i].softSkill,
                   percentage: percentage}); 
    }
    //console.log(count);
    return results;
  }

  // -------------------- UserSkill ---------------------------
  
  async findAllUserSkill(): Promise<UserSkill[]> {
    return this.UserSkillModel.find().exec() ;
  }

  async findUserSkill(userId: ObjectId): Promise<UserSkill[]> {
    const userSkill = await this.UserSkillModel.find({userId: userId}).exec() ;
    return userSkill ;
  }

  async AnalysUserSkill(userId: ObjectId): Promise<any> {
    const AllSkill: UserSkill[] = await this.findAllUserSkill() ;
    const userSkill: UserSkill[] = await this.findUserSkill(userId) ;
    // const SkillA : number = 0 ;
    // const SkillB : number = 0 ;
    // const SkillC : number = 0 ;
    let sum: number = 0 ;
    let size: number = userSkill.length ;
    for (var item of userSkill) {
      console.log(item.Score) ;
      sum = sum + item.Score ;
    }
    return sum/size ;
  }

  async createUserSkill(userId: ObjectId, inJobId: string, SkillId: ObjectId, Score: number){
    const newUserSkill = new this.UserSkillModel({
      userId, inJobId, SkillId, Score
    }) ;
    return await newUserSkill.save() ;
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
