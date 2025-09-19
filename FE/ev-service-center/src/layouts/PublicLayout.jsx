import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function PublicLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header sẽ tự động chiếm 100% chiều rộng */}
      <Header />
      
      {/* Nội dung chính của các trang sẽ được render ở đây */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      
      {/* Footer cũng sẽ tự động chiếm 100% chiều rộng */}
      <Footer />
    </Box>
  );
}

export default PublicLayout;