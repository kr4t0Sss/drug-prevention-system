import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
  CardMedia,
  Stack,
  Chip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  EventNote as EventNoteIcon,
  Spa as SpaIcon,
  FamilyRestroom as FamilyRestroomIcon,
  Groups as GroupsIcon,
  ArrowForward as ArrowForwardIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

const appointments = [
  {
    id: 1,
    title: 'Tư vấn cá nhân về lạm dụng chất',
    description: 'Gặp gỡ chuyên gia để được tư vấn riêng về phòng chống và phục hồi sau lạm dụng chất gây nghiện.',
    icon: <SpaIcon style={{ fontSize: 40 }} />,
    image: '/images/appointments/appointment1.jpg',
    link: '/counseling/schedule',
    type: 'counseling',
  },
  {
    id: 2,
    title: 'Tư vấn gia đình và hỗ trợ người thân',
    description: 'Các buổi tư vấn dành cho gia đình để cùng nhau tháo gỡ khó khăn, hỗ trợ người thân trong quá trình cai nghiện.',
    icon: <FamilyRestroomIcon style={{ fontSize: 40 }} />,
    image: '/images/appointments/appointment2.jpg',
    link: '/counseling/schedule',
    type: 'counseling',
  },
  {
    id: 3,
    title: 'Tham gia các buổi trị liệu nhóm',
    description: 'Môi trường an toàn để chia sẻ kinh nghiệm, học hỏi và nhận được sự hỗ trợ từ những người có cùng hoàn cảnh.',
    icon: <GroupsIcon style={{ fontSize: 40 }} />,
    image: '/images/appointments/appointment3.jpg',
    link: '/counseling/schedule',
    type: 'counseling',
  },
  {
    id: 4,
    title: 'Xem lịch sử và quản lý cuộc hẹn',
    description: 'Theo dõi các cuộc hẹn đã đặt, xem chi tiết và quản lý lịch trình của bạn một cách dễ dàng.',
    icon: <InfoIcon style={{ fontSize: 40 }} />,
    image: '/images/appointments/appointment4.jpg',
    link: '/profile', // Link to user's profile where appointment history might be
    type: 'management',
  },
];

const Appointments = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <EventNoteIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Quản lý lịch hẹn và tư vấn
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Dễ dàng đặt lịch tư vấn cá nhân, gia đình, hoặc tham gia trị liệu nhóm. Theo dõi và quản lý các cuộc hẹn của bạn tại đây.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {appointments.map((appointment) => (
          <Grid item xs={12} sm={6} md={4} key={appointment.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 6,
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 12,
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={appointment.image}
                alt={appointment.title}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ color: 'primary.main', mb: 1.5, textAlign: 'center' }}>
                  {appointment.icon}
                </Box>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={700} color="primary.dark" sx={{ textAlign: 'center' }}>
                  {appointment.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                  {appointment.description}
                </Typography>
                <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                  <Button
                    component={RouterLink}
                    to={appointment.link}
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: appointment.type === 'counseling' ? '#4caf50' : '#2196f3',
                      '&:hover': {
                        bgcolor: appointment.type === 'counseling' ? '#388e3c' : '#1976d2',
                      },
                      textTransform: 'none',
                      fontWeight: 'bold',
                      width: 'auto', // Adjust width automatically
                      minWidth: '180px', // Minimum width for buttons
                    }}
                  >
                    {appointment.type === 'counseling' ? 'Đặt lịch ngay' : 'Xem chi tiết'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Appointments; 