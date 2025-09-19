import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'background.paper', p: 6, borderTop: '1px solid #ddd' }} component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              EV Service Center
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hệ thống quản lý bảo dưỡng xe điện chuyên nghiệp và hiện đại.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Liên kết
            </Typography>
            <Link href="#" display="block" variant="body2" color="text.secondary">Trang chủ</Link>
            <Link href="#" display="block" variant="body2" color="text.secondary">Dịch vụ</Link>
            <Link href="#" display="block" variant="body2" color="text.secondary">Liên hệ</Link>
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