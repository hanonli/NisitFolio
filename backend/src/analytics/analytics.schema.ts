import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

// -------------------- UserAdditionalSkill ---------------------------

export const UserAdditionalSkillSchema = new mongoose.Schema({
  userId: { type: String, required: [true, 'userID must not empty'] },
  Job: { type: String, required: [true, 'Job must not empty'] },
  AdditionalSkill: { type: String, required: [true, 'AdditionalSkill must not empty'] },
})

export interface UserAddSkill extends Document {
  id: string;
  userId: string;
  Job: String;
  AdditionalSkill: String;
}

// -------------------- UserJobSkill ---------------------------

export const UserJobSkillSchema = new mongoose.Schema({
  UserId: { type: String, required: [true, 'userID must not empty'] },
  Job_JobName: { type: String, required: [true, 'JobName must not empty']},
  Job_Score: { type: Number, required: [true, 'Score must not empty']},
  Job_SkillName: { type: String, required: [true, 'SkillName must not empty']},
}, {collection: 'UserJobSkill'})

export interface UserJobSkill { 
  id: string;
  UserId: string;
  Job_JobName: string;
  Job_Score: number;
  Job_SkillName: string;
}

@Schema({ collection: 'AdditionalSkill' })
export class AdditionalSkill {
  @Prop()
  UserId: String;

  @Prop()
  AdditionalSkill: String;

  @Prop()
  create_time: Date;

  @Prop()
  last_modified: Date[];

  @Prop()
  ResumeId: String[];
}

export const AdditionalSkillSchema = SchemaFactory.createForClass(AdditionalSkill);

@Schema({ collection: 'JobTitle' })
export class JobTitle {
  @Prop()
  Name: String;

  @Prop()
  THName: String;
}

export const JobTitleSchema = SchemaFactory.createForClass(JobTitle);


@Schema({ collection: 'Analytics' , timestamps: true })
export class Analytics {
  @Prop()
  UserId: String;

  @Prop({ type: Object })
  Main: any;

  @Prop({ type: Object })
  Additional: any;

  @Prop()
  updatedAt: Date;

  @Prop()
  createdAt: Date;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);
