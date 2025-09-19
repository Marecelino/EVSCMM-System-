import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import AdminLayout from '../layouts/AdminLayout';
import ServiceCenterListPage from '../pages/public/ServiceCenterListPage';
import LoginPage from '../pages/auth/LoginPage';
import CustomerDashboardPage from '../pages/customer/CustomerDashboardPage';
import ServicesPage from '../pages/public/ServicesPage';
import { Container, Typography } from '@mui/material'; 

function AppRoutes() {
  return (
    <Routes>
      {/* Trang Login không dùng layout chung */}
      

      {/* ===== Luồng Public ===== */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/centers" element={<ServiceCenterListPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* ===== Luồng Customer (sau khi đăng nhập) ===== */}
      {/* [Suy luận] Tạm thời dùng PublicLayout, sau này có thể đổi thành CustomerLayout */}
      <Route path="/customer" element={<PublicLayout />}>
        <Route path="dashboard" element={<CustomerDashboardPage />} />
        {/* Thêm các trang khác của customer ở đây, vd: /customer/vehicles */}
      </Route>

      {/* ===== Luồng Admin/Internal ===== */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route index element={<AdminDashboard />} /> */}
      </Route>
      
    </Routes>
  );
}

function HomePage() {
    return (
        <Container sx={{py: 4}}>
            <Typography variant="h3">Chào mừng đến với EV Service Center</Typography>
        </Container>
    )
}

export default AppRoutes;