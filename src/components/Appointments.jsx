import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const appointments = [
  {
    title: 'Tư vấn phòng chống ma túy',
    description: 'Gặp gỡ chuyên gia để được tư vấn về phòng chống ma túy.',
    to: '/appointments/1',
  },
  {
    title: 'Hỗ trợ người nghiện ma túy',
    description: 'Tư vấn và hỗ trợ người nghiện ma túy hòa nhập cộng đồng.',
    to: '/appointments/2',
  },
  {
    title: 'Tư vấn gia đình',
    description: 'Tư vấn cho gia đình có người thân nghiện ma túy.',
    to: '/appointments/3',
  },
];

const Appointments = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Đặt lịch tư vấn
      </Typography>
      <Grid container spacing={3}>
        {appointments.map((appointment, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {appointment.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {appointment.description}
                </Typography>
                <Button component={RouterLink} to={appointment.to} variant="contained">
                  Đặt lịch
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Appointments; 