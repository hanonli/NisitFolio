import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
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
  
    if (user && user.Password[user.Password.length - 1] === password) {
      const { Password, ...result } = user;
      return result;
    }
    else if (user && user.Password.indexOf(password) == -1 ){
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Wrongpwd',
      }, HttpStatus.UNAUTHORIZED);
    }
    else if (user && user.Password.indexOf(password) != user.Password.length - 1 ){
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Oldpwd',
      }, HttpStatus.UNAUTHORIZED);
    }
    return null;
  }  

  async login(user: any) {
    await this.usersService.addloginTime(user.Email)
    const payload = { Email: user.Email , sub: user.id};
    console.log(user)
    return {
      Email: user.Email,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
