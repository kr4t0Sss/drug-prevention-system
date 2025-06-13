import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CounselorList = () => {
  // Dữ liệu giả lập - thay thế bằng lệnh gọi API thực tế
  const counselors = [
    { id: 1, name: 'Tiến sĩ Nguyễn Thị Lan', specialization: 'Lạm dụng chất gây nghiện' },
    { id: 2, name: 'Tiến sĩ Trần Văn Hùng', specialization: 'Tư vấn gia đình' },
    { id: 3, name: 'Tiến sĩ Lê Thị Mai', specialization: 'Liệu pháp nhóm' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Các tư vấn viên của chúng tôi
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
                  Xem hồ sơ
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