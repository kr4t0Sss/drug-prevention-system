import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
  Chip,
  Stack,
} from '@mui/material';
import {
  useNavigate
} from 'react-router-dom';
import {
  Event as EventIcon,
  AccessTime as AccessTimeIcon,
  PersonOutline as PersonOutlineIcon,
  Class as ClassIcon, // Example icon for session type
  Videocam as VideocamIcon, // Icon for online session type
  MeetingRoom as MeetingRoomIcon, // Icon for in-person session type
  CalendarMonth as CalendarMonthIcon, // Icon for date
  ArrowForwardIos as ArrowForwardIosIcon, // Icon for view details button
  AddCircleOutline as AddCircleOutlineIcon, // Icon for schedule new button
} from '@mui/icons-material';

const sessions = [
  {
    id: '1',
    title: 'Tư vấn cá nhân về căng thẳng',
    date: '2023-10-01',
    time: '10:00 AM',
    type: 'Trực tuyến',
    counselor: 'Tiến sĩ Nguyễn Thị Hương',
    path: '/counseling/detail/1',
  },
  {
    id: '2',
    title: 'Tư vấn nhóm phục hồi',
    date: '2023-10-05',
    time: '02:00 PM',
    type: 'Trực tiếp',
    counselor: 'Tiến sĩ Trần Văn Minh',
    path: '/counseling/detail/2',
  },
  {
    id: '3',
    title: 'Tư vấn gia đình: Xây dựng hỗ trợ',
    date: '2023-10-10',
    time: '11:00 AM',
    type: 'Trực tuyến',
    counselor: 'Lê Thị Hồng, ThS',
    path: '/counseling/detail/3',
  },
];

const UpcomingSessions = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <EventIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Buổi tư vấn sắp tới
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
          Xem lại các buổi tư vấn đã đặt lịch của bạn và chuẩn bị cho các phiên sắp tới.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Chúng tôi ở đây để hỗ trợ bạn trên hành trình phục hồi và phát triển.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <Grid item xs={12} sm={6} md={4} key={session.id}>
              <Card
                sx={{
                  p: 3,
                  minHeight: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 3,
                  '&:hover': { boxShadow: 8, transform: 'translateY(-8px)' },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Chip
                    label={session.type}
                    color={session.type === 'Trực tuyến' ? 'primary' : 'secondary'}
                    size="small"
                    sx={{ mb: 1.5, fontWeight: 'bold' }}
                    icon={session.type === 'Trực tuyến' ? <VideocamIcon /> : <MeetingRoomIcon />}
                  />
                  <Typography variant="h6" component="h2" gutterBottom fontWeight={600}>
                    {session.title}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <CalendarMonthIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      Ngày {session.date} lúc {session.time}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <PersonOutlineIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      Với: {session.counselor}
                    </Typography>
                  </Stack>
                </CardContent>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate(session.path)}
                  endIcon={<ArrowForwardIosIcon />}
                  sx={{
                    backgroundColor: '#2196f3',
                    '&:hover': {
                      backgroundColor: '#1976d2',
                    },
                    mt: 'auto',
                  }}
                >
                  Xem chi tiết
                </Button>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" color="text.secondary">
                Bạn không có buổi tư vấn sắp tới nào.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 3 }}
                onClick={() => navigate('/counseling')}
                startIcon={<AddCircleOutlineIcon />}
              >
                Đặt lịch tư vấn mới
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default UpcomingSessions; 