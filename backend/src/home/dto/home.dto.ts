import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateHomeDto {

    UserId: ObjectId;
  
    Firstname: string;
  
    Lastname: string;
  
    Job_JobName: string[];
  
    AboutMe: string;

  /*@OneToMany(type => CreateDto3, ED => ED)
  ED: CreateDto3[];*/
 
}