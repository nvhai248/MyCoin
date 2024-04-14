import Wallet from 'ethereumjs-wallet';
import { keccak256 } from 'ethereumjs-util';

interface WalletData {
  address: string;
  privateKey: string;
}

export function CreateWallet(password: string): WalletData {
  if (!password || typeof password !== 'string' || password.length === 0) {
    throw new Error('Invalid password');
  }

  const passwordBuffer = Buffer.from(password);
  const entropyBuffer = keccak256(passwordBuffer as any);

  const wallet = Wallet['default'].generate(entropyBuffer);
  const walletData: WalletData = {
    address: wallet.getAddressString(),
    privateKey: wallet.getPrivateKeyString(),
  };

  return walletData;
}
