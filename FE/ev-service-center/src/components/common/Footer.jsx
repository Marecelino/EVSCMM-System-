import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'background.paper', 
        p: 6, 
        borderTop: '1px solid #ddd',
        // Các thuộc tính để footer luôn nằm dưới cùng
        marginTop: 'auto'
      }} 
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              EV Service Center
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hệ thống quản lý bảo dưỡng xe điện chuyên nghiệp và hiện đại.
            </Typography>
            <Box sx={{ mt: 2 }}>
                <IconButton aria-label="facebook" color="primary" href="https://facebook.com">
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="twitter" color="primary" href="https://twitter.com">
                    <TwitterIcon />
                </IconButton>
                <IconButton aria-label="instagram" color="primary" href="https://instagram.com">
                    <InstagramIcon />
                </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Liên kết
            </Typography>
            <Link component={NavLink} to="/" display="block" variant="body2" color="text.secondary">Trang chủ</Link>
            <Link component={NavLink} to="/services" display="block" variant="body2" color="text.secondary">Dịch vụ</Link>
            <Link component={NavLink} to="/centers" display="block" variant="body2" color="text.secondary">Trung tâm</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Hỗ trợ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hotline: 1900 23 23 89
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: support@evservice.com
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
              EV Service Center
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


export default Footer;