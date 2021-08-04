import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Account from '../register/account.entity';
import { CreateAccountDto } from 'src/register/dto/create-account.dto';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: Account[];

  constructor(
    @InjectRepository(Account)
    private usersRepository: Repository<Account>
  ) { } 

  async findOne(username: string): Promise<Account | undefined> {
    return this.users.find(user => user.Username === username); 
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne(email);
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }
 
  async create(userData: CreateAccountDto) {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

}
