import {Body,Controller,Post,ClassSerializerInterceptor,UseInterceptors,} from '@nestjs/common';
import { AuthService } from './auth.service'
import { CreateDto } from './dto/create.dto';
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
async register(@Body() registrationData: CreateDto) {
    //const user = await this.authenticationService.register(registrationData);
    const user = await this.registerService.create(registrationData)
    await this.emailConfirmationService.sendVerificationLink(registrationData.Email);
    return user;
}
    
// ...
}