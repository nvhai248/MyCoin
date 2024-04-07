import React from "react";
import { Card } from "antd";
import { AiOutlineFileDone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const AccessMnemonicPhraseCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      className="card-layout"
      onClick={() => {
        navigate("/access");
      }}
    >
      <Meta
        avatar={<AiOutlineFileDone size={60} color="#fba801" />}
        title="Mnemonic Phrase"
        description={" Using a Mnemonic Phrase to access your wallet. "}
      />
    </Card>
  );
};

export default AccessMnemonicPhraseCard;
