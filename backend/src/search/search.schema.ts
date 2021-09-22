import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose' ;
import { ObjectId } from "mongodb";

// @Schema({ collection: 'UserInfo'}) 
// export class UserInfo {
//   @Prop()
//   UserId: ObjectId ;
//   @Prop()
//   Firstname: string ;
//   @Prop()
//   Lastname: string ;
//   @Prop()
//   Birthday: string ;
//   @Prop()
//   Gender: string ;
//   @Prop()
//   AboutMe: string ;
//   @Prop()
//   Email2nd: string ;
//   @Prop()
//   Country: string ;
//   @Prop()
//   Province: string ;
//   @Prop()
//   City: string ;
// }

// export const UserInfoSchema = SchemaFactory.createForClass(UserInfo) ;

export const UserInfoSchema = new mongoose.Schema({
  UserId: ObjectId ,
  Firstname: String ,
  Lastname: String ,
  Birthday: String ,
  Gender: String ,
  AboutMe: String ,
  Email2nd: String ,
  Country: String ,
  Province: String ,
  City: String ,
}, { collection: 'UserInfo'});
UserInfoSchema.index({'Firstname': 'text', 'Lastname': 'text'});

// export const UserInfo = mongoose.model("UserInfo", UserInfoSchema) ;
export interface UserInfo extends Document {
  readonly UserId: ObjectId ,
  readonly Firstname: string ,
  readonly Lastname: string ,
  readonly Birthday: string ,
  readonly Gender: string ,
  readonly AboutMe: string ,
  readonly Email2nd: string ,
  readonly Country: string ,
  readonly Province: string ,
  readonly City: string ,
}

// ------------------------------------- Total Bookmark ---------------------------------------

export const TotalBookmarkSchema = new mongoose.Schema({
  type: { type: String, required: [true, 'type must not be empty.']},
  userId: { type: ObjectId, required: [true, 'userId must not be empty.'] },
  projectName: { type: String },
  totalBookmarks: { type: Number }
})

// export const TotalBookmark = mongoose.model("totalbookmarks", TotalBookmarkSchema) ;
export interface TotalBookmark extends Document {
  type: String;
  userId: ObjectId;
  projectName?: String;
  totalBookmarks?: Number;
}