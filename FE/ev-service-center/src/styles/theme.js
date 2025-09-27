import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#005B96', 
    },
    secondary: {
      main: '#B2B2B2', 
    },
    background: {
      default: '#F4F6F8', 
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    // Tùy chỉnh mặc định cho component Button
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Bo góc nhẹ, hiện đại
          textTransform: 'none', // Không viết hoa toàn bộ chữ
          fontWeight: 600,
        },
      },
    },
    // Tùy chỉnh mặc định cho component Card
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 12, // Bo góc nhiều hơn cho card
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)', // Đổ bóng nhẹ nhàng
            }
        }
    }
  },
});