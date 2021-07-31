import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import Register  from "src/entities/register.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRegisterDto } from "./dto/create-register.dto";

@Injectable()
export class RegisterService {
  
  constructor(
      @InjectRepository(Register)
      private registRepository: Repository<Register>
  ){}

  async create(createRegisterDto: CreateRegisterDto){
    return this.registRepository.save(createRegisterDto);
}
}