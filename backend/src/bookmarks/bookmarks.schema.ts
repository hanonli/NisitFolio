import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { UserJobSkillSchema } from 'src/analytics/analytics.schema';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

// -------------------------- Bookmark Schema ----------------------------

export const BookmarkSchema = new mongoose.Schema({
  userId: { type: String, require: [true, 'Link must not empty']},
  link: { type: String, require: [true, 'Link must not empty'] },
  type: { type: String, require: [true, 'Type must not empty'] },
  thatUserId: { type: String, require: [true, 'His/Her UserID must not empty'] },
  projectName: { type: String },
}, { timestamps: true })

export interface Bookmark extends Document {
  id: string;
  userId: string;
  link: string;
  type: string;
  thatUserId: string;
  projectName: string;
}

/*
* TotalBookmark is a table that stores a number of times being bookmarked.
*/

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

/*
* ************************************************************************************************
*/
@Schema({ collection: "UserInfo"})
export class UserInfo {

  @Prop()
  UserId: String;

  @Prop()
  Firstname: String;
  
  @Prop()
  Lastname: String;

  @Prop()
  Birthday: String;

  @Prop()
  AboutMe: String;

  @Prop()
  Email2nd: String;

  @Prop()
  Gender: String;

  @Prop()
  Country: String;

  @Prop()
  Province: String;

  @Prop()
  City: String;

  @Prop()
  create_time: String;

  @Prop()
  last_modified: String[];

  @Prop()
  totalBookmark: Number ;
}

export const UserInfoSchema = SchemaFactory.createForClass(UserInfo);
UserInfoSchema.index({Firstname: 'text', Lastname: 'text'})

@Schema({ collection: "Account"})
export class Account {

  @Prop()
  Email: string;
  
  @Prop()
  Password: string[];

  @Prop()
  ProfilePic: string;

  @Prop()
  Privacy: string;

  @Prop()
  isEmailConfirmed: boolean;

  @Prop()
  create_time:string;

  @Prop()
  last_modified:string[];

  @Prop()
  last_login:string[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);