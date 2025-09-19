import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    // Component này có nhiệm vụ "bật" chức năng routing cho toàn bộ ứng dụng
    <BrowserRouter>
      {/* Component AppRoutes chứa tất cả các định nghĩa về đường dẫn */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;