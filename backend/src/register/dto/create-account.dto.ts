import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateAccountDto {

    @IsNotEmpty()
    Email: string;

    @IsNotEmpty()
    Password: string;

    ProfilePic: string;

    Privacy: string;

    Username: string;

 
}

