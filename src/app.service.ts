import {  HttpCode, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiCode } from './enums/api-code.enums';
import { BizException } from './filters/biz-exception';

@Injectable()
export class AppService {
  getHello(): string {
    throw new BizException(ApiCode.BUSINESS_ERROR, HttpStatus.ACCEPTED, 'Hello World')
  }
}
