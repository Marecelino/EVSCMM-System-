import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthProvider';
function App() {
  return (
    <AuthProvider>
   
    <BrowserRouter>
      {/* Component AppRoutes chứa tất cả các định nghĩa về đường dẫn */}
      <AppRoutes />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;