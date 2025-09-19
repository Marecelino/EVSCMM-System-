import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import các thành phần cần thiết từ MUI
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme'; // Import theme đã tạo
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline giúp reset CSS và áp dụng style nền mặc định từ theme */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);