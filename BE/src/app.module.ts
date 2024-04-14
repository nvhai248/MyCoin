import { Module } from '@nestjs/common';
import { WalletModule } from './modules/wallets/wallet.module';
import { TransactionalModule } from './modules/transactions/transaction.module';
import { MongodbModule } from './modules/mongodb/mongodb.module';

@Module({
  imports: [WalletModule, TransactionalModule, MongodbModule],
})
export class AppModule {}
