import {React, useState, useEffect} from 'react';
import { getVehiclesByOwner } from '../../api/apiService';
import { Grid, Card, CardContent, Typography, CircularProgress, Alert, Box } from '@mui/material';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

function VehicleListPreview({ userId }) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchVehicles = async () => {
      try {
        const response = await getVehiclesByOwner(userId);
        // Chỉ hiển thị tối đa 3 xe trên dashboard
        setVehicles(response.data.slice(0, 3)); 
      } catch (err) {
        setError("Không thể tải danh sách xe.");
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, [userId]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Grid container spacing={2}>
      {vehicles.length > 0 ? (
        vehicles.map((vehicle) => (
          <Grid item key={vehicle.id} xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <TimeToLeaveIcon color="action" sx={{ mr: 1.5 }} />
                  <Typography variant="h6">{`${vehicle.brand} ${vehicle.model}`}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  BS: {vehicle.license_plate} - ODO: {new Intl.NumberFormat('vi-VN').format(vehicle.odometer_km)} km
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography sx={{ p: 2, color: 'text.secondary' }}>Bạn chưa thêm xe nào.</Typography>
      )}
    </Grid>
  );
}

export default VehicleListPreview;