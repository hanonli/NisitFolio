import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ObjectId, Timestamp } from 'mongodb';

//-------------------------UserInfo--------------------//
export type UserInfoDocument = UserInfoMongoose & Document;

@Schema({ collection: 'UserInfo' })
export class UserInfoMongoose {
  @Prop()
  UserId: ObjectId;

  @Prop()
  Firstname: string;

  @Prop()
  Lastname: string;

  @Prop()
  Birthday: string;

  @Prop()
  AboutMe: string;

  @Prop()
  Email2nd: string;

  @Prop()
  Gender: string;

  @Prop()
  Country: string;

  @Prop()
  Province: string;

  @Prop()
  City: string;
  
}

export const UserInfoSchema = SchemaFactory.createForClass(UserInfoMongoose);
