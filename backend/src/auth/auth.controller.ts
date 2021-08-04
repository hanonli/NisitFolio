import {Body,Controller,Post,ClassSerializerInterceptor,UseInterceptors,} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAccountDto } from 'src/register/dto/create-account.dto';
import { UsersService } from '../users/users.service';
import { EmailConfirmationService } from 'src/emailComfirm/emailComfirm.service'; 

@Controller('authentication')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthService,
    private readonly usersService: UsersService,
    private readonly emailConfirmationService: EmailConfirmationService
  ) {}
 
  @Post('register')
  async register(@Body() registrationData: CreateAccountDto) {
    const user = await this.authenticationService.register(registrationData);
    await this.emailConfirmationService.sendVerificationLink(registrationData.Email);
    return user;
  }
  
  // ...
}