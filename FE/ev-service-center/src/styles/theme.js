import { createTheme } from '@mui/material/styles';

// [Suy luận] Dựa trên các thương hiệu EV, chúng ta sẽ dùng màu xanh dương
// làm màu chủ đạo để thể hiện sự tin cậy, công nghệ và thân thiện môi trường.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#005B96', // Một màu xanh dương đậm, chuyên nghiệp
    },
    secondary: {
      main: '#B2B2B2', // Màu xám nhạt cho các yếu tố phụ
    },
    background: {
      default: '#F4F6F8', // Màu nền xám rất nhạt, tạo cảm giác sạch sẽ
      paper: '#FFFFFF', // Màu nền của các card, component
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