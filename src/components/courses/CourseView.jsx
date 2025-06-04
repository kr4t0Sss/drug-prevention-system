import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const CourseView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for course details
  const courseDetails = {
    title: 'Khóa học phòng chống ma túy cơ bản',
    description: 'Cung cấp kiến thức cơ bản về ma túy và cách phòng chống.',
    content: 'Nội dung chi tiết của khóa học...',
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {courseDetails.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {courseDetails.description}
        </Typography>
        <Typography variant="body1" paragraph>
          {courseDetails.content}
        </Typography>
        <Button variant="contained" onClick={() => navigate('/courses')}>
          Quay lại danh sách khóa học
        </Button>
      </Paper>
    </Box>
  );
};

export default CourseView; 