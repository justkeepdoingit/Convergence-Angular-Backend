import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Register } from './register/entities/register.entity';
import { RegisterModule } from './register/register.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { HomePageComponentModule } from './home-page-component/home-page-component.module';

@Module({
  imports: [RegisterModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: '',
      entities: [Register],
      synchronize: true
    }),
    HomePageComponentModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtModule, JwtStrategy],
})
export class AppModule {}
