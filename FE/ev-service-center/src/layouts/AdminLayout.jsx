import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AdminSidebar from '../components/admin/AdminSidebar';

function AdminLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminSidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* Đây là nơi nội dung các trang quản trị sẽ render */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;