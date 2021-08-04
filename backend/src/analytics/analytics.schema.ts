import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

export type AdditionalSkillDocument = AdditionalSkill & Document;

@Schema()
export class AdditionalSkill {
  @Prop()
  userId: mongoose.Types.ObjectId;

  @Prop()
  id: number;

  @Prop()
  softSkill: string;
}

export const AdditionalSkillSchema =
  SchemaFactory.createForClass(AdditionalSkill);

// -------------------- UserSkill ---------------------------

export const UserSkillSchema = new mongoose.Schema({
  userId: {type: ObjectId , required: [true, 'UserID is not empty'] },
  inJobId: {type: ObjectId , required: [true, 'JobID is not empty'] },
  SkillId: {type: ObjectId , required: [true, 'SkillID is not empty'] },
  Score: {type: Number , required: [true, 'Score is not empty'] }
});

export interface UserSkill {
  id: string;
  userId: ObjectId;
  inJobId: ObjectId;
  SkillId: ObjectId;
  Score: number
}

// -------------------- Skill ---------------------------

export const SkillSchema = new mongoose.Schema({
  SkillName: { type: String, required: [true, 'Skill Name must not empty'] },
}) ;

export interface Skill {
  id: string;
  SkillName: string;
}

// -------------------- InterestJob ---------------------------

export const InterestedJobSchema = new mongoose.Schema({
  userId: { type: ObjectId, required: [true, 'Id must not empty']},
  objective: { type: String, required: [true, 'Objective must not empty']},
})

export interface InterestedJob {
  id: string;
  userId: ObjectId;
  objective: string;
}

//--------------------- Classify Skill --------------------------

export const ClassifySkillSchema = new mongoose.Schema({
  userId: { type: ObjectId, required: [true, 'Id must not empty']},
  JobTitle: { type: String, required: [true, 'JobTitle must not empty']},
  SkillName: { type: String, required: [true, 'SkillName must not empty']},
  IsMain: { type: Number, required: [true, 'IsMain must not empty']},
})

export interface ClassifySkill {
  id: string;
  userId: ObjectId;
  JobTitle: string;
  SkillName: string;
  IsMain: number ;
}

//--------------------- Account --------------------------

export const AccountSchema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
  Gender: String,
  DateofBirth: String,
  ProfilePic: String,
}, { collection: 'account'})

export interface Account extends Document {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
  Gender: string;
  DateofBirth: string;
  ProfilePic: string;
}
