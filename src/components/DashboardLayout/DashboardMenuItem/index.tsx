import { Link } from "react-router-dom";
import Menu from "antd/es/menu";

export interface DashboardMenuItemProps {
  item: any;
  sub: boolean;
}

const DashboardMenuItem = ({ item, sub }: DashboardMenuItemProps) => {
  return (
    <Menu.Item key={item.link}>
      <Link to={item.link}>
        {!sub && item.icon}
        <span>{item.key}</span>
      </Link>
    </Menu.Item>
  );
};

export default DashboardMenuItem;
