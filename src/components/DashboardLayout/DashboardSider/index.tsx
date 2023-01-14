import Sider from "antd/es/layout/Sider";
import Menu from "antd/es/menu";
import { Link } from "react-router-dom";
import { ReactComponent as HomeOtlined } from "../../../assets/icons/homeOutlined.svg";
import { ReactComponent as InvoiceOutlined } from "../../../assets/icons/invoiceOutlined.svg";
import { ReactComponent as WalletOutlined } from "../../../assets/icons/walletOutlined.svg";
import { ReactComponent as ActivityOutlined } from "../../../assets/icons/activityOutlined.svg";
import SubMenu from "antd/es/menu/SubMenu";
import DashboardMenuItem from "../DashboardMenuItem";

const DashboardSider = () => {
  const menuItems = [
    {
      link: "/",
      key: "dashboard",
      icon: <HomeOtlined />,
    },
    {
      link: "/invoices",
      key: "invoices",
      icon: <InvoiceOutlined />,
    },
    {
      link: "/wallet",
      key: "wallet",
      icon: <WalletOutlined />,
    },
    {
      link: "/activity",
      key: "activity",
      icon: <ActivityOutlined />,
      sub: true,
      children: [
        {
          key: "transactions",
          link: "/admin/transactions",
        },
        {
          key: "coupons",
          link: "/admin/coupons",
        },
      ],
    },
  ];

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu
        /* theme="dark" */
        mode="inline"
        defaultSelectedKeys={["4"]}
      >
        {menuItems.map((i) =>
          i.sub ? (
            <SubMenu key={i.key} icon={i.icon} title={i.key}>
              {i.children.map((x) => (
                <DashboardMenuItem item={x} sub={true} />
              ))}
            </SubMenu>
          ) : (
            <DashboardMenuItem item={i} sub={false} />
          )
        )}
      </Menu>
    </Sider>
  );
};

export default DashboardSider;
