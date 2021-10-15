import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateRegisDto {
  

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  Password: string;

  ProfilePic: string;

  ProfilePicBase64: string;
  
  Privacy: string;

  isEmailConfirmed: boolean;

  @IsNotEmpty()
  Firstname: string;
  
  @IsNotEmpty()
  Lastname: string;
  
  @IsNotEmpty()
  Birthday: string;

  AboutMe: string;

  Email2nd: string;

  @IsNotEmpty()
  Gender: string;

  Country: string;

  Province: string;

  City: string;

  
  @IsNotEmpty()
  SoftSkill: string[];

  SoftSkillType: string[];

  @IsNotEmpty()
  CertName: string[];

  CertPic: string[];

  CertYear: number[];

  @IsNotEmpty()
  Degree: string[];

  Facalty: string[];

  Field_of_study: string[];

  Academy: string[];

  Grade: number[]; 

  Education_End_Year: number[];   

  @IsNotEmpty()
  Work_JobName: string[];

  Work_JobType: string[];

  Company: string[];

  Work_Start_Month: number[];

  Work_End_Month: number[];

  Work_Start_Year: number[];

  Work_End_Year: number[];

  Salary: number[];

  SalaryType: string[];

  Infomation: string[];

  Job_Objective: string[][];

  Job_Score: number[][];

  @IsNotEmpty()
  Job_JobName: string[];

  Job_SkillName: string[][];

  /*@OneToMany(type => CreateDto3, ED => ED)
  ED: CreateDto3[];*/
 
}