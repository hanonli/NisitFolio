import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { type } from 'os';
import { OneToMany } from 'typeorm';
import EducationHistory from '../entity/EducationHistory.entity';
import { CreateDto3 } from './create.dto';
//STAR
export class CreateDtoTRUE {

  @IsNotEmpty()
  Email: string;

  @IsNotEmpty()
  Password: string;

  ProfilePic: string;

  Privacy: string;

  isEmailConfirmed: boolean;

  @IsNotEmpty()
  Firstname: string;
  
  @IsNotEmpty()
  Lastname: string;
  
  @IsNotEmpty()
  Birthday: string;

  @IsNotEmpty()
  Gender: string;

  accountD?: ObjectId;

  //id?: ObjectId;
  
  UserId: string;

  NameCountry: string;

  NameProvince: string;

  NameCity: string;

  AboutMe: string;

  EmailBusiness: string;


  //id?: ObjectId;
  
  //UserId: string;

  @OneToMany(type => CreateDto3, ED => ED)
  ED: CreateDto3[];
/*
  @IsNotEmpty()
  Degree: string;
  
  @IsNotEmpty()
  Facalty: string;
  
  Find_of_study: string;
  
  @IsNotEmpty()
  Academy: string;
  
  Grade: string;
  
  @IsNotEmpty()
  Start_Year: Number;

  End_Year: Number;
//*/
  //UserId: string;

  @IsNotEmpty()
  JobName_WH: string;

  @IsNotEmpty()
  JobType: string;

  Company: string;

  @IsNotEmpty()
  Start_Month: Number;

  End_Month: Number;

  @IsNotEmpty()
  Start_Year_WH: Number;

  End_Year_WH: Number;

  Salary: Float32Array;

  Information: string;

  NameSalary: string;

  //UserId: string;

  @IsNotEmpty()
  Tag: string;

  PrivacyFOl: string;

  @IsNotEmpty()
  Pic: string;

  @IsNotEmpty()
  Year: number;

  //id?: ObjectId;
  
  //UserId: string;

  Objective: string;

  Score: Number;

  JobName: string;

  SkillName: string;

  //id?: ObjectId;

  //UserId: string;
  
  SoftSkill: string;
}