import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { AnalyticsModule } from './analytics/analytics.module';

import { RegisterModule } from './register/register.module';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import Register  from "src/entities/register.entity";

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
    TypeOrmModule.forFeature([Register]),
    AnalyticsModule,
    RegisterModule],
  controllers: [AppController,RegisterController],
  providers: [AppService,RegisterService],
})
export class AppModule {}
