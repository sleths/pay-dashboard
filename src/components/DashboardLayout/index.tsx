import Layout, { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Menu from "antd/es/menu";
import React from "react";
import DashboardRoutes from "../DashboardRoutes";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import DashboardSider from "./DashboardSider";
const DashboardLayout = () => {
  return (
    <Layout>
      <DashboardSider />
      <Layout>
        {/*  <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content style={{ margin: "24px 16px 0" }}>
          <DashboardRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
