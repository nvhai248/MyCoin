import React from "react";
import { Col, Row, Button } from "antd";

interface Step1Props {
  isNext: () => void;
}

const Step1AccessByKeystore: React.FC<Step1Props> = ({ isNext }) => {
  return (
    <>
      <h3>STEP 1:</h3>
      <h3
        style={{
          color: "black",
          fontSize: 25,
        }}
      >
        Select your Keystore File
      </h3>
      <Row>
        <Col span={12}>
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "justify",
              margin: "0 0 16px 0",
              lineHeight: "1.5",
              marginTop: "2rem",
              color: "black",
            }}
          >
            Please select keystore file that unlocks your wallet.
          </h4>
          <Button
            style={{ width: "80%", height: "3rem", marginLeft: "10%" }}
            onClick={() => isNext()}
          >
            Select file
          </Button>
        </Col>
        <Col span={12}>
          <img
            src="/keystorefile.png"
            alt="Done"
            style={{
              width: "17rem",
              marginTop: "1rem",
              marginLeft: "10px",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Step1AccessByKeystore;
