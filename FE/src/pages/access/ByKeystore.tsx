import { Card } from "antd";
import React, { useState } from "react";
import { Steps, theme, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Step1AccessByKeystore from "../../components/steps/access-keystore/step1";
import Step2EnterPassword from "../../components/steps/access-keystore/step2";

const CreateByKeystorePage: React.FC = () => {
  const navigate = useNavigate();

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Step 1",
      subTitle: "Select file",
      content: <Step1AccessByKeystore isNext={next} />,
    },
    {
      title: "Step 2",
      subTitle: "Enter Password",
      content: <Step2EnterPassword />,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "1",
    height: "24rem",
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

  return (
    <>
      <Card style={{ width: "40rem", height: "43rem" }}>
        <div style={{ height: "100%" }}>
          <h2>Create Wallet with Keystore File</h2>
          <Steps current={current} items={items} style={{ marginTop: 34 }} />
          <div style={contentStyle}>{steps[current].content}</div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          {current === steps.length - 1 && (
            <Button
              type="primary"
              style={{ width: "6rem", height: "3rem" }}
              onClick={() => navigate("/dashboard")}
            >
              Next
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
      </Card>
    </>
  );
};

export default CreateByKeystorePage;
