import { Layout, Menu } from "antd";
import AvatarDashboard from "../dasboard/avatar";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <MdDashboard />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <FaMoneyBillTransfer />,
    label: "Transfer",
  },
  {
    key: "3",
    icon: <FaHistory />,
    label: "History",
  },
  {
    key: "4",
    icon: <GiBuyCard />,
    label: "Buy",
  },
];

const SiderDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      width={"18rem"}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img style={{ width: "4rem" }} src="/horsecoin.png"></img>
        <h1 style={{ color: "white", marginLeft: "10px", marginTop: "1.3rem" }}>
          MY COIN
        </h1>
      </div>

      <AvatarDashboard />

      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} style={{ height: "3rem" }}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>

      <Menu theme="dark" mode="inline" style={{ marginTop: "23rem" }}>
        <Menu.Item disabled style={{ height: "3rem" }} icon={<IoMdSettings />}>
          Setting
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            navigate("/");
          }}
          style={{ height: "3rem" }}
          icon={<TbLogout2 />}
        >
          Sign out
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderDashboard;
