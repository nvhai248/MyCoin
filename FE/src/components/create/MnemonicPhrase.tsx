import React from "react";
import { Card } from "antd";
import { AiOutlineFileDone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const CreateMnemonicPhraseCard: React.FC = () => {
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
        description={
          " Using a Mnemonic Phrase online makes your wallet more vulnerable to loss of funds. We don’t recommend this method of wallet creation. "
        }
      />
    </Card>
  );
};

export default CreateMnemonicPhraseCard;
