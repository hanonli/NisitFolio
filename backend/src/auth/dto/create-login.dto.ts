import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class LoginDto {

    @IsNotEmpty()
    @IsEmail()
    readonly Email: string;

    @IsNotEmpty()
    readonly Password: string;

 
}

