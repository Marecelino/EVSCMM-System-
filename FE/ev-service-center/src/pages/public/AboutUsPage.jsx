import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import BusinessIcon from '@mui/icons-material/Business';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// --- DỮ LIỆU MẪU CHO TRANG GIỚI THIỆU ---
const coreValues = [
  { icon: <RocketLaunchIcon color="primary" />, title: "Tầm nhìn", description: "Trở thành chuỗi trung tâm dịch vụ xe điện đáng tin cậy và hiện đại nhất, dẫn đầu cuộc cách mạng giao thông xanh." },
  { icon: <BusinessIcon color="primary" />, title: "Sứ mệnh", description: "Vì một tương lai di chuyển an toàn và bền vững cho mọi người, thông qua dịch vụ chăm sóc xe điện chuyên nghiệp." },
  { icon: <FavoriteIcon color="primary" />, title: "Triết lý", description: "Đặt khách hàng làm trọng tâm, không ngừng sáng tạo để mang đến trải nghiệm dịch vụ xuất sắc và minh bạch." },
];

const milestones = [
  { year: "2024", event: "Thành lập trung tâm đầu tiên tại TP.HCM, đặt nền móng cho hệ thống dịch vụ chuyên nghiệp." },
  { year: "2025", event: "Nhận giải 'Dịch vụ xe điện được yêu thích nhất' và mở rộng thêm 2 chi nhánh mới." },
];

const awards = [
    { year: 2025, title: "Dịch vụ xe điện được yêu thích nhất", by: "Tạp chí Xe & Đời sống" },
    { year: 2025, title: "Top 5 Trung tâm có Kỹ thuật viên Giỏi nhất", by: "Hiệp hội Kỹ thuật Ô tô" },
];
// --- KẾT THÚC DỮ LIỆU MẪU ---


function AboutUsPage() {
  return (
    <Box>
      {/* 1. BANNER */}
      <Box
        sx={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=2070&auto=format&fit=crop"
          alt="EV Service Center Workshop"
          sx={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" fontWeight="bold">
            Về EV Service Center
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Chuyên gia chăm sóc xe điện của bạn.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        {/* 2. GIỚI THIỆU CHUNG */}
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom fontWeight="600">
              Câu chuyện của chúng tôi
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              EV Service Center ra đời với khát vọng đồng hành cùng sự phát triển của kỷ nguyên xe điện tại Việt Nam. Chúng tôi là một trong những đơn vị tiên phong xây dựng hệ thống dịch vụ độc lập, chuyên biệt dành riêng cho ô tô điện.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Với triết lý “Đặt khách hàng làm trọng tâm”, EV Service Center không ngừng đầu tư vào công nghệ chẩn đoán hiện đại và đào tạo đội ngũ kỹ thuật viên chuyên sâu, nhằm mang đến sự an tâm tuyệt đối cho mỗi khách hàng.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://images.unsplash.com/photo-1632833213544-e25b3a323984?q=80&w=1925&auto=format&fit=crop" 
                 alt="Technician working on an EV" sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }} />
          </Grid>
        </Grid>

        {/* 3. TẦM NHÌN, SỨ MỆNH */}
        <Box sx={{ my: 8 }}>
            <Grid container spacing={4}>
                {coreValues.map(item => (
                    <Grid item xs={12} md={4} key={item.title}>
                        <Paper variant="outlined" sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                            {item.icon}
                            <Typography variant="h5" sx={{ mt: 1, mb: 1.5 }}>{item.title}</Typography>
                            <Typography color="text.secondary">{item.description}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* 4. LỊCH SỬ THƯƠNG HIỆU */}
        <Box sx={{ my: 8 }}>
            <Typography variant="h4" align="center" gutterBottom fontWeight="600">Các cột mốc quan trọng</Typography>
            <Timeline position="alternate">
                {milestones.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent color="text.secondary">{item.year}</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">{item.event}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
        
        {/* 5. GIẢI THƯỞNG */}
        <Box sx={{ my: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom fontWeight="600">Giải thưởng & Ghi nhận</Typography>
             <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                {awards.map((award, index) => (
                    <Grid item xs={12} sm={5} key={index}>
                        <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
                            <EmojiEventsIcon sx={{ fontSize: 40 }}/>
                            <Typography variant="h6">{award.title}</Typography>
                            <Typography>Bởi: {award.by} - {award.year}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>

      </Container>
    </Box>
  );
}

export default AboutUsPage;