import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req} from '@nestjs/common';
import { Response } from 'express';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import * as bcrypt from 'bcrypt';
import { loginUserDTO } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService, private readonly jwtService: JwtService) {}

  @Post('/registerAccount')
  async create(@Body() createRegisterDto: CreateRegisterDto, @Res({passthrough: true}) response: Response) {
    const salt: number = 10
    const hashedPassword = await bcrypt.hash(createRegisterDto.password, salt);
    const userRegister: CreateRegisterDto = {
      name: createRegisterDto.name,
      username: createRegisterDto.username,
      password: hashedPassword,
    }
    return this.registerService.create(userRegister);
  }

  @Post('loginAccount')
  async findUser(@Body() loginUser: CreateRegisterDto, @Res({passthrough: true}) response: Response){
    const user: CreateRegisterDto = await this.registerService.findUser(loginUser)
    if(!user){
      return ['Username or password incorrect']
    }
    if(!await bcrypt.compare(loginUser.password, user.password)){
      return ['Username or password incorrect'];
    }
    const userToken = {
      id: user.id,
      name: user.name,
    }
    const jwToken = this.jwtService.sign(userToken);
    response.cookie('_Secure_', jwToken, {httpOnly:true})
    response.cookie('_Security_', bcrypt.hash(userToken.name, 10));
    return ['Login Success!'];
  }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
    return this.registerService.update(+id, updateRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerService.remove(+id);
  }
}
