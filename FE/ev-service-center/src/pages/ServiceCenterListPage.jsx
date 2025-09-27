import React, { useState, useEffect } from 'react';
import { getServiceCenters } from '../api/apiService';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  CircularProgress, 
  Box,
  Alert 
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function ServiceCenterListPage() {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sử dụng hàm async-await để code sạch hơn
    const fetchCenters = async () => {
      try {
        // Giả lập độ trễ mạng để thấy loading spinner
        await new Promise(resolve => setTimeout(resolve, 500)); 
        
        const response = await getServiceCenters();
        setCenters(response.data);
      } catch (err) {
        setError("Không thể tải danh sách trung tâm. Vui lòng thử lại sau.");
        console.error("Failed to fetch service centers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCenters();
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy 1 lần

  // Hiển thị trạng thái Loading
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Hiển thị trạng thái Lỗi
  if (error) {
    return (
      <Container sx={{ my: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Hệ thống Trung tâm Dịch vụ
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
        Tìm trung tâm gần bạn nhất để trải nghiệm dịch vụ chuyên nghiệp của chúng tôi.
      </Typography>

      

      <Grid container spacing={4}>
        {centers.map((center) => (
          <Grid item key={center.center_id} xs={12} sm={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {center.name}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.secondary' }}>
                  <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body2">{center.address}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                  <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body2">{center.phone_number}</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small">Xem trên bản đồ</Button>
                <Button size="small" variant="contained">Đặt lịch tại đây</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceCenterListPage;