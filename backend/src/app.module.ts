import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { TypeOrmModule } from '@nestjs/typeorm';

import Account from './register/account.entity';
import Userinfo from './register/userinfo.entity';

import { AnalyticsModule } from './analytics/analytics.module';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';

import { EmailConfirmationModule } from './emailconfirmation/emailConfirmation.module';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';

//--------------------------------------------------------------------------------------------------------------//
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
//--------------------------------------------------------------------------------------------------------------//
@Module({
  imports: [
    
    ConfigModule.forRoot({
      envFilePath: '.setting.env',
      validationSchema: Joi.object({
        JWT_VERIFICATION_TOKEN_SECRET: Joi.string().required(),
        JWT_VERIFICATION_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        EMAIL_CONFIRMATION_URL: Joi.string().required(),
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
      })
    }),
    MongooseModule.forRoot(
      'mongodb+srv://user1234:user1234@cluster0.39z7o.mongodb.net/nisitfolio'
      ),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://user1234:user1234@cluster0.39z7o.mongodb.net/nisitfolio',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      })
    }),
    EmailConfirmationModule,
    RegisterModule,
    AnalyticsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
