import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class HomePageDto {


  ProfilePic: string;

  @IsNotEmpty()
  Firstname: string;
  
  @IsNotEmpty()
  Lastname: string;

  AboutMe: string;

  Job_JobName: string[];

  

  
 
}