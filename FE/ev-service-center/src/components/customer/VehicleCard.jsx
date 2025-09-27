import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

function VehicleCard({ vehicle, onEdit, onDelete }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TimeToLeaveIcon color="primary" sx={{ mr: 1.5 }} />
          <Typography variant="h6" component="div">
            {vehicle.brand} {vehicle.model}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Biển số: <strong>{vehicle.license_plate}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Số VIN: <strong>{vehicle.vin_number}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Năm sản xuất: <strong>{vehicle.year}</strong>
        </Typography>
        {/* HIỂN THỊ ODOMETER */}
        <Typography variant="body2" color="text.secondary">
          Số ODO: <strong>{vehicle.odometer_km ? `${new Intl.NumberFormat('vi-VN').format(vehicle.odometer_km)} km` : 'Chưa cập nhật'}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" onClick={onEdit} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton size="small" onClick={onDelete} color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default VehicleCard;