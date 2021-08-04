import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AdditionalSkill, AdditionalSkillDocument, Skill, UserSkill, Account } from './analytics.schema';
import * as mongoose from 'mongoose';

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
  
  async findUserSkill(): Promise<UserSkill[]> {
    return this.UserSkillModel.find().exec() ;
  }

  async createUserSkill(userId: string, inJobId: string, SkillId: string, Score: number){
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
