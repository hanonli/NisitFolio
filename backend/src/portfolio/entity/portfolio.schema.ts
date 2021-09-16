import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PortfolioDocument = Portfolio2 & Document;

@Schema({ collection: 'Portfolio' })
export class Portfolio2 {
  @Prop()
  UserId: string;

  @Prop()
  Port_Tag: string;

  @Prop()
  Port_Privacy: string;

  @Prop()
  portfolioPictures: string[];
  
  @Prop()
  create_time:string;

  @Prop()
  last_modified:string[];

  @Prop()
  modified_by:string[];

  @Prop()
  ResumeId:string[];

  
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio2);

