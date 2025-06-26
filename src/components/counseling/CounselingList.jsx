import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SpaIcon from '@mui/icons-material/Spa'; // General counseling icon
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; // Individual counseling
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'; // Family counseling
import GroupsIcon from '@mui/icons-material/Groups'; // Group counseling or support

const counselingServices = [
  {
    title: 'Tư vấn cá nhân',
    description: 'Gặp gỡ chuyên gia để được tư vấn riêng về phòng chống và phục hồi ma túy, đảm bảo sự riêng tư và hỗ trợ chuyên sâu.',
    path: '/counseling/schedule', // Link to scheduling page
    icon: <SelfImprovementIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
  },
  {
    title: 'Tư vấn gia đình',
    description: 'Tư vấn cho gia đình có người thân nghiện ma túy, giúp xây dựng môi trường hỗ trợ và hiểu biết lẫn nhau.',
    path: '/counseling/schedule',
    icon: <FamilyRestroomIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
  },
  {
    title: 'Tư vấn nhóm',
    description: 'Tham gia các buổi tư vấn nhóm để chia sẻ kinh nghiệm, học hỏi từ người khác và nhận được sự đồng cảm từ cộng đồng.',
    path: '/counseling/schedule',
    icon: <GroupsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
  },
];

const CounselingList = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <SpaIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Dịch vụ tư vấn
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
          Chúng tôi cung cấp các dịch vụ tư vấn đa dạng, được thực hiện bởi các chuyên gia có kinh nghiệm, nhằm hỗ trợ cá nhân và gia đình trong hành trình phòng chống và phục hồi sau ma túy.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Hãy khám phá các lựa chọn tư vấn dưới đây và tìm phương pháp phù hợp nhất với bạn.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {counselingServices.map((service, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card
              sx={{
                p: 3,
                textAlign: 'center',
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3,
                '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Box sx={{ mb: 2 }}>
                {service.icon}
              </Box>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate(service.path)}
                  sx={{
                    backgroundColor: '#2196f3', // Blue for action
                    '&:hover': {
                      backgroundColor: '#1976d2',
                    },
                  }}
                >
                  Đặt lịch ngay
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CounselingList; 