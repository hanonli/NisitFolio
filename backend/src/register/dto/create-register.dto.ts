import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { type } from 'os';
import { OneToMany } from 'typeorm';
import EducationHistory from '../entity/EducationHistory.entity';
import { CreateDto3 } from './create.dto';

export class CreateRegisDto {

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

  AboutMe: string;

  EmailBusiness: string;

  @IsNotEmpty()
  Gender: string;

  Country: string;

  Province: string;

  City: string;

  SoftSkill: string[];

  CertName: string[];

  CertPic: string[];

  CertYear: number[];

  Degree: string[];

  Facalty: string[];

  Find_of_study: string[];

  Academy: string[];

  Grade: Float32Array[];

  Education_Start_Year: number[];  

  Education_End_Year: number[];   

  Work_JobName: string[];

  Work_JobType: string[];

  Company: string[];

  Work_Start_Month: number[];

  Work_End_Month: number[];

  Work_Start_Year: number[];
  
  Work_End_Year: number[];

  Salary: Float32Array[];

  Infomation: string[];

  Job_Objective: string[];

  Job_Score: Float32Array[];

  Job_JobName: string[];

  Job_SkillName: string[];

  /*@OneToMany(type => CreateDto3, ED => ED)
  ED: CreateDto3[];*/
 
}