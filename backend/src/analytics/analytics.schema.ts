import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

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

// ------------------------------------------------------------

export type UserSkillDocument = UserSkill & Document;

@Schema()
export class UserSkill {
  @Prop()
  userId: number;

  @Prop()
  inJobId: number;

  @Prop()
  MainSkillId: number;

  @Prop()
  Score: number ;
}

export const UserSkillSchema =
  SchemaFactory.createForClass(UserSkill);

