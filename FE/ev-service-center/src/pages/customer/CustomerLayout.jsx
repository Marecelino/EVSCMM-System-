import React from 'react';
import { Container, Typography } from '@mui/material';

function CustomerDashboardPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bảng điều khiển của Khách hàng
      </Typography>
      <Typography>
        Chào mừng bạn trở lại! Tại đây bạn có thể quản lý xe, xem lịch hẹn và các thông tin khác.
      </Typography>
    </Container>
  );
}

export default CustomerDashboardPage;