import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ScienceIcon from '@mui/icons-material/Science'; // Example icon for ASSIST
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'; // Example icon for CRAFFT

const assessments = [
  {
    title: 'Bài trắc nghiệm ASSIST',
    description: 'Đánh giá nguy cơ sử dụng ma túy và các chất gây nghiện ở người trưởng thành.',
    to: '/assessment/assist',
    icon: <ScienceIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
  },
  {
    title: 'Bài trắc nghiệm CRAFFT',
    description: 'Đánh giá nguy cơ sử dụng ma túy ở thanh thiếu niên và trẻ vị thành niên.',
    to: '/assessment/crafft',
    icon: <ChildFriendlyIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
  },
];

const AssessmentList = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Đánh giá nguy cơ
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Sử dụng các công cụ đánh giá được chuẩn hóa để hiểu rõ hơn về tình trạng của bạn và nhận được sự hỗ trợ phù hợp.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {assessments.map((assessment, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card
              sx={{
                p: 3,
                textAlign: 'center',
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3,
                '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Box sx={{ mb: 2 }}>
                {assessment.icon}
              </Box>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
                  {assessment.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {assessment.description}
                </Typography>
                <Button
                  component={RouterLink}
                  to={assessment.to}
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#4caf50', // Green for action
                    '&:hover': {
                      backgroundColor: '#388e3c',
                    },
                  }}
                >
                  Bắt đầu đánh giá
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AssessmentList; 