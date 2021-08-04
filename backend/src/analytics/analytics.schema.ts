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
  inJobId: {type: String , required: [true, 'JobID is not empty'] },
  SkillId: {type: ObjectId , required: [true, 'SkillID is not empty'] },
  Score: {type: Number , required: [true, 'Score is not empty'] }
});

export interface UserSkill {
  id: string;
  userId: ObjectId;
  inJobId: string;
  SkillId: ObjectId;
  Score: number
}

// -------------------- Skill ---------------------------

export const SkillSchema = new mongoose.Schema({
  SkillName: { type: String, required: [true, 'Skill Name must not empty'] },
}) ;

export interface Skill {
  SkillName: string;
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
