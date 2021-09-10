import { IsString, IsNotEmpty } from 'class-validator';
 
export class ConfirmEmailDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  password: string;
}
 
export default ConfirmEmailDto;