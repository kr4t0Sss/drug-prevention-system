import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material';

const SurveyDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Chi tiết khảo sát
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Mã khảo sát: {id}
          </Typography>
          {/* Thêm các câu hỏi và biểu mẫu khảo sát tại đây */}
        </Box>
      </Paper>
    </Container>
  );
};

export default SurveyDetail; 