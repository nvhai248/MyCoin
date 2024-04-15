import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from 'src/schemas/wallet.schema';
import { CreateWalletAndSaveKeystoreFile } from 'src/utils/wallet';

@Injectable()
export class WalletService {
  constructor(@InjectModel(Wallet.name) private walletModel: Model<Wallet>) {}

  getNoti(): string {
    try {
      return 'wallet';
    } catch (error) {
      throw error;
    }
  }

  async createNewWallet(password: string): Promise<Wallet> {
    try {
      const { address, keystoreFilePath, privateKey } =
        await CreateWalletAndSaveKeystoreFile(password);

      const result = await this.walletModel.create({
        address: address,
        password: password,
        keystoreFilePath: keystoreFilePath,
        privateKey: privateKey,
        amountMC: 0,
        amountUSD: 10000,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
