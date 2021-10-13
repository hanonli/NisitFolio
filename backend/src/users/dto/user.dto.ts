import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectId, Timestamp } from 'mongodb';

export class UserDto {

    @IsNotEmpty() 
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    Password: string[];

    @IsNotEmpty()
    id: ObjectId;

    @IsNotEmpty()
    isEmailConfirmed: boolean;
 
}