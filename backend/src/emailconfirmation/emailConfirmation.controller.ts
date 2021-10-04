import { Controller,ClassSerializerInterceptor,UseInterceptors,Post,Body,UseGuards,Req,} from '@nestjs/common';
import ConfirmEmailDto from './confirmEmail.dto';
import { EmailConfirmationService } from './emailConfirmation.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import RequestWithUser from '../auth/requestWithUser.interface';
import { CreateRegisDto } from '../register/dto/create-register.dto';
   
@Controller('email-confirmation')
  @UseInterceptors(ClassSerializerInterceptor)
  export class EmailConfirmationController {
    constructor(
      private readonly emailConfirmationService: EmailConfirmationService
    ) {}
   
    @Post('confirm')
    async confirm(@Body() confirmationData: ConfirmEmailDto) {
      const email = await this.emailConfirmationService.decodeConfirmationToken(confirmationData.token);
      await this.emailConfirmationService.confirmEmail(email);
    }
    
    @Post('resend-confirmation-link')
    @UseGuards(JwtAuthGuard)
    async resendConfirmationLink(@Req() request: RequestWithUser) {
      await this.emailConfirmationService.resendConfirmationLink(request.user.id);
    }

    @Post('send-mail-no')
    async sendmailno(@Body() Email: CreateRegisDto) {
      await this.emailConfirmationService.sendmailno(Email.Email);
    }

  }