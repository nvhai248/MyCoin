import React from "react";
import { Card } from "antd";
import { FaFileCode } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const AccessKeystoreCard: React.FC = () => {
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
        description={" Using a keystore file to access your wallet. "}
      />
    </Card>
  );
};

export default AccessKeystoreCard;
