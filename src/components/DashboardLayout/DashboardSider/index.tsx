import { useState } from "react";
import { RiHome5Line } from "react-icons/ri";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import Sider from "antd/es/layout/Sider";
import Menu, { MenuProps } from "antd/es/menu";
import { Link, useNavigate } from "react-router-dom";

import styles from "../styles.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  link?: string,
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const DashboardSider = () => {
  const [selectedKey, setSelectedKey] = useState<string>("dashboard");

  let navigate = useNavigate();

  const items: MenuItem[] = [
    getItem("Dashboard", "dashboard", <RiHome5Line />),
    getItem("Invoices", "invoices", <HiOutlineReceiptTax />),
    getItem("Wallet", "wallet", <IoWalletOutline />),

    getItem("Activity", "activity", <FiActivity />, [
      getItem("Transactions", "transactions"),
      getItem("Recipients", "recipients"),
    ]),
  ];

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    setSelectedKey(key);
    navigate(`/${key}`);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0" width={250} theme="light">
      <Link to="/" className={`flex ${styles.logo}`}>
        <Logo />
      </Link>
      <Menu
        /* theme="dark" */
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        selectedKeys={[selectedKey]}
        onClick={handleClick}
        items={items}
      />
    </Sider>
  );
};

export default DashboardSider;
