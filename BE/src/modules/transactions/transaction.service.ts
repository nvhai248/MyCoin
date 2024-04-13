import { Injectable } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Injectable()
export class TransactionService {
  GetNoti(): string {
    try {
      return 'Transaction';
    } catch (error) {
      throw error;
    }
  }
}
