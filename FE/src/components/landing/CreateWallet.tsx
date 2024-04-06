import React from "react";
import { Card } from "antd";
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CreateWalletCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      style={{ width: 600, marginTop: 16 }}
      onClick={() => {
        navigate("/create");
      }}
    >
      <Meta
        avatar={<FaWallet size={60} />}
        title="Create new Wallet"
        description="Create new Wallet by Keystore File or Mnemonic Phrase."
      />
    </Card>
  );
};

export default CreateWalletCard;
