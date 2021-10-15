import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class PatchRegisDto {

  Password: string;

  ProfilePic: string;

  ProfilePicBase64: string;

  Privacy: string;

  Firstname: string;
  
  Lastname: string;

  Birthday: string;

  AboutMe: string;

  Email2nd: string;

  Gender: string;

  Country: string;

  Province: string;

  City: string;

  SoftSkill: string;

  SoftSkillType: string;

  CertName: string;

  CertPic: string;

  CertYear: number;

  Degree: string;

  Facalty: string;

  Field_of_study: string;

  Academy: string;

  Grade: number; 

  Education_End_Year: number;   

  Work_JobName: string;

  Work_JobType: string;

  Company: string;

  Work_Start_Month: number;

  Work_End_Month: number;

  Work_Start_Year: number;
  
  Work_End_Year: number;

  Salary: number;

  SalaryType: string;

  Infomation: string;

  Job_JobName: string;

  Job_Objective: string[];

  Job_Score: number[];

  Job_SkillName: string[];

 
}