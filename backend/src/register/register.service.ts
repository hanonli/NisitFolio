import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Account from './account.entity';
import Userinfo from './userinfo.entity';
import {PostAccount,PostUserinfo} from './register.entity';

import { CreateAccountDto } from './dto/create-account.dto';
import { CreateUserinfoDto } from './dto/create-userinfo.dto';
import { CreateDto } from './dto/create.dto';

import { ObjectID } from 'mongodb';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Userinfo)
    private userinfoRepository: Repository<Userinfo>,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  async create(createDto: CreateDto) {

    const account = new PostAccount();
    account.Email = createDto.Email;
    account.Password = createDto.Password;
    account.ProfilePic = createDto.ProfilePic;
    account.Privacy = createDto.Privacy;

    const userinfo = new PostUserinfo();
    userinfo.Firstname = createDto.Firstname;
    userinfo.Lastname = createDto.Lastname;
    userinfo.Birthday = createDto.Birthday;
    userinfo.Gender = createDto.Gender;

    return (this.accountRepository.save(account),this.userinfoRepository.save(userinfo));
  }

  async findAllReviews(courseId: ObjectID): Promise<Userinfo[]> {
    return this.userinfoRepository.find({where:{ courseId: courseId }});
  }

  async createReview(createReviewDto:  CreateUserinfoDto) {
    return this.userinfoRepository.save(createReviewDto);
  }
}