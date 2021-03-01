import { HttpException } from "@nestjs/common";

export class BizException extends HttpException {
  constructor(code: number, statusCode: number, msg?: string) {
    super({ code, msg }, statusCode);
  }
}