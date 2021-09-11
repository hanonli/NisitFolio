import {IsNotEmpty, IsEmail } from 'class-validator';
 
export class SendLinkDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
 
export default SendLinkDto;