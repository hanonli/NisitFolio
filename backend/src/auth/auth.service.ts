import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateAccountDto } from 'src/register/dto/create-account.dto';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.Password === pass) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }  

  public async register(registrationData: CreateAccountDto) {
    const hashedPassword = await bcrypt.hash(registrationData.Password, 10);
    try {
      const createdUser = await this.usersService.create({
        ...registrationData,
        Password: hashedPassword
      });
      createdUser.Password = undefined;
      return createdUser;
    } catch (error) {
      if (error?.code === 400) {
        throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      username: user.username,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
