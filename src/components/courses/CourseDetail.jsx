import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Chi tiết khóa học
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Mã khóa học: {id}
          </Typography>
          {/* Thêm chi tiết khóa học tại đây */}
        </Box>
      </Paper>
    </Container>
  );
};

export default CourseDetail; 