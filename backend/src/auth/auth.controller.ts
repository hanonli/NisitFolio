import {Body,Controller,Post,ClassSerializerInterceptor,UseInterceptors,} from '@nestjs/common';
<<<<<<< HEAD
import { AuthService } from './auth.service';
import { CreateAccountDto } from 'src/register/dto/create-account.dto';
=======
import { AuthService } from './auth.service'
import { CreateRegisDto } from '../register/dto/create-register.dto';
>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b
import { UsersService } from '../users/users.service';
import { EmailConfirmationService } from 'src/emailComfirm/emailComfirm.service'; 

@Controller('authentication')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthService,
    private readonly usersService: UsersService,
    private readonly emailConfirmationService: EmailConfirmationService
<<<<<<< HEAD
  ) {}
 
  @Post('register')
  async register(@Body() registrationData: CreateAccountDto) {
    const user = await this.authenticationService.register(registrationData);
=======
) {}
   
@Post('register')
async register(@Body() registrationData: CreateRegisDto) {
    //const user = await this.authenticationService.register(registrationData);
    const user = await this.registerService.createRegis(registrationData)
>>>>>>> cc62a96d4c1d2ba5aa7be0f0560291ce4085979b
    await this.emailConfirmationService.sendVerificationLink(registrationData.Email);
    return user;
  }
  
  // ...
}