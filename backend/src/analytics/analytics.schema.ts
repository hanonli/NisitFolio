import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdditionalSkillDocument = AdditionalSkill & Document;

@Schema()
export class AdditionalSkill {
  @Prop()
  userId: number;

  @Prop()
  id: number;

  @Prop()
  softSkill: string;
}

export const AdditionalSkillSchema =
  SchemaFactory.createForClass(AdditionalSkill);
