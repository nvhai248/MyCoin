import { Button, Divider, Form, InputNumber } from "antd";

const BuyPage: React.FC = () => {
  const amountSpend = 10;

  return (
    <>
      <div>
        <h1>Buy MC</h1>
        <Divider />
        <Form name="buyMCForm" layout="vertical">
          <Form.Item
            label="Buy MC"
            name="buyMC"
            rules={[
              { required: true, message: "Please enter mc want to buy" },
              {
                type: "number",
                min: 1,
                message: "MC must be at least 1",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} name="buyMC" />
          </Form.Item>
          <p>Amount spent: {amountSpend} $</p>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Buy
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div>
        <h1 style={{ marginTop: "20px" }}>Recharge Wallet</h1>
        <Divider />
        <Form name="recharge" layout="vertical">
          <Form.Item label="From">
            <InputNumber
              disabled
              style={{ width: "100%", marginBottom: "20px" }}
              placeholder="any where"
            />
          </Form.Item>

          <Form.Item
            label="Recharge Wallet (USD)"
            name="recharge"
            rules={[
              { required: true, message: "Please enter USD want to recharge" },
              {
                type: "number",
                min: 1,
                message: "USD must be greater than 1",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} name="recharge" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", marginTop: "20px" }}
            >
              Recharge
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default BuyPage;
