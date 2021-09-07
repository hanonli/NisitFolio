import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import  UserReq   from "src/users/user.entity"; 
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserReq )
    private accountRepository: Repository<UserReq >,

    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const password = Md5.hashStr(pass);
    if (user && user.Password === password) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }  

  async login(user: any) {
    const payload = { Email: user.Email , sub: user.id};
    console.log(user)
    return {
      Email: user.Email,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
