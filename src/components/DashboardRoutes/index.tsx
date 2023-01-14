import React from 'react'
import { Route, Routes } from 'react-router-dom'

const DashboardRoutes = () => {
  return (
    <Routes>
    {/* {["campaigns", "/"].map((path, index) => (
      <Route path={path} element={<CampaignsPage />} key={index} />
    ))} */}
    <Route path="/" element={<p>hi</p>} />
  </Routes>
  )
}

export default DashboardRoutes