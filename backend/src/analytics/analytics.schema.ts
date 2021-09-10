import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

// -------------------- UserAdditionalSkill ---------------------------

export const UserAdditionalSkillSchema = new mongoose.Schema({
  userId: { type: ObjectId, required: [true, 'userID must not empty'] },
  Job: { type: String, required: [true, 'Job must not empty'] },
  AdditionalSkill: { type: String, required: [true, 'AdditionalSkill must not empty'] },
})

export interface UserAddSkill extends Document {
  id: string;
  userId: ObjectId;
  Job: String;
  AdditionalSkill: String;
}

// -------------------- UserJobSkill ---------------------------

export const UserJobSkillSchema = new mongoose.Schema({
  userId: { type: ObjectId, required: [true, 'userID must not empty'] },
  Objective: { type: String, required: [true, 'Objective must not empty'] },
  Score: { type: Number, required: [true, 'Score must not empty']},
  JobName: { type: String, required: [true, 'JobName must not empty']},
  SkillName: { type: String, required: [true, 'SkillName must not empty']},
})

export interface UserJobSkill { 
  id: string;
  userId: ObjectId;
  Objective: string;
  Score: number;
  JobName: string;
  SkillName: string;
}

@Schema({ collection: 'AdditionalSkill' })
export class AdditionalSkill {
  @Prop()
  UserId: ObjectId;

  @Prop()
  AdditionalSkill: String;
}

export const AdditionalSkillSchema = SchemaFactory.createForClass(AdditionalSkill);
