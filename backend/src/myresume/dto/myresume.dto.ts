import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateResumeDto {


  UserId: string;
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
 
}