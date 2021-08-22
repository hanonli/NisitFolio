import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateDto {

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    Password: string;

    ProfilePic: string;

    Privacy: string;

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
