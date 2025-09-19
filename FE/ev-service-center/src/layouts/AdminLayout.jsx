import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AdminSidebar from '../components/admin/AdminSidebar';

function AdminLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height: '100vh', overflow: 'auto' }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;