import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Register } from './entities/register.entity';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private readonly UsersAccount: Repository<Register>,
  ){}

  async create(createRegisterDto: CreateRegisterDto) {
    this.UsersAccount.save(createRegisterDto);
    return [`Registration Success`];
  }
  async findUser(loginUser: CreateRegisterDto){
    return this.UsersAccount.findOne({username: loginUser.username})
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }


}
