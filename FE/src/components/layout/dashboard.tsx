import React from "react";
import { FaCoins } from "react-icons/fa6";
import { Button, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import SiderDashboard from "../dasboard/sider";

const { Header, Content, Footer } = Layout;

const LayoutDashboard: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <SiderDashboard />
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          children={
            <Button
              style={{ float: "right", marginTop: "15px", marginRight: "1rem" }}
            >
              {" "}
              <FaCoins style={{ marginRight: "10px" }} /> Buy MC
            </Button>
          }
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "50.1rem",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          My Coin ©{new Date().getFullYear()} Created by @NVHAI248
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutDashboard;
