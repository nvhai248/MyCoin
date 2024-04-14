import * as mongoose from 'mongoose';

export const WalletSchema = new mongoose.Schema({
  address: String,
  privateKey: String,
  password: String,
  amountUSD: Number,
  amountMC: Number,
});
