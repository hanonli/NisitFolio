import { Body, Controller, Post } from "@nestjs/common";
import { CreateRegisterDto } from "./dto/create-register.dto";
import { RegisterService } from "./register.service";

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService){}

  @Post()
  async create(@Body() createRegisterDto: CreateRegisterDto)
  {
    const newRegister = this.registerService.create(createRegisterDto);
    return newRegister;
  }
}