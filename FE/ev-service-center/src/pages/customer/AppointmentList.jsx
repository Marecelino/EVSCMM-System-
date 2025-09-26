import React, { useState, useEffect } from 'react';
import { getUserAppointments } from '../../api/apiService';
import { List, ListItem, ListItemText, Paper, CircularProgress, Alert, Typography, Chip } from '@mui/material';

function AppointmentList({ userId }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchAppointments = async () => {
      try {
        const response = await getUserAppointments(userId);
        setAppointments(response.data);
      } catch (err) {
        setError("Không thể tải danh sách lịch hẹn.");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [userId]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Paper elevation={2}>
      {appointments.length > 0 ? (
        <List>
          {appointments.map((booking) => (
            <ListItem key={booking.id} secondaryAction={
              <Chip 
                label={booking.status} 
                color={booking.status === 'confirmed' ? 'success' : 'warning'} 
                size="small"
              />
            }>
              <ListItemText 
                primary={booking.quotation?.package_id === 1 ? 'Gói Cơ bản' : 'Gói Cao cấp'}
                secondary={`Ngày hẹn: ${new Date(booking.requested_datetime).toLocaleDateString('vi-VN')}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography sx={{ p: 2 }}>Bạn không có lịch hẹn nào.</Typography>
      )}
    </Paper>
  );
}

export default AppointmentList;