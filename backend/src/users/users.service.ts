import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserReq  from './user.entity';
import { ObjectId } from 'mongodb';
import { UserDto } from './dto/user.dto';

//export type User = any;


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
  async getByEmail(Email: string) {
    return await this.usersRepository.findOne({ Email: Email });
  }

  async findOne(Email: string) {
    const toUserDto = (data: UserReq): UserDto => {  
    const { id, Email, Password } = data;
    let userDto: UserDto = { id, Email, Password  };
    return userDto;};

    const user = await this.usersRepository.findOne({ Email: Email })
    return toUserDto(user)
  }

  async getById(Id: ObjectId) {
    return await this.usersRepository.findOne({ id: Id });
  }

  
};

  
  

/*export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: '1',
        username: 'john',
        password: 'testme',
        email: 'sirapopjpt@gmail.com',
        isEmailConfirmed: false,
      },
      {
        id: '2',
        username: 'mary',
        password: 'ishappy',
      },
      {
        id: '10',
        username: 'bob',
        password: 'hungry',
      }
    ]
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}*/
