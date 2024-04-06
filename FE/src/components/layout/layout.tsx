import { Layout as LayoutAntDesign } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = LayoutAntDesign;

export default function Layout() {
  return (
    <LayoutAntDesign>
      <LayoutAntDesign>
        <Content>
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
