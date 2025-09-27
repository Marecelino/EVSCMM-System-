import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Button, Grid, CircularProgress, Alert, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAuth } from '../../hooks/useAuth';
import * as api from '../../api/apiService';
import VehicleCard from '../../components/customer/VehicleCard.jsx';
import VehicleFormModal from '../../components/customer/VehicleFormModal.jsx';

function VehiclePage() {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fetchVehicles = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await api.getVehiclesByOwner(user.id);
      setVehicles(response.data);
    } catch (err) {
      setError('Không thể tải danh sách xe. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const handleOpenModal = (vehicle = null) => {
    setSelectedVehicle(vehicle);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleSave = async (vehicleData) => {
    try {
      if (selectedVehicle) {
        // Update
        await api.updateVehicle(selectedVehicle.id, { ...vehicleData, owner_id: user.id });
      } else {
        // Create
        await api.createVehicle({ ...vehicleData, owner_id: user.id });
      }
      fetchVehicles(); // Tải lại danh sách xe
      handleCloseModal();
    } catch (err) {
      console.error("Failed to save vehicle:", err);
      // Có thể thêm state để hiển thị lỗi trên modal
    }
  };

  const handleDelete = async (vehicleId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa xe này?')) {
      try {
        await api.deleteVehicle(vehicleId);
        fetchVehicles(); // Tải lại danh sách xe
      } catch (err) {
        console.error("Failed to delete vehicle:", err);
      }
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Quản lý xe của tôi
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => handleOpenModal()}
        >
          Thêm xe mới
        </Button>
      </Box>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <Grid container spacing={3}>
          {vehicles.map((vehicle) => (
            <Grid item key={vehicle.id} xs={12} sm={6} md={4}>
              <VehicleCard
                vehicle={vehicle}
                onEdit={() => handleOpenModal(vehicle)}
                onDelete={() => handleDelete(vehicle.id)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <VehicleFormModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        vehicle={selectedVehicle}
      />
    </Container>
  );
}

export default VehiclePage;