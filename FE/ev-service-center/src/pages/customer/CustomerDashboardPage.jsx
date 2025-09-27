import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import VehicleListPreview from '../../components/customer/VehicleListPreview';
import AppointmentList from '../../components/customer/AppointmentList';
import StatCard from '../../components/shared/StatCard'; // Component mới
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CustomerDashboardPage() {
  const { user } = useAuth();

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100%' }}>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bảng điều khiển
        </Typography>
        <Typography variant="h6" gutterBottom color="text.secondary">
          Chào mừng trở lại, {user?.full_name}!
        </Typography>
        
        {/* Stat Cards */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            {/* [TODO] Cần lấy data thật cho các card này */}
            <StatCard title="Tổng số xe" value="2" icon={<DirectionsCarIcon color="primary" sx={{ fontSize: 40 }} />} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StatCard title="Lịch hẹn sắp tới" value="1" icon={<EventNoteIcon color="success" sx={{ fontSize: 40 }} />} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button 
              component={NavLink}
              to="/services" // Điều hướng đến trang đặt lịch
              fullWidth 
              variant="contained" 
              size="large"
              startIcon={<AddCircleOutlineIcon />}
              sx={{ height: '100%' }}
            >
              Đặt lịch dịch vụ mới
            </Button>
          </Grid>
        </Grid>

        {/* Vehicle and Appointment Lists */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} lg={7}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5">Xe của tôi</Typography>
                <Button component={NavLink} to="/customer/vehicles">Quản lý tất cả xe</Button>
              </Box>
              <VehicleListPreview userId={user?.id} />
            </Paper>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Lịch sử & Lịch hẹn</Typography>
              <AppointmentList userId={user?.id} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CustomerDashboardPage;