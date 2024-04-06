import React from "react";
import { Card } from "antd";
import CreateWalletCard from "../../components/landing/CreateWallet";
import AccessWalletCard from "../../components/landing/AccessWallet";

const LandingPage: React.FC = () => {
  return (
    <>
      <h1>My Wallet</h1>
      <Card>
        <CreateWalletCard />
        <AccessWalletCard />
      </Card>
    </>
  );
};

export default LandingPage;
