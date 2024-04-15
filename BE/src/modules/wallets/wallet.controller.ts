import { Body, Controller, Get, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatus } from 'src/global/globalEnum';
import { CreateWallet } from 'src/dto/wallet.dto';
import { ErrorResponse } from 'src/utils/errorHandle';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  getNoti(): ResponseData<string> {
    try {
      return new ResponseData(
        this.walletService.getNoti(),
        HttpStatus.SUCCESS,
        'OK',
        null,
      );
    } catch (error) {
      return ErrorResponse(error);
    }
  }

  @Post()
  async createWallet(
    @Body() createWallet: CreateWallet,
  ): Promise<ResponseData<any>> {
    try {
      const result = await this.walletService.createNewWallet(
        createWallet.password,
      );
      return new ResponseData(result, HttpStatus.SUCCESS, 'OK', null);
    } catch (error) {
      return ErrorResponse(error);
    }
  }
}
