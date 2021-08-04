import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AdditionalSkill, AdditionalSkillDocument, Skill, UserSkill } from './analytics.schema';
import { ObjectId } from 'mongodb';

import mainUserSkillAnalys from './Entities/userMainSkill.entity';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel('AdditionalSkill')
    private AdditionalSkillModel: Model<AdditionalSkillDocument>,
    
    @InjectModel('UserSkill')
    private UserSkillModel: Model<UserSkill>,
    
    @InjectModel('Skill')
    private SkillModel: Model<Skill>,
    ) {}
    
  async findAddSkill(): Promise<AdditionalSkill[]> {
    console.log('test');
    return this.AdditionalSkillModel.find().exec();
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
