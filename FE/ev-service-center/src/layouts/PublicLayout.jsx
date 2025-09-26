import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Box } from '@mui/material';

function PublicLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Header cố định trên cùng */}
      <Header />
      
      {/* Nội dung chính */}
      <Box 
        component="main"
        sx={{ flexGrow: 1 }}   // chiếm hết khoảng trống còn lại, đẩy footer xuống
      >
        <Outlet />
      </Box>
      
      {/* Footer sẽ nằm cuối, chỉ thấy khi cuộn tới */}
      <Footer />
    </Box>
  );
}

export default PublicLayout;
