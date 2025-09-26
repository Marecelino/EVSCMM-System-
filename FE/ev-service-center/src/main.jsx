import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthProvider'; // 1. IMPORT AUTHPROVIDER

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);