import { Document, Mongoose } from 'mongoose';

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

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