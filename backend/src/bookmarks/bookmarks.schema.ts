import { Document } from "mongoose";

import * as mongoose from 'mongoose';
import { ObjectId } from "mongodb";

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