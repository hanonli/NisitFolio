import { ObjectId } from 'mongodb';
import { IsNotEmpty } from "class-validator";

export class CreateUserinfoDto {
  @IsNotEmpty()
  Firstname: string;
  
  @IsNotEmpty()
  Lastname: string;
  
  @IsNotEmpty()
  Birthday: string;

  @IsNotEmpty()
  Gender: string;

  accountD?: ObjectId;
}

