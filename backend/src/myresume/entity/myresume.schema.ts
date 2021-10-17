import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Account, Userinfo, AdditionalSkill, Certificate, EducationHistory, InterestedJob, WorkHistory,Portfolio,PortfolioPicture,Resume,UserJobSkill} from '../../register/entity/Register.entity'

export type ResumeDocument = Resume2 & Document;

@Schema({ collection: 'Resume' })
export class Resume2 {
  @Prop()
  UserId: string;

  @Prop()
  Owner: string;

  @Prop()
  First: string;

  @Prop()
  Last: string;

  @Prop()
  Location: string;

  @Prop()
  ProfilePic: string;

  @Prop()
  ProfilePic_URL: string;

  @Prop()
  AboutMe: string;

  @Prop()
  Email: string;

  @Prop()
  Privacy: string;

  @Prop()
  Color: string;

  @Prop()
  interestedJob: InterestedJob[];

  @Prop()
  additionalSkills: AdditionalSkill[];

  @Prop()
  certificates: Certificate[];
  
  @Prop()
  educationHistorys: EducationHistory[];

  @Prop()
  workHistorys: WorkHistory[];
  
  @Prop()
  portfolios: Portfolio[];

  @Prop()
  create_time:string;

  @Prop()
  last_modified:string[];

  @Prop()
  modified_by:string[];
}

export const ResumeSchema = SchemaFactory.createForClass(Resume2);

