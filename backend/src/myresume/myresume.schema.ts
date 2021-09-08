import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

// -------------------- Resume ---------------------------

export const ResumeSchema = new mongoose.Schema({
  UserId: { type: String, required: [true, 'userID must not empty'] },
  Privacy: { type: String, required: [true, 'Pivacy must not empty'] },
  interestedJob: {
      Job_Objective: {type: String},
      Job__Score: {type: Number},
      Job__JobName: {type: String},
      Job__SkillName: {type: String},
  }
})

export interface Resume extends Document {
  id: ObjectId;
  UserId: String;
  Privacy: String;
  SoftSkill: String;
}

/*// -------------------- UserJobSkill ---------------------------

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
}*/
