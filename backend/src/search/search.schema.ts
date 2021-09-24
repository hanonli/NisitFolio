import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose' ;
import { ObjectId } from "mongodb";

// ------------------------------------- User Info --------------------------------------

export interface UserInfo extends Document {
  readonly UserId: string ,
  readonly Firstname: string ,
  readonly Lastname: string ,
  readonly Birthday: string ,
  readonly Gender: string ,
  readonly AboutMe: string ,
  readonly Email2nd: string ,
  readonly Country: string ,
  readonly Province: string ,
  readonly City: string ,
  readonly totalBookmark: number,
}

// ------------------------------------- Total Bookmark ---------------------------------------

export const TotalBookmarkSchema = new mongoose.Schema({
  type: { type: String, required: [true, 'type must not be empty.']},
  userId: { type: String, required: [true, 'userId must not be empty.'] },
  projectName: { type: String },
  totalBookmarks: { type: Number }
})

export interface TotalBookmark extends Document {
  type: String;
  userId: String;
  projectName?: String;
  totalBookmarks?: Number;
}

// ------------------------------------ Job Title ----------------------------------------------

export interface JobTitle extends Document {
  Name: string ;
  THName: string ;
}

// -------------------------------------- UserJobSkill ---------------------------------------

export interface UserJobSkill extends Document {
  id: string;
  userId: string;
  Objective: string;
  Score: number;
  JobName: string;
  SkillName: string;
}

// ------------------------------------ interested job ---------------------------------------

export const InterestedJobSchema = new mongoose.Schema({
  UserId : String ,
  Job_JobName : String ,
  Job_Objective : Array ,
  Job_Score : Array ,
  Job_SkillName : Array ,
  create_time: String ,
  last_modified : Array ,
  ResumeId : Array ,
}, { collection: 'InterestedJob'})

export interface InterestedJob extends Document {
  userId: string ;
  last_modified: string[] ;
}
