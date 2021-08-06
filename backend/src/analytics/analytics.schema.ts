import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

// -------------------- UserAdditionalSkill ---------------------------

export const UserAdditionalSkillSchema = new mongoose.Schema({
  userId: ObjectId,
  Job: String,
  SoftSkill: String,
})

export interface UserAddSkill extends Document {
  userId: ObjectId;
  Job: String;
  SoftSkill: String;
}

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
