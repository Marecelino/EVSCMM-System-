import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/apiService';
import { Box, TextField, Button, Typography, Paper, Alert, Container } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await login(email, password);
      alert('Đăng nhập thành công!');
      navigate('/customer/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    // Sử dụng Box với flexbox để căn giữa nội dung theo cả chiều dọc và ngang
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // Đảm bảo chiếm đủ chiều cao còn lại của màn hình (trừ đi Header và Footer)
        minHeight: 'calc(100vh - 200px)', 
        py: 4,
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={6} sx={{ p: 4, mt: 4, borderRadius: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <DirectionsCarIcon color="primary" sx={{ fontSize: 40 }}/>
            <Typography component="h1" variant="h5">
              Đăng nhập hệ thống
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Địa chỉ Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Đăng nhập
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginPage;