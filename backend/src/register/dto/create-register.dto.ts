import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateRegisDto {

  @IsNotEmpty()
  @IsEmail()
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

  Email2nd: string;

  @IsNotEmpty()
  Gender: string;

  Country: string;

  Province: string;

  City: string;

  @IsNotEmpty()
  SoftSkill: string[];

  @IsNotEmpty()
  CertName: string[];

  CertPic: string[];

  CertYear: number[];

  @IsNotEmpty()
  Degree: string[];

  Facalty: string[];

  Field_of_study: string[];

  Academy: string[];

  Grade: Float32Array[]; 

  Education_End_Year: number[];   

  @IsNotEmpty()
  Work_JobName: string[];

  Work_JobType: string[];

  Company: string[];

  Work_Start_Month: number[];

  Work_End_Month: number[];

  Work_Start_Year: number[];
  
  Work_End_Year: number[];

  Salary: Float32Array[];

  SalaryType: string[];

  Infomation: string[];

  Job_Objective: string[][];

  Job_Score: Float32Array[][];

  @IsNotEmpty()
  Job_JobName: string[];

  Job_SkillName: string[][];

  /*@OneToMany(type => CreateDto3, ED => ED)
  ED: CreateDto3[];*/
 
}