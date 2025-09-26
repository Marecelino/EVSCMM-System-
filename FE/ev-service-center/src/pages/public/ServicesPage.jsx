import React, { useState, useEffect } from 'react';
import { getServicePackages } from '../../api/apiService';
import { Container, Typography, Grid, Card, CardHeader, CardContent, CardActions, Button, Box, CircularProgress, Alert, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ServicesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Giả lập độ trễ mạng
        await new Promise(resolve => setTimeout(resolve, 300));
        const response = await getServicePackages();
        setPackages(response.data);
      } catch (err) {
        setError("Không thể tải danh sách dịch vụ. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}><CircularProgress /></Box>;
  }

  if (error) {
    return <Container sx={{ my: 4 }}><Alert severity="error">{error}</Alert></Container>;
  }

  return (
    <Box sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container>
        <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Các Gói Dịch vụ của Chúng tôi
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 8 }}>
          Lựa chọn gói bảo dưỡng phù hợp để đảm bảo chiếc xe điện của bạn luôn ở trạng thái tốt nhất.
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {packages.map((pkg) => (
            <Grid item key={pkg.id} xs={12} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: `4px solid`, borderColor: 'primary.main' }}>
                <CardHeader
                  title={pkg.name}
                  titleTypographyProps={{ align: 'center', variant: 'h5', color: 'primary.main', fontWeight: '600' }}
                  sx={{ bgcolor: 'grey[50]' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
                    <Typography component="h2" variant="h4" color="text.primary">
                      {/* SỬA LỖI: Dùng pkg.package_price thay vì pkg.price */}
                      {new Intl.NumberFormat('vi-VN').format(pkg.package_price)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      &nbsp;VNĐ
                    </Typography>
                  </Box>
                  <List dense>
                    {/* SỬA LỖI: Tách các tính năng từ trường description */}
                    {pkg.description.split(' + ').map((feature) => (
                      <ListItem key={feature} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleOutlineIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button fullWidth variant="contained">
                    Chọn gói này
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesPage;