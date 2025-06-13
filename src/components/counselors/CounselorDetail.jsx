import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, Grid, Button } from '@mui/material';

const CounselorDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Hồ sơ tư vấn viên
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                Mã tư vấn viên: {id}
              </Typography>
              {/* Thêm chi tiết tư vấn viên tại đây */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ mt: { xs: 2, md: 0 } }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Đặt lịch hẹn
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
              >
                Liên hệ tư vấn viên
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CounselorDetail; 