import { Body, Controller, Get, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatus } from 'src/global/globalEnum';
import { CreateWallet } from 'src/dto/wallet.dto';
import { Wallet } from 'src/models/wallet.model';
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
  createWallet(@Body() createWallet: CreateWallet): ResponseData<Wallet> {
    try {
      return new ResponseData(
        this.walletService.createNewWallet(createWallet.password),
        HttpStatus.SUCCESS,
        'OK',
        null,
      );
    } catch (error) {
      return ErrorResponse(error);
    }
  }
}
