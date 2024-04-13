export class Wallet {
  id?: number;
  privateKey?: string;
  address?: string;
  password?: string;
  AmountUSD?: number;
  AmountMC?: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({
    id = null,
    privateKey = null,
    address = null,
    password = null,
    AmountUSD = 0,
    AmountMC = 0,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    this.id = id;
    this.privateKey = privateKey;
    this.address = address;
    this.password = password;
    this.AmountUSD = AmountUSD;
    this.AmountMC = AmountMC;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
