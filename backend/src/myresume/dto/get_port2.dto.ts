import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreatePortDto {
  
    Userid: string;
    SoftSkill: string[];
    AdditionalSkill_id: string[];
    AdditionalSkill_ResumeId : string[];
    CertName: string[];
    CertPic: string[];
    CertYear: string[];
    Certificate_id: string[];
    Certificate_ResumeId : string[];
    Degree: string[];
    Facalty: string[];
    Field_of_study: string[];
    Academy: string[];
    Grade: string[];
    Education_End_Year: string[];
    EducationHistory_id: string[];
    EducationHistory_ResumeId : string[];
    Work_JobName: string[];
    Work_JobType: string[];
    Company: string[];
    Work_Start_Month: string[];
    Work_End_Month: string[];
    Work_Start_Year: string[];
    Work_End_Year: string[];
    Salary: string[];
    Infomation: string[];
    SalaryType: string[];
    WorkHistory_id: string[];
    WorkHistory_ResumeId: string[];
    Job_Objective: string[][];
    Job_Score: Number[][];
    Job_JobName: string[];
    Job_SkillName: string[][];
    InterestedJob_id: string[];
    InterestedJob_ResumeId : string[];
    Color_ResumeId : string;
    Resume_id:string[];
 
}