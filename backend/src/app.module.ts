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

import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user1234:user1234@cluster0.39z7o.mongodb.net/nisitfolio'
      ),
      TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://user1234:user1234@cluster0.39z7o.mongodb.net/nisitfolio',
      autoLoadEntities: true,
      synchronize: true,
    }),

    RegisterModule,
    AnalyticsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
