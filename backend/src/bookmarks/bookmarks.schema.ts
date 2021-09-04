import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { UserJobSkillSchema } from 'src/analytics/analytics.schema';

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
  userId: ObjectId;
  link: string;
  type: string;
  thatUserId: ObjectId;
  projectName: string;
}

/*
* TotalBookmark is a table that stores a number of times being bookmarked.
*/

export const TotalBookmarkSchema = new mongoose.Schema({
  type: { type: String, required: [true, 'type must not be empty.']},
  userId: { type: ObjectId, required: [true, 'userId must not be empty.'] },
  projectName: { type: String },
  totalBookmarks: { type: Number }
})

export interface TotalBookmark extends Document {
  type: String;
  userId: ObjectId;
  projectName?: String;
  totalBookmarks?: Number;
}

/*
* ************************************************************************************************
*/

export const UserInfoSchema = new mongoose.Schema({
  UserId: ObjectId,
  Firstname: String,
  Lastname: String,
  Birthday: String,
  Gender: String,
  AboutMe: String,
  Email2nd: String,
  Country: String,
  Province: String,
  City: String,
}, { collection: 'UserInfo'});

//export const UserInfoModel = mongoose.model('UserInfo', UserInfoSchema, 'UserInfo');

export interface UserInfo extends Document {
  UserId: ObjectId,
  Firstname: String,
  Lastname: String,
  Birthday: String,
  Gender: String,
  AboutMe: String,
  Email2nd: String,
  Country: String,
  Province: String,
  City: String,
}