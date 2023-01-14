import React from "react";
import { Route, Routes } from "react-router-dom";

const DashboardRoutes = () => {
  return (
    <Routes>
      {["dashboard", "/"].map((path, index) => (
        <Route path={path} element={<p>hi</p>} key={index} />
      ))}
    </Routes>
  );
};

export default DashboardRoutes;
