import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  // isMobile sẽ là true nếu màn hình nhỏ hơn 900px (ngưỡng 'md' của MUI)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
      <Button component={NavLink} to="/centers" color="inherit" sx={{ my: isMobile ? 1 : 0 }}>Trung tâm</Button>
      <Button component={NavLink} to="/services" color="inherit" sx={{ my: isMobile ? 1 : 0, ml: isMobile ? 0 : 1 }}>Dịch vụ</Button>
    </Box>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }} role="presentation">
      <Typography variant="h6" sx={{ my: 2 }}>EV Service</Typography>
      <List>
        <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/centers" sx={{ textAlign: 'center' }}>
                <ListItemText primary="Trung tâm" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/services" sx={{ textAlign: 'center' }}>
                <ListItemText primary="Dịch vụ" />
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="background" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography 
            variant="h6" 
            component={NavLink} 
            to="/" 
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}
          >
            <DirectionsCarIcon sx={{ mr: 1 }} />
            EV Service
          </Typography>

          {isMobile ? (
            // === Giao diện Mobile ===
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // === Giao diện Desktop ===
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navLinks}
              <Box sx={{ ml: 2 }}>
                <Button component={NavLink} to="/login" color="primary">Đăng nhập</Button>
                <Button component={NavLink} to="/register" variant="contained" sx={{ ml: 1 }}>Đặt lịch ngay</Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer (menu mobile) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;