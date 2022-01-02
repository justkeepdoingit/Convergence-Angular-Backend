import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { CreateRegisterDto } from './register/dto/create-register.dto';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService, private readonly jwt: JwtStrategy) {}

  @UseGuards(AuthGuard('jwtAuth'))
  @Get()
  getHello(@Body() sample: any) {
    return this.appService.getHello();
  }
}
