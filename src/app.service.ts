import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
@Injectable()
export class AppService {
  getHello() {
    return ['Hello World!'];
  }  
  //custom jwt extractor
  extractCookie(@Req() request: Request){
    var token = null;
    if (request && request.cookies) {
        token = request.cookies['_Secure_'];
    }
    return token;
  }
}
