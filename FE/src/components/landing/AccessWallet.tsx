import React from "react";
import { Card } from "antd";
import { PiKeyReturnFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const AccessWalletCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      style={{ width: 600, marginTop: 16 }}
      onClick={() => {
        navigate("/access");
      }}
    >
      <Meta
        avatar={<PiKeyReturnFill size={60} />}
        title="Access my Wallet"
        description="Create new Wallet by Keystore File or Mnemonic Phrase."
      />
    </Card>
  );
};

export default AccessWalletCard;
