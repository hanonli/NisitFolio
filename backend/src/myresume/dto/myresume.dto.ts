import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateResumeDto {


  UserId: string;
  Color:string;
  //--------------------------AddictionalSkill----------------------------//
  SoftSkillID: string[];

  //--------------------------Certificate----------------------------//
  CertID: string[];

  //-------------------------EducationHistory--------------------------//
  EducationID: string[];

  //--------------------WorkHistory--------------------------//
  WorkID: string[];

  //--------------------Portfolio-----------------------------//
  PortID: string[];

  //--------------------InterestedJob--------------------------//
  JobID: string;

  /*Privacy:string;

  InterestedJob: {
    Job_Objective:string;
    Job__Score: string;
    Job__JobName: string;
    Job__SkillName: string;
  }*/
}