import React from "react";
import CreateWalletCard from "../../components/landing/CreateWallet";
import AccessWalletCard from "../../components/landing/AccessWallet";

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <h1>My Wallet</h1>
      <div>
        <CreateWalletCard />
        <AccessWalletCard />
      </div>
    </div>
  );
};

export default LandingPage;
