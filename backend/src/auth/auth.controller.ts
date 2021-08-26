import {Body,Controller,Post,ClassSerializerInterceptor,UseInterceptors,} from '@nestjs/common';
import { AuthService } from './auth.service'
import { CreateRegisDto } from '../register/dto/create-register.dto';
import { UsersService } from '../users/users.service';
import { EmailConfirmationService } from '../emailConfirmation/emailConfirmation.service';
import { RegisterService } from '../register/register.service';
   
@Controller('authentication')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthenticationController {
constructor(
    private registerService: RegisterService,
    private readonly authenticationService: AuthService,
    private readonly usersService: UsersService,
    private readonly emailConfirmationService: EmailConfirmationService
) {}
   
@Post('register')
async register(@Body() registrationData: CreateRegisDto) {
    //const user = await this.authenticationService.register(registrationData);
    const user = await this.registerService.createRegis(registrationData)
    await this.emailConfirmationService.sendVerificationLink(registrationData.Email);
    return user;
}
    
// ...
}