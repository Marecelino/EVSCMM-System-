import React, { useState, useEffect } from 'react';
import { getUserAppointments } from '../../api/apiService';
import { List, ListItem, ListItemIcon, ListItemText, CircularProgress, Alert, Typography, Chip, Divider, Box } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const statusMap = {
  confirmed: { label: 'Đã xác nhận', color: 'success' },
  pending: { label: 'Chờ xác nhận', color: 'warning' },
  completed: { label: 'Đã hoàn thành', color: 'info' },
  cancelled: { label: 'Đã hủy', color: 'error' },
};

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

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box>
      {appointments.length > 0 ? (
        <List disablePadding>
          {appointments.map((booking, index) => (
            <React.Fragment key={booking.id}>
              <ListItem 
                button // Thêm hiệu ứng click
                secondaryAction={
                  <Chip 
                    label={statusMap[booking.status]?.label || booking.status} 
                    color={statusMap[booking.status]?.color || 'default'} 
                    size="small"
                  />
                }
              >
                <ListItemIcon>
                  {booking.status === 'completed' ? <CheckCircleIcon color="info" /> : <EventAvailableIcon color="action" />}
                </ListItemIcon>
                <ListItemText 
                  primary={booking.quotation?.package_id === 1 ? 'Gói Chăm sóc Cơ bản' : 'Gói Chăm sóc Cao cấp'}
                  secondary={`Hẹn ngày: ${new Date(booking.requested_datetime).toLocaleDateString('vi-VN')}`}
                />
              </ListItem>
              {index < appointments.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Typography sx={{ p: 2, color: 'text.secondary', textAlign: 'center' }}>Bạn không có lịch hẹn nào.</Typography>
      )}
    </Box>
  );
}

export default AppointmentList;