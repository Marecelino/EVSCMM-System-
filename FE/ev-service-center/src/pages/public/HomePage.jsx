import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SpeedIcon from '@mui/icons-material/Speed';

// Dữ liệu mẫu, có thể lấy từ API sau
const featuredServices = [
  { name: "Gói Bảo dưỡng Cơ bản", icon: <BuildIcon fontSize="large" color="primary"/>, description: "Kiểm tra toàn diện, đảm bảo xe vận hành an toàn và ổn định." },
  { name: "Kiểm tra Pin & Sạc", icon: <SpeedIcon fontSize="large" color="primary"/>, description: "Đánh giá sức khỏe pin, tối ưu hiệu suất và tuổi thọ." },
  { name: "Dịch vụ Sửa chữa", icon: <VerifiedUserIcon fontSize="large" color="primary"/>, description: "Sửa chữa chuyên nghiệp với phụ tùng chính hãng." },
];

function HomePage() {
  return (
    <Box>
      {/* 1. Hero Section */}
      <Box 
        sx={{
          py: 12,
          textAlign: 'center',
          color: 'white',
          background: 'linear-gradient(rgba(0, 91, 150, 0.7), rgba(0, 91, 150, 0.7)), url(https://vinfast-chevrolet-thanglong.com/wp-content/uploads/2021/04/p-2.jpg) no-repeat center center',
          backgroundSize: 'cover'
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" fontWeight="700" gutterBottom>
            Chăm sóc Toàn diện cho Xe điện của bạn
          </Typography>
          <Typography variant="h5" color="inherit" paragraph sx={{ mb: 4 }}>
            Đặt lịch bảo dưỡng, sửa chữa nhanh chóng và chuyên nghiệp tại hệ thống trung tâm ủy quyền.
          </Typography>
          <Button component={NavLink} to="/services" variant="contained" size="large" sx={{ backgroundColor: 'white', color: 'primary.main', '&:hover': { backgroundColor: '#f0f0f0' } }}>
            Khám phá các gói dịch vụ
          </Button>
        </Container>
      </Box>

      {/* 2. Dịch vụ nổi bật */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="600">Dịch vụ của chúng tôi</Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {featuredServices.map(service => (
            <Grid item key={service.name} xs={12} md={4}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h6" gutterBottom>{service.name}</Typography>
                  <Typography color="text.secondary">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* 3. Quy trình 3 bước */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom fontWeight="600">Quy trình đơn giản chỉ với 3 bước</Typography>
          <Grid container spacing={5} sx={{ mt: 4 }} textAlign="center">
            <Grid item xs={12} md={4}>
              <EventAvailableIcon sx={{ fontSize: 60 }} color="primary"/>
              <Typography variant="h6" sx={{ mt: 2 }}>1. Đặt lịch trực tuyến</Typography>
              <Typography color="text.secondary">Chọn dịch vụ và khung giờ phù hợp với bạn chỉ trong vài phút.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <DirectionsCarIcon sx={{ fontSize: 60 }} color="primary"/>
              <Typography variant="h6" sx={{ mt: 2 }}>2. Mang xe đến trung tâm</Typography>
              <Typography color="text.secondary">Đến trung tâm đã chọn theo lịch hẹn đã được xác nhận.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <PriceCheckIcon sx={{ fontSize: 60 }} color="primary"/>
              <Typography variant="h6" sx={{ mt: 2 }}>3. Nhận lại xe</Typography>
              <Typography color="text.secondary">Nhận thông báo khi dịch vụ hoàn tất và thanh toán tiện lợi.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

export default HomePage;