import React from "react";
import { Card } from "antd";
import { FaFileCode } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const CreateKeystoreCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      className="card-layout"
      onClick={() => {
        navigate("/access");
      }}
    >
      <Meta
        avatar={<FaFileCode size={60} color="#fba801" />}
        title="Keystore File"
        description={
          " Using a keystore file online makes your wallet more vulnerable to loss of funds. We don’t recommend this method of wallet creation. "
        }
      />
    </Card>
  );
};

export default CreateKeystoreCard;
