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
              Counselor Profile
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                Counselor ID: {id}
              </Typography>
              {/* Add more counselor details here */}
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
                Schedule Appointment
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
              >
                Contact Counselor
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CounselorDetail; 