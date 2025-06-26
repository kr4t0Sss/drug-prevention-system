import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Chip,
  CircularProgress,
  Alert,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  Avatar,
  Stack,
} from '@mui/material';
import {
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Description as DescriptionIcon,
  Done as DoneIcon,
  Flag as FlagIcon,
  EventNote as EventNoteIcon,
  HourglassEmpty as HourglassEmptyIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';

const CounselingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchSession = async () => {
      try {
        // Simulated API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            id,
            counselor: {
              name: 'Tiến sĩ Sarah Johnson',
              specialization: 'Nhà tâm lý học lâm sàng có giấy phép',
              experience: '10 năm kinh nghiệm',
              imageUrl: '/images/counselors/sarah-johnson.jpg',
            },
            date: new Date(),
            time: '14:00',
            duration: '60 phút',
            location: 'Phòng 302, Trung tâm tư vấn',
            status: 'Đã lên lịch',
            type: 'Phiên cá nhân',
            notes: [
              'Đánh giá ban đầu đã hoàn thành',
              'Khách hàng bày tỏ lo ngại về áp lực bạn bè',
              'Đã thảo luận các chiến lược đối phó',
            ],
            goals: [
              'Phát triển cơ chế đối phó lành mạnh',
              'Giải quyết các tình huống áp lực bạn bè',
              'Xây dựng mạng lưới hỗ trợ',
            ],
          }), 1000)
        );
        setSession(response);
        setLoading(false);
      } catch (err) {
        setError('Không thể tải chi tiết phiên tư vấn');
        setLoading(false);
      }
    };

    fetchSession();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!session) {
    return (
      <Box p={3}>
        <Alert severity="info">Không tìm thấy phiên tư vấn</Alert>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <EventNoteIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Chi tiết phiên tư vấn
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
          Xem lại thông tin chi tiết về phiên tư vấn đã đặt của bạn.
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Grid container spacing={4}>
          {/* Counselor Info */}
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3, p: 2, bgcolor: '#e3f2fd', borderRadius: 1 }}>
              <Avatar src={session.counselor.imageUrl} alt={session.counselor.name} sx={{ width: 70, height: 70 }} />
              <Box>
                <Typography variant="h5" fontWeight={600} color="primary.dark">
                  {session.counselor.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {session.counselor.title} - {session.counselor.specialization}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {session.counselor.experience}
                </Typography>
              </Box>
            </Stack>
            <Divider sx={{ my: 2 }} />
          </Grid>

          {/* Session Details */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <CalendarIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary" fontWeight={500}>
                  Ngày
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {format(new Date(session.date), 'dd/MM/yyyy')}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <TimeIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary" fontWeight={500}>
                  Thời gian & Thời lượng
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {session.time} ({session.duration})
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary" fontWeight={500}>
                  Địa điểm
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {session.location}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <PersonIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary" fontWeight={500}>
                  Loại phiên
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {session.type}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 2 }}>
              Trạng thái phiên
            </Typography>
            <Chip 
              label={session.status}
              color={
                session.status === 'Đã hoàn thành' ? 'success' :
                session.status === 'Đã hủy' ? 'error' :
                session.status === 'Đã lên lịch' ? 'primary' : 'default'
              }
              icon={session.status === 'Đã hoàn thành' ? <DoneIcon /> : session.status === 'Đã hủy' ? <CancelIcon /> : <HourglassEmptyIcon />}
              sx={{ fontSize: '1rem', px: 1, py: 0.5, height: 'auto' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Ghi chú phiên
            </Typography>
            <List sx={{ bgcolor: '#f8f8f8', borderRadius: 1, p: 1 }}>
              {session.notes.map((note, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <DescriptionIcon fontSize="small" color="action" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">{note}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Mục tiêu điều trị
            </Typography>
            <List sx={{ bgcolor: '#f8f8f8', borderRadius: 1, p: 1 }}>
              {session.goals.map((goal, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <FlagIcon fontSize="small" color="action" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">{goal}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }} justifyContent="flex-end">
              <Button variant="outlined" color="error" size="large" sx={{ px: 3, py: 1.2 }}>
                Hủy phiên
              </Button>
              <Button variant="contained" color="primary" size="large" sx={{ px: 3, py: 1.2 }}>
                Đặt lịch lại
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CounselingDetail; 