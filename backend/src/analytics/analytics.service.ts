import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AdditionalSkill, AdditionalSkillDocument, UserSkill, UserSkillDocument } from './analytics.schema';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel('AdditionalSkill')
    private AdditionalSkillModel: Model<AdditionalSkillDocument>,

    @InjectModel('UserSkill')
    private UserSkillModel: Model<UserSkillDocument>,
  ) {}

  async findAddSkill(): Promise<AdditionalSkill[]> {
    //console.log('test');
    return this.AdditionalSkillModel.find().exec();
  }

  async findUserSkill(): Promise<UserSkill[]> {
    return this.UserSkillModel.find().exec();
  }
}
