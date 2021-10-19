import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class GetResume {
  
  _id?: ObjectId;
  
  UserId: string;

  ProfilePic: string;

  First: string;

  Last: string;

  Owner: string;

  AboutMe: string;

  Email: string;

  Location: string;

  TAG: string[];

  Privacy: string;

  Color: string;

  educationHistorys: string[];

  workHistorys: string[];

  additionalSkills: string[];

  certificates: string[];

  portfolios: string[];

  interestedJob: string[];

  create_time:string;

  last_modified:string[];

  modified_by:string[];

  Province:string;

  Country:string;

  City:string;

  ProfilePic_URL:string;

}