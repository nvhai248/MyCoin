import { Injectable } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Wallet } from 'src/models/wallet.model';

@Injectable()
export class WalletService {
  getNoti(): string {
    try {
      return 'wallet';
    } catch (error) {
      throw error;
    }
  }

  createNewWallet(password: string): Wallet {
    try {
      return new Wallet({ password: password });
    } catch (error) {
      throw error;
    }
  }
}
