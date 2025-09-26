import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Menu, MenuItem } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
//import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useAuth } from '../../hooks/useAuth';
import ElectricCarIcon from '@mui/icons-material/ElectricCar'; // Icon xe điện hiện đại hơn
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'; // Icon sạc pin

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };
  
  const handleDashboard = () => {
    handleClose();
    // Điều hướng dựa trên vai trò của người dùng
    if (user.role_id === 1) { // Customer
        navigate('/customer/dashboard');
    } else { // Staff, Admin, Technician
        navigate('/admin');
    }
  };

  return (
<AppBar 
  position="sticky"
  color="primary" // Đặt màu nền là màu chủ đạo
  elevation={1}
  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
>
      <Toolbar>
        
       <Box 
  component={NavLink} 
  to="/" 
  sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    textDecoration: 'none', 
    color: 'common.white',   // <-- Đổi sang trắng
    '&:hover': {
        color: 'grey.300'    // Hover chuyển sang xám nhạt cho dễ nhìn
    }
  }}
>
  {/* Icon xe điện cách điệu */}
  <ElectricCarIcon sx={{ mr: 0.5, fontSize: 32 }} /> 
  
  <Typography 
    variant="h5"
    component="span"
    sx={{ fontWeight: 'bold', letterSpacing: -0.5 }}
  >
    EV
  </Typography>
  <Typography 
    variant="h6" 
    component="span" 
    sx={{ ml: 0.5, fontWeight: 'medium' }}
  >
    Service
  </Typography>
</Box>


        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, ml: 4 }}>
          <Button component={NavLink} to="/services" color="white">Dịch vụ</Button>
          <Button component={NavLink} to="/centers" color="white">Trung tâm</Button>
        </Box>

        {/* Auth Buttons */}
        {user ? (
          <div>
            <Button
              onClick={handleMenu}
              color="white"
              startIcon={<Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>{user.full_name.charAt(0)}</Avatar>}
            >
              {user.full_name}
            </Button>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleDashboard}>Bảng điều khiển</MenuItem>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
          </div>
        ) : (
          <Box>
            <Button component={NavLink} to="/login" color="white">Đăng nhập</Button>
            <Button component={NavLink} to="/register" variant="contained" sx={{ ml: 1 }}>
              Đặt lịch ngay
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;