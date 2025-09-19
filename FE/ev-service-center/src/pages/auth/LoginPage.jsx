import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/apiService';
import { Box, TextField, Button, Typography, Paper, Alert } from '@mui/material';
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
      // [Suy luận] Trong ứng dụng thật, bạn sẽ lưu token vào localStorage
      // localStorage.setItem('token', response.data.token);
      alert('Đăng nhập thành công!');
      navigate('/customer/dashboard'); // Chuyển hướng đến trang dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Phần hình ảnh bên trái - chỉ hiển thị trên màn hình lớn */}
      <Box 
        sx={{ 
          width: '50%',
          display: { xs: 'none', md: 'block' },
          backgroundImage: 'url(https://vinfast-chevrolet-thanglong.com/wp-content/uploads/2021/04/p-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Phần form đăng nhập bên phải */}
      <Box 
        sx={{ 
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4
        }}
      >
        <Paper elevation={6} sx={{ p: 4, width: '100%', maxWidth: 400, borderRadius: 3 }}>
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
      </Box>
    </Box>
  );
}

export default LoginPage;