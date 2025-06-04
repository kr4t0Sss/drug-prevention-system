import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const counselingServices = [
  {
    title: 'Tư vấn phòng chống ma túy',
    description: 'Gặp gỡ chuyên gia để được tư vấn về phòng chống ma túy.',
    path: '/counseling/1',
  },
  {
    title: 'Hỗ trợ người nghiện ma túy',
    description: 'Tư vấn và hỗ trợ người nghiện ma túy hòa nhập cộng đồng.',
    path: '/counseling/2',
  },
  {
    title: 'Tư vấn gia đình',
    description: 'Tư vấn cho gia đình có người thân nghiện ma túy.',
    path: '/counseling/3',
  },
];

const CounselingList = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dịch vụ tư vấn
      </Typography>
      <Grid container spacing={3}>
        {counselingServices.map((service, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(service.path)}
                >
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

export default CounselingList; 