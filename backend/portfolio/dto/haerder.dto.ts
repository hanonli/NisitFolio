import { Int32 } from 'bson';
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

    Port_Date: string;

    Privacy: string;

}