import { Injectable,UnauthorizedException,HttpException,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserReq  from './user.entity';
import { ObjectId } from 'mongodb';
import { UserDto } from './dto/user.dto';


@Injectable()
  export class UsersService {
  constructor(
    @InjectRepository(UserReq )
    private readonly usersRepository: Repository<UserReq>,
  ) {}

    //private readonly user = this.usersRepository.find();
  async markEmailAsConfirmed(Email: string) {
    return this.usersRepository.update({ Email }, {
      isEmailConfirmed: true
    });
  }

  async addloginTime(Email: string) {
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    return this.usersRepository.update({ Email }, {
      last_login: isoTime
    });
  }

  async getByEmail(Email: string) {
    return await this.usersRepository.findOne({ Email: Email });
  }

  async findOne(Email: string) {
    const toUserDto = (data: UserReq): UserDto => {  
    const { id, Email, Password } = data;
    let userDto: UserDto = { id, Email, Password  };
    return userDto;};

    const user = await this.usersRepository.findOne({ Email: Email })
    if(!user)
    {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Input Worng Email',
      }, HttpStatus.UNAUTHORIZED);
    }
    return toUserDto(user)
  }

  async getById(Id: ObjectId) {
    return await this.usersRepository.findOne({ id: Id });
  }

  async resetPassword(email: string,password: string) {
    const time =  new Date();
    const isoTime = time.toLocaleDateString('th-TH',{ year:'numeric',month: 'long',day:'numeric',hour:"2-digit",minute:"2-digit"});
    const acc = await this.usersRepository.findOne({ Email: email });
    acc.Password.push(password);
    acc.last_modified.push(isoTime);
    return await this.usersRepository.save(acc);

  }

  
};

  
  
