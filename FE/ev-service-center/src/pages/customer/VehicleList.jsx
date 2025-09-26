import React, { useState, useEffect } from 'react';
import { getUserVehicles } from '../../api/apiService';
import { List, ListItem, ListItemText, Paper, CircularProgress, Alert, Typography } from '@mui/material';

function VehicleList({ userId }) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchVehicles = async () => {
      try {
        const response = await getUserVehicles(userId);
        setVehicles(response.data);
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
    <Paper elevation={2}>
      {vehicles.length > 0 ? (
        <List>
          {vehicles.map((vehicle) => (
            <ListItem key={vehicle.id}>
              <ListItemText 
                primary={`${vehicle.brand} ${vehicle.model} (${vehicle.year})`}
                secondary={`Biển số: ${vehicle.license_plate} - VIN: ${vehicle.vin_number}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography sx={{ p: 2 }}>Bạn chưa có xe nào.</Typography>
      )}
    </Paper>
  );
}

export default VehicleList;
