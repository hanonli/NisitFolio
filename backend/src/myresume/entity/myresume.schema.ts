import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ResumeDocument = Resume2 & Document;
export type InterestedJobDocument = InterestedJob & Document;

@Schema()
export class InterestedJob {
  @Prop()
  Job_Objective: string;

  @Prop()
  Job__Score: string;
  
  @Prop()
  Job__JobName: string;

  @Prop()
  Job__SkillName: string;
  
}

export const InterestedJobSchema = SchemaFactory.createForClass(InterestedJob);

@Schema({ collection: 'Resume' })
export class Resume2 {
  @Prop()
  UserId: string;

  @Prop()
  Privacy: string;

  @Prop()
  interestedJob: string[];

  @Prop()
  additionalSkills: string[];

  @Prop()
  certificates: string[];
  
  @Prop()
  educationHistorys: string[];

  @Prop()
  workHistorys: string[];
  
  @Prop()
  portfolios: string[];

}

export const ResumeSchema = SchemaFactory.createForClass(Resume2);

