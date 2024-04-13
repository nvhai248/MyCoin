import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatus } from 'src/global/globalEnum';
import { ErrorResponse } from 'src/utils/errorHandle';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getNoti(): ResponseData<string> {
    try {
      return new ResponseData(
        this.transactionService.GetNoti(),
        HttpStatus.SUCCESS,
        'OK',
        null,
      );
    } catch (error) {
      return ErrorResponse(error);
    }
  }
}
