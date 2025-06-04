import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const assessments = [
  {
    title: 'Bài trắc nghiệm ASSIST',
    description: 'Đánh giá nguy cơ sử dụng ma túy và các chất gây nghiện.',
    to: '/assessment/assist',
  },
  {
    title: 'Bài trắc nghiệm CRAFFT',
    description: 'Đánh giá nguy cơ sử dụng ma túy ở thanh thiếu niên.',
    to: '/assessment/crafft',
  },
];

const AssessmentList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Đánh giá nguy cơ
      </Typography>
      <Grid container spacing={3}>
        {assessments.map((assessment, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {assessment.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {assessment.description}
                </Typography>
                <Button component={RouterLink} to={assessment.to} variant="contained">
                  Bắt đầu đánh giá
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AssessmentList; 