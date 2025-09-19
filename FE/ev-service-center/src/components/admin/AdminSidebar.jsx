import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PeopleIcon from '@mui/icons-material/People';

const drawerWidth = 240;

const menuItems = [
  { text: 'Tổng quan', icon: <DashboardIcon />, path: '/admin' },
  { text: 'Quản lý Lịch hẹn', icon: <EventNoteIcon />, path: '/admin/appointments' },
  { text: 'Quản lý Khách hàng', icon: <PeopleIcon />, path: '/admin/customers' },
];

function AdminSidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton component={NavLink} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default AdminSidebar;