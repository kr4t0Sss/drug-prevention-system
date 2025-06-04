import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material';

const ProgramDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Program Details
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Program ID: {id}
          </Typography>
          {/* Add program details here */}
        </Box>
      </Paper>
    </Container>
  );
};

export default ProgramDetail; 