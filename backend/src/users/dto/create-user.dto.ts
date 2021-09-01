import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty() 
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    Password: string;

 
}
