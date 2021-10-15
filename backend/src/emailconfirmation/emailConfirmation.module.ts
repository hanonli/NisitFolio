import { Module } from '@nestjs/common';
import { EmailConfirmationService } from './emailConfirmation.service';
import { EmailConfirmationController } from './emailConfirmation.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants'
import { EmailModule } from 'src/email/email.module';
import { UsersModule } from 'src/users/users.module';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import EmailService from 'src/email/email.service';
import { join } from 'path';

@Module({
  imports: [
        MailerModule.forRoot({
          // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
          // or
          transport: {
            host: 'smtp.gmail.com',
            secure: false,
            auth: {
              user: 'nisitfoliocorp@gmail.com',
              pass: '.>:z2*nAD@mnQyL[',
            },
          },
          defaults: {
            from: '"Nisitfolio (No Reply)" <noreply@example.com>',
          },
          template: {
            dir: join("../email", 'templates'),
            adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
            options: {
              strict: true,
            },
          },
        }),
      UsersModule,
      EmailModule,
      ConfigModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60m' },
      })
    ],
  controllers: [EmailConfirmationController],
  providers: [EmailConfirmationService,EmailService],
  exports: [EmailConfirmationService,EmailService]
})
export class EmailConfirmationModule {}