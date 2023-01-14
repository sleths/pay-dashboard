import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import DashboardLayout from "./components/DashboardLayout";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryBg: "var(--color-primary)",
          colorBgContainer: "var(--gray-1)",
          colorBgLayout: "#fff"
        },
      }}
    >
      <DashboardLayout />
    </ConfigProvider>
  );
}

export default App;
