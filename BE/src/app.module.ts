import { Module } from '@nestjs/common';
import { WalletModule } from './modules/wallets/wallet.module';
import { TransactionalModule } from './modules/transactions/transaction.module';

@Module({
  imports: [WalletModule, TransactionalModule],
})
export class AppModule {}
