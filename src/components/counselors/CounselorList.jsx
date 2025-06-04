import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CounselorList = () => {
  // Mock data - replace with actual data fetching
  const counselors = [
    { id: 1, name: 'Dr. Jane Smith', specialization: 'Substance Abuse' },
    { id: 2, name: 'Dr. John Doe', specialization: 'Family Counseling' },
    { id: 3, name: 'Dr. Sarah Johnson', specialization: 'Group Therapy' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Counselors
      </Typography>
      <Grid container spacing={3}>
        {counselors.map((counselor) => (
          <Grid item xs={12} sm={6} md={4} key={counselor.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {counselor.name}
                </Typography>
                <Typography color="textSecondary">
                  {counselor.specialization}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/counselors/${counselor.id}`}
                  size="small"
                  color="primary"
                >
                  View Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CounselorList; 