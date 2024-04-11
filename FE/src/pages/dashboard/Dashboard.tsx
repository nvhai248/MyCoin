import { Row, Col, Button } from "antd";
import { Card } from "antd";
import { IoGitNetworkSharp } from "react-icons/io5";
import { LiaAddressCardSolid } from "react-icons/lia";
import { MdAccountBalance } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { BiTransferAlt } from "react-icons/bi";
import DetailWalletModal from "./detailWalletModal";
import { useState } from "react";

const { Meta } = Card;

const Dashboard = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleShowDetailModal = () => {
    setShowDetailModal(true);
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <Card className="card-dashboard">
            <Meta
              avatar={<LiaAddressCardSolid size={60} color="#1d2776" />}
              title="Address"
              description={" Address here. "}
            />
            <Button
              onClick={handleShowDetailModal}
              icon={<CgDetailsMore />}
            ></Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-dashboard">
            <Meta
              avatar={<MdAccountBalance size={60} color="#1d2776" />}
              title="Balance"
              description={" 0 MC "}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-dashboard">
            <Meta
              avatar={<IoGitNetworkSharp size={60} color="#1d2776" />}
              title="Network"
              description={" Last block: ?? "}
            />
            <Button icon={<BiTransferAlt />}></Button>
          </Card>
        </Col>
      </Row>

      <DetailWalletModal
        visible={showDetailModal}
        onClose={handleCloseDetailModal}
      />
    </>
  );
};

export default Dashboard;
