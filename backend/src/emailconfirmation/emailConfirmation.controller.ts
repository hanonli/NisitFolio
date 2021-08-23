import { Controller,ClassSerializerInterceptor,UseInterceptors,Post,Body,UseGuards,Req,} from '@nestjs/common';
import ConfirmEmailDto from './confirmEmail.dto';
import { EmailConfirmationService } from './emailConfirmation.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import RequestWithUser from '../auth/requestWithUser.interface';
   
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

  }