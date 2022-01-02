import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from './entities/register.entity';
import { JwtModule } from '@nestjs/jwt';
import { secretKey } from './_key_/auth';
@Module({
  imports: [TypeOrmModule.forFeature([Register]),
  JwtModule.register({
    secret: secretKey._keys_,
    signOptions: {expiresIn: '1day'}
  })
],
  controllers: [RegisterController],
  providers: [RegisterService, JwtModule]
})
export class RegisterModule {}
