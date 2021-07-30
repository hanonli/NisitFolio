import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AnalyticsModule } from './analytics/analytics.module';

import { RegisterModule } from './register/register.module';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import Register  from "src/entities/register.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'nisitfolio',
      entities: [Register],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Register]),
    AnalyticsModule,
    RegisterModule],
  controllers: [AppController,RegisterController],
  providers: [AppService,RegisterService],
})
export class AppModule {}
