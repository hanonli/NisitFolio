import { Module } from '@nestjs/common';
import { EmailConfirmationService } from './emailConfirmation.service';
import { EmailConfirmationController } from './emailConfirmation.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants'
import { EmailModule } from 'src/email/email.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
      UsersModule,
      EmailModule,
      ConfigModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60m' },
      })
    ],
  controllers: [EmailConfirmationController],
  providers: [EmailConfirmationService],
  exports: [EmailConfirmationService]
})
export class EmailConfirmationModule {}