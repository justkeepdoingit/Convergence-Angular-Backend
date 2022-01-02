import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, Req } from '@nestjs/common';
import { secretKey } from '../register/_key_/auth';
import { AppService } from '../app.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwtAuth') {
  constructor(private readonly cookies: AppService) {
    super({
      //custom extractor
      jwtFromRequest: cookies.extractCookie,
      ignoreExpiration: false,
      secretOrKey: secretKey._keys_,
    });
  }



  async validate(payload: any) {
    return {
        id: payload.id,
        name: payload.name,
    };
  }
}


