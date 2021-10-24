import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose' ;
import { ObjectId } from "mongodb";
import { any } from "joi";
import { Any } from "typeorm";

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
  readonly create_time: string,
  readonly last_modified: string[],
  readonly ProfilePic: string,
  readonly tags: string[] ,
  readonly AvgScore: number,
  readonly totalBookmark: number,
  readonly Privacy: string,
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

export interface UserJobSkill extends Document{ 
  id: string;
  UserId: string;
  Job_JobName: string;
  Job_Score: number;
  Job_SkillName: string;
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

// ------------------------------------ Resume ------------------------------

export const ResumeSchema = new mongoose.Schema({
  UserId: String,
  Owner: String,
  First: String,
  Last: String,
  Location: String,
  ProfilePic: String,
  Aboutme: String,
  Email: String,
  Privacy: String,
  Color: String,
  interestedJob: Array,
  additionalSkills: Array,
  certificates: Array,
  educationHistorys: Array,
  workHistorys: Array,
  portfolios: Array,
  create_time: String,
  last_modified: Array,
  modified_by: Array,
}, { collection: 'Resume' })



export interface Resume extends Document {
  UserId: string ;
  Privacy: string ;
  First: string ;
  Last: string ;
}