import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';

function VehicleFormModal({ open, onClose, onSave, vehicle }) {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    license_plate: '',
    vin_number: '',
    odometer_km: '', // Thêm field mới
  });

  useEffect(() => {
    if (vehicle) {
      setFormData(vehicle);
    } else {
      // Reset form khi thêm mới
      setFormData({ brand: '', model: '', year: '', license_plate: '', vin_number: '', odometer_km: '' });
    }
  }, [vehicle, open]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{vehicle ? 'Chỉnh sửa thông tin xe' : 'Thêm xe mới'}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField name="brand" label="Hãng xe" value={formData.brand} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="model" label="Mẫu xe" value={formData.model} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="year" label="Năm sản xuất" type="number" value={formData.year} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="license_plate" label="Biển số xe" value={formData.license_plate} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField name="vin_number" label="Số VIN" value={formData.vin_number} onChange={handleChange} fullWidth required />
          </Grid>
          {/* THÊM FIELD ODOMETER */}
          <Grid item xs={12} sm={4}>
            <TextField name="odometer_km" label="Số ODO (km)" type="number" value={formData.odometer_km} onChange={handleChange} fullWidth />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleSubmit} variant="contained">Lưu</Button>
      </DialogActions>
    </Dialog>
  );
}

export default VehicleFormModal;