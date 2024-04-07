import React from "react";
import { Card } from "antd";
import { GoPasskeyFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const AccessPrivateKeyCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      className="card-layout"
      onClick={() => {
        navigate("/access");
      }}
    >
      <Meta
        avatar={<GoPasskeyFill size={60} color="#fba801" />}
        title="Private Key"
        description={" Using a private ket to access your wallet. "}
      />
    </Card>
  );
};

export default AccessPrivateKeyCard;
