import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const sessions = [
  {
    title: 'Tư vấn phòng chống ma túy',
    date: '2023-10-01',
    time: '10:00 AM',
    path: '/counseling/sessions/1',
  },
  {
    title: 'Hỗ trợ người nghiện ma túy',
    date: '2023-10-02',
    time: '2:00 PM',
    path: '/counseling/sessions/2',
  },
  {
    title: 'Tư vấn gia đình',
    date: '2023-10-03',
    time: '11:00 AM',
    path: '/counseling/sessions/3',
  },
];

const UpcomingSessions = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Buổi tư vấn sắp tới
      </Typography>
      <Grid container spacing={3}>
        {sessions.map((session, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {session.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Ngày: {session.date} - {session.time}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(session.path)}
                >
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpcomingSessions; 