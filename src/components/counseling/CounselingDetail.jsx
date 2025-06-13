import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
} from '@mui/material';
import {
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';

const CounselingDetail = () => {
  const { id } = useParams();
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
              specialization: 'Tư vấn lạm dụng chất gây nghiện',
              experience: '10 năm kinh nghiệm',
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
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Chi tiết phiên tư vấn
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <PersonIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Tư vấn viên
                </Typography>
                <Typography variant="body1">
                  {session.counselor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {session.counselor.specialization}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <CalendarIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Ngày
                </Typography>
                <Typography variant="body1">
                  {format(new Date(session.date), 'PPP')}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <TimeIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Thời gian & Thời lượng
                </Typography>
                <Typography variant="body1">
                  {session.time} ({session.duration})
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Địa điểm
                </Typography>
                <Typography variant="body1">
                  {session.location}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Chip 
              label={session.status}
              color={
                session.status === 'Đã hoàn thành' ? 'success' :
                session.status === 'Đã hủy' ? 'error' : 'primary'
              }
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Loại phiên
            </Typography>
            <Typography variant="body1" paragraph>
              {session.type}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Ghi chú phiên
            </Typography>
            <List>
              {session.notes.map((note, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={note} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Mục tiêu điều trị
            </Typography>
            <List>
              {session.goals.map((goal, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={goal} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" gap={2} mt={2}>
              <Button variant="contained" color="primary">
                Đặt lịch lại
              </Button>
              <Button variant="outlined" color="error">
                Hủy phiên
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CounselingDetail; 