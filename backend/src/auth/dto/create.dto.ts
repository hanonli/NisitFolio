import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateDto {

    @IsNotEmpty()
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

    @IsNotEmpty()
    Gender: string;

    accountD?: ObjectId;
}
