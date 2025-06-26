import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  CardMedia,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {
  Assessment as AssessmentIcon,
  Poll as PollIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  HourglassEmpty as HourglassEmptyIcon,
  DoneAll as DoneAllIcon,
} from '@mui/icons-material';

const surveys = [
  {
    id: 1,
    title: 'Khảo sát nhận thức về ma túy tổng hợp',
    description: 'Đánh giá kiến thức và hiểu biết của bạn về các loại ma túy tổng hợp và tác hại của chúng.',
    status: 'pending',
    type: 'knowledge',
    image: '/images/surveys/survey1.jpg',
  },
  {
    id: 2,
    title: 'Khảo sát về thái độ phòng chống ma túy học đường',
    description: 'Thu thập ý kiến của học sinh và giáo viên về các biện pháp phòng chống ma túy trong môi trường học đường.',
    status: 'completed',
    type: 'attitude',
    image: '/images/surveys/survey2.jpg',
  },
  {
    id: 3,
    title: 'Khảo sát đánh giá hiệu quả chương trình can thiệp cộng đồng',
    description: 'Đo lường mức độ thành công và tác động của các chương trình can thiệp phòng chống ma túy đối với cộng đồng.',
    status: 'pending',
    type: 'evaluation',
    image: '/images/surveys/survey3.jpg',
  },
  {
    id: 4,
    title: 'Khảo sát nhu cầu hỗ trợ cho người thân của người nghiện',
    description: 'Tìm hiểu các hình thức hỗ trợ cần thiết cho gia đình và người thân của những người đang cai nghiện ma túy.',
    status: 'pending',
    type: 'support_needs',
    image: '/images/surveys/survey4.jpg',
  },
];

const SurveyList = () => {
  const navigate = useNavigate();

  const getStatusChip = (status) => {
    switch (status) {
      case 'pending':
        return <Chip label="Chưa hoàn thành" color="warning" size="small" icon={<HourglassEmptyIcon style={{ fontSize: 16 }} />} />;
      case 'completed':
        return <Chip label="Đã hoàn thành" color="success" size="small" icon={<CheckCircleOutlineIcon style={{ fontSize: 16 }} />} />;
      default:
        return <Chip label={status} size="small" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'knowledge':
        return <AssessmentIcon style={{ fontSize: 18 }} />;
      case 'attitude':
        return <PollIcon style={{ fontSize: 18 }} />;
      case 'evaluation':
        return <DoneAllIcon style={{ fontSize: 18 }} />;
      case 'support_needs':
        return <PollIcon style={{ fontSize: 18 }} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <PollIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Các cuộc khảo sát
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Tham gia các cuộc khảo sát của chúng tôi để đóng góp ý kiến, đánh giá và giúp chúng tôi cải thiện các dịch vụ phòng chống ma túy.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {surveys.map((survey) => (
          <Grid item xs={12} sm={6} md={4} key={survey.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 6,
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 12,
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={survey.image}
                alt={survey.title}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                  {getStatusChip(survey.status)}
                  <Chip
                    label={survey.type === 'knowledge' ? 'Kiến thức' : survey.type === 'attitude' ? 'Thái độ' : survey.type === 'evaluation' ? 'Đánh giá' : 'Nhu cầu'}
                    color="secondary"
                    size="small"
                    icon={getTypeIcon(survey.type)}
                    sx={{ fontWeight: 'bold' }}
                  />
                </Stack>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={700} color="primary.dark">
                  {survey.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {survey.description}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate(`/surveys/${survey.id}`)}
                    disabled={survey.status === 'completed'}
                    sx={{
                      bgcolor: survey.status === 'completed' ? '#bdbdbd' : '#42a5f5',
                      '&:hover': {
                        bgcolor: survey.status === 'completed' ? '#9e9e9e' : '#1976d2',
                      },
                      textTransform: 'none',
                      fontWeight: 'bold',
                      width: '100%',
                    }}
                  >
                    {survey.status === 'completed' ? 'Đã hoàn thành' : 'Bắt đầu khảo sát'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SurveyList; 