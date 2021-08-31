import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

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
  link: { type: String, required: [true, 'Link must not be empty.'] },
  totalBookmarks: { type: Number }
})

export interface TotalBookmark extends Document {
  type: String;
  userId: ObjectId;
  projectName?: String;
  link: String;
  totalBookmarks?: Number;
}

/*
* ************************************************************************************************
*/