import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import VerificationTokenPayload from './verificationTokenPayload.interface';
import EmailService from '../email/email.service';
import { UsersService } from '../users/users.service';
import { ObjectId } from 'mongodb';
import { MailerService } from '@nestjs-modules/mailer';
 
@Injectable()
export class EmailConfirmationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    private mailerService: MailerService,
  ) {}
 
  public sendVerificationLink(email: string) {
    const payload: VerificationTokenPayload = { email };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
      expiresIn: `${this.configService.get('JWT_VERIFICATION_TOKEN_EXPIRATION_TIME')}s`
    });
 
    const url = `${this.configService.get('EMAIL_CONFIRMATION_URL')}/${token}`;
    
    const text = `ขอขอบคุณที่สมัครใช้บริการ Nisitfolio เพื่อที่จะใช้งาน appication กรุณากดยืนยันตัวตนในลิ้งค์ที่แนบให้ ภายใน 1 ชั่วโมง \n ${url}`;
 
    return this.mailerService.sendMail({
      to: email,
      subject: 'Nisitfolio,Please Email confirmation ',
      template: 'src/email/templates/comfirmation.hbs', 
      context: { 
        url,
      },
      
    })
  }

  public async confirmEmail(email: string) {
    const user = await this.usersService.getByEmail(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.usersService.markEmailAsConfirmed(email);
  }
 
  public async decodeConfirmationToken(token: string) {
    try {
      const payload = await this.jwtService.verify(token, {
        secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
      });
 
      if (typeof payload === 'object' && 'email' in payload) {
        return payload.email;
      }
      throw new BadRequestException();
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email confirmation token expired');
      }
      throw new BadRequestException('Bad confirmation token');
    }
  }

  public async resendConfirmationLink(userId: ObjectId) {
    const user = await this.usersService.getById(userId);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.sendVerificationLink(user.Email);
  }
}