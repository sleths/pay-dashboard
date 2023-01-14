import Layout, { Content, Header } from "antd/es/layout/layout";
import theme from "antd/es/theme";
import { useLocation } from "react-router-dom";
import DashboardRoutes from "../DashboardRoutes";
import DashboardSider from "./DashboardSider";

import styles from "./styles.module.scss";

const DashboardLayout = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const { pathname } = useLocation();

  const switchHeaderTitle = () => {
    if (pathname === "/") return "Dashboard";
    else return pathname.substring(1);
  };

  return (
    <Layout>
      <DashboardSider />
      <Layout>
        <Header
          className={styles.header}
          style={{
            background: colorBgLayout,
          }}
        >
          <h1>{switchHeaderTitle()}</h1>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <DashboardRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
