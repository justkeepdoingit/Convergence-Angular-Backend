import { Module } from '@nestjs/common';
import { HomePageComponentService } from './home-page-component.service';
import { HomePageComponentController } from './home-page-component.controller';

@Module({
  controllers: [HomePageComponentController],
  providers: [HomePageComponentService]
})
export class HomePageComponentModule {}
