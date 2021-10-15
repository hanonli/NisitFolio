import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class hearderDto {



    Email: string;
  
    ProfilePic: string;
      
    Firstname: string;
      
    Lastname: string;
      
    Country: string;
      
    Province: string;
      
    City: string;
      
    AboutMe: string;

    Job_JobName: string[];
}