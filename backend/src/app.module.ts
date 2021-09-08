import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsModule } from './analytics/analytics.module';
import { EmailConfirmationModule } from './emailconfirmation/emailConfirmation.module';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { BookmarkModule } from './bookmarks/bookmarks.module';
import { HomeModule } from './home/home.module';
import { PortModule } from './portfolio/portfolio.module';
import { MyResumeModule } from './myresume/myresume.module';
import { ForgotPasswordModule } from './forgotpassword/forgotpassword.module';

import * as Joi from 'joi';
import { ResumeModule } from './resume/resume.module';
import { EditProfileModule } from './editprofile/editprofile.module';


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
        URL_Mongodb: Joi.string().required(),
      })
    }),
    MongooseModule.forRoot(
      'mongodb+srv://backend:VQfKYfFePGMdMSdd@cluster0.39z7o.mongodb.net/nisitfolio'
      ),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://backend:VQfKYfFePGMdMSdd@cluster0.39z7o.mongodb.net/nisitfolio',
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
    BookmarkModule,
    HomeModule,
    PortModule,
    ResumeModule,
    ForgotPasswordModule,
    
    MyResumeModule,
    EditProfileModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
