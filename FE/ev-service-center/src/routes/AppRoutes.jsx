import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import AdminLayout from '../layouts/AdminLayout';
import HomePage from '../pages/public/HomePage'; 
import VehiclePage from '../pages/customer/VehiclePage';
import LoginPage from '../pages/auth/LoginPage';
import CustomerDashboardPage from '../pages/customer/CustomerDashboardPage';
import ServicesPage from '../pages/public/ServicesPage';
import { Container, Typography } from '@mui/material'; 
import AboutUsPage from '../pages/public/AboutUsPage';
function AppRoutes() {
  return (
    <Routes>
     
      

      {/* ===== Luồng Public ===== */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />}/>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* ===== Luồng Customer (sau khi đăng nhập) ===== */}
      {/* [Suy luận] Tạm thời dùng PublicLayout, sau này có thể đổi thành CustomerLayout */}
      <Route path="/customer" element={<PublicLayout />}>
        <Route path="dashboard" element={<CustomerDashboardPage />} />
        <Route path="vehicles" element={<VehiclePage />} />
        {/*<Route path="appointment-list" element={<AppointmentList />} /> */}
        {/* Thêm các trang khác của customer ở đây, vd: /customer/vehicles */}
      </Route>

      {/* ===== Luồng Admin/Internal ===== */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route index element={<AdminDashboard />} /> */}
      </Route>
      
    </Routes>
  );
}



export default AppRoutes;