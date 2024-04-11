import { Card } from "antd";
import React, { useState } from "react";
import { Button, Steps, theme } from "antd";
import Step1CreatePassword from "../../components/steps/create-keystore/step1";
import Step2DownloadFile from "../../components/steps/create-keystore/step2";
import { useNavigate } from "react-router-dom";
import Step3WellDone from "../../components/steps/create-keystore/step3";

const CreateByKeystorePage: React.FC = () => {
  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState<boolean>();

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const checkDisable = (value: boolean) => {
    setIsEnable(value);
  };

  const steps = [
    {
      title: "Step 1",
      subTitle: "Create password",
      content: <Step1CreatePassword isEnable={checkDisable} />,
    },
    {
      title: "Step 2",
      content: <Step2DownloadFile />,
    },
    {
      title: "Step 3",
      content: <Step3WellDone />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "1",
    height: current === 1 ? "30rem" : "24rem",
    width: "590px",
    textAlign: "left",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    width: current != 2 ? "6rem" : "8rem",
    height: "3rem",
  };

  return (
    <>
      <Card
        style={{ width: "40rem", height: current === 1 ? "50rem" : "43rem" }}
      >
        <div style={{ height: "100%" }}>
          <h2>Create Wallet with Keystore File</h2>
          <Steps current={current} items={items} style={{ marginTop: 34 }} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div style={{ marginTop: 34 }}>
            {current < steps.length - 1 && (
              <Button
                style={buttonStyle}
                disabled={!isEnable}
                type="primary"
                onClick={() => next()}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                style={buttonStyle}
                type="primary"
                onClick={() => navigate("/access")}
              >
                Access Wallet
              </Button>
            )}
            {current === 1 && (
              <Button
                style={{ width: "6rem", height: "3rem", marginLeft: "20px" }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default CreateByKeystorePage;
