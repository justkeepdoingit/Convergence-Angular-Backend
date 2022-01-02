import { Injectable } from '@nestjs/common';

@Injectable()
export class HomePageComponentService {
  // create(createHomePageComponentDto: CreateHomePageComponentDto) {
  //   return 'This action adds a new homePageComponent';
  // }

  findAll() {
    return `This action returns all homePageComponent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homePageComponent`;
  }

  // update(id: number, updateHomePageComponentDto: UpdateHomePageComponentDto) {
  //   return `This action updates a #${id} homePageComponent`;
  // }

  remove(id: number) {
    return `This action removes a #${id} homePageComponent`;
  }
}
