import { Controller,ClassSerializerInterceptor,UseInterceptors,Post,Body,UseGuards,Req,Param} from '@nestjs/common';
import ConfirmEmailDto from './confirmEmail.dto';
import SendLinkDto from './sendlink.dto';
import { ForgotPasswordService } from './forgotpassword.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import RequestWithUser from '../auth/requestWithUser.interface';
import { Md5 } from 'ts-md5/dist/md5';

@Controller('forgot')
  @UseInterceptors(ClassSerializerInterceptor)
  export class ForgotPasswordController {
    constructor(
      private readonly forgotPasswordService: ForgotPasswordService
    ) {}
   
    @Post()
    async reset(@Body() confirmationData: ConfirmEmailDto) {
      const email = await this.forgotPasswordService.decodeForgotToken(confirmationData.token);
      const password = Md5.hashStr(confirmationData.password);
      await this.forgotPasswordService.ResetPassword(email,password);
    }
    
    @Post('send')
    async resendConfirmationLink(@Body() sendlinkdto: SendLinkDto ) {
      await this.forgotPasswordService.resendForgotMailLink(sendlinkdto);
    }

  }