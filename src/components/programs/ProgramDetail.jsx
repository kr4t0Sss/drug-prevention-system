import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material';

const ProgramDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Chi tiết chương trình
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Mã chương trình: {id}
          </Typography>
          {/* Thêm chi tiết chương trình tại đây */}
        </Box>
      </Paper>
    </Container>
  );
};

export default ProgramDetail; 