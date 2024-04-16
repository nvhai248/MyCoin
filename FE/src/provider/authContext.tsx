// authContext.tsx
import React, { createContext, useContext, ReactNode } from "react";

interface Wallet {
  address: string;
  privateKey: string;
  amountUSD: number;
  amountMC: number;
  createdAt: string;
}

interface AuthContextProps {
  wallet: Wallet | null;
  setWallet: (wallet: Wallet | null) => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wallet, setWallet] = React.useState<Wallet | null>(null);

  const isAuthenticated = (): boolean => {
    return !!wallet;
  };

  return (
    <AuthContext.Provider value={{ wallet, setWallet, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
