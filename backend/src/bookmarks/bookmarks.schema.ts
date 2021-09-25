import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { TotalBookmarkSchema } from 'src/search/search.schema';

@Schema({ collection: "Bookmark", timestamps: true })
export class Bookmark {

  @Prop()
  userId: String;
  
  @Prop()
  link: String;

  @Prop()
  thatUserId: String;

  @Prop()
  type: String;

  @Prop()
  projectName?: String;

  @Prop({type: Object})
  details: any;

  @Prop()
  totalBookmark: Number;

  @Prop()
  updatedAt: Date;

  @Prop()
  createdAt: Date;

}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);


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
  Gender: String;

  @Prop()
  AboutMe: String;

  @Prop()
  Email2nd: String;

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
  ProfilePic: String ;

  @Prop()
  tags: String[] ;

  @Prop()
  AvgScore: Number ;

  @Prop()
  totalBookmark: Number;

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

@Schema({collection: "Portfolio"})
export class Portfolio {
  
  @Prop()
  ResumeId: string[];

  @Prop()
  UserId: string;

  @Prop()
  Port_Name: string;

  @Prop()
  Port_Info: string;

  @Prop()
  Port_Tag: string;

  @Prop()
  Port_Privacy: string;

  @Prop()
  portfolioPictures: any[];

  @Prop()
  create_time: string;

  @Prop()
  last_modified: string[];

  @Prop()
  modified_by: string[];

  @Prop()
  resumeId: any[];

  @Prop()
  totalBookmark: Number;

  @Prop()
  owner: string;

}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);