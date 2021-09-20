import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PortfolioDocument3 = Portfolio3 & Document;

@Schema({ collection: 'Portfolio' })
export class Portfolio3 {
  @Prop()
  UserId: string;

  @Prop()
  Email: string;
  
  @Prop()
  ProfilePic: string;
    
  @Prop()
  Firstname: string;
    
  @Prop()
  Lastname: string;
    
  @Prop()
  Country: string;
    
  @Prop()
  Province: string;
    
  @Prop()
  City: string;
    
  @Prop()
  AboutMe: string;
  
  @Prop()
  Port_Tag: string[];

  @Prop()
  Port_Privacy: string[];

  @Prop()
  portfolioPictures: string[][];
  
  @Prop()
  create_time:string[];

  @Prop()
  last_modified:string[][];

  @Prop()
  modified_by:string[][];

  @Prop()
  ResumeId:string[][];

  
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio3);