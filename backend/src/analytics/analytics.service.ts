import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AdditionalSkill, AdditionalSkillDocument } from './analytics.schema';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel('AdditionalSkill')
    private AdditionalSkillModel: Model<AdditionalSkillDocument>,
  ) {}

  async findAddSkill(): Promise<AdditionalSkill[]> {
    //console.log('test');
    return this.AdditionalSkillModel.find().exec();
  }
}
