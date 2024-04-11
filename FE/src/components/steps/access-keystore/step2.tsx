import React from "react";
import { Form, Input } from "antd";

const Step2EnterPassword: React.FC = () => {
  const inputStyle: React.CSSProperties = {
    height: 70,
    fontSize: 20,
  };
  return (
    <>
      <h3>STEP 2:</h3>
      <h3
        style={{
          color: "black",
          fontSize: 25,
        }}
      >
        Enter Password
      </h3>

      <h4
        style={{
          fontWeight: "normal",
          margin: "0 0 16px 0",
          lineHeight: "1.5",
          marginTop: "2rem",
          color: "black",
        }}
      >
        Enter your password to unlock your wallet.
      </h4>

      <Form name="basic" layout="vertical" style={{ marginTop: "5rem" }}>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be at least 8 characters!" },
          ]}
        >
          <Input.Password
            placeholder="Enter password..."
            style={inputStyle}
            onChange={() => {}}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default Step2EnterPassword;
