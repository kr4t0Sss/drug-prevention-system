import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  CardMedia,
  LinearProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Assessment as AssessmentIcon,
  Poll as PollIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  HourglassEmpty as HourglassEmptyIcon,
  PlayArrow as PlayArrowIcon,
  BarChart as BarChartIcon,
  Psychology as PsychologyIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const surveys = [
  {
    id: 1,
    title: 'Khảo sát nhận thức về ma túy tổng hợp',
    description: 'Đánh giá kiến thức và hiểu biết của bạn về các loại ma túy tổng hợp và tác hại của chúng.',
    status: 'pending',
    type: 'knowledge',
    image: '/images/surveys/survey1.jpg',
    duration: '10-15 phút',
    participants: '1,234 người tham gia',
    progress: 0,
  },
  {
    id: 2,
    title: 'Khảo sát về thái độ phòng chống ma túy học đường',
    description: 'Thu thập ý kiến của học sinh và giáo viên về các biện pháp phòng chống ma túy trong môi trường học đường.',
    status: 'completed',
    type: 'attitude',
    image: '/images/surveys/survey2.jpg',
    duration: '15-20 phút',
    participants: '892 người tham gia',
    progress: 100,
  },
  {
    id: 3,
    title: 'Khảo sát đánh giá hiệu quả chương trình can thiệp cộng đồng',
    description: 'Đo lường mức độ thành công và tác động của các chương trình can thiệp phòng chống ma túy đối với cộng đồng.',
    status: 'pending',
    type: 'evaluation',
    image: '/images/surveys/survey3.jpg',
    duration: '20-25 phút',
    participants: '567 người tham gia',
    progress: 0,
  },
  {
    id: 4,
    title: 'Khảo sát nhu cầu hỗ trợ cho người thân của người nghiện',
    description: 'Tìm hiểu các hình thức hỗ trợ cần thiết cho gia đình và người thân của những người đang cai nghiện ma túy.',
    status: 'pending',
    type: 'support_needs',
    image: '/images/surveys/survey4.jpg',
    duration: '12-18 phút',
    participants: '345 người tham gia',
    progress: 0,
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

  const getTypeInfo = (type) => {
    switch (type) {
      case 'knowledge':
        return {
          icon: <PsychologyIcon style={{ fontSize: 20, color: '#42a5f5' }} />,
          label: 'Kiến thức',
          color: '#e3f2fd',
        };
      case 'attitude':
        return {
          icon: <AssessmentIcon style={{ fontSize: 20, color: '#4caf50' }} />,
          label: 'Thái độ',
          color: '#e8f5e9',
        };
      case 'evaluation':
        return {
          icon: <BarChartIcon style={{ fontSize: 20, color: '#ff9800' }} />,
          label: 'Đánh giá',
          color: '#fff3e0',
        };
      case 'support_needs':
        return {
          icon: <SupportIcon style={{ fontSize: 20, color: '#9c27b0' }} />,
          label: 'Nhu cầu hỗ trợ',
          color: '#f3e5f5',
        };
      default:
        return {
          icon: <PollIcon style={{ fontSize: 20 }} />,
          label: 'Khảo sát',
          color: '#f5f5f5',
        };
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <PollIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Các cuộc khảo sát
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Tham gia các cuộc khảo sát của chúng tôi để đóng góp ý kiến, đánh giá và giúp chúng tôi cải thiện các dịch vụ phòng chống ma túy hiệu quả hơn.
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 3, background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)' }}>
        <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark">
          Tại sao tham gia khảo sát của chúng tôi?
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <PsychologyIcon sx={{ fontSize: 50, color: '#4caf50', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>Nâng cao nhận thức</Typography>
              <Typography color="text.secondary">
                Giúp chúng tôi hiểu rõ hơn về nhận thức cộng đồng về vấn đề ma túy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <BarChartIcon sx={{ fontSize: 50, color: '#ff9800', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>Cải thiện dịch vụ</Typography>
              <Typography color="text.secondary">
                Ý kiến của bạn giúp chúng tôi cải thiện chất lượng các chương trình
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <SupportIcon sx={{ fontSize: 50, color: '#2196f3', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>Hỗ trợ cộng đồng</Typography>
              <Typography color="text.secondary">
                Đóng góp vào việc xây dựng cộng đồng an toàn và lành mạnh
      </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Surveys Grid */}
      <Grid container spacing={4}>
        {surveys.map((survey) => {
          const typeInfo = getTypeInfo(survey.type);
          return (
            <Grid item xs={12} sm={6} md={6} key={survey.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={survey.image || '/images/surveys/default.jpg'}
                  alt={survey.title}
                  sx={{ 
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                      {typeInfo.icon}
                      <Chip
                        label={typeInfo.label}
                        size="small"
                        sx={{ 
                          backgroundColor: typeInfo.color,
                          color: '#1976d2',
                          fontWeight: 600,
                        }}
                      />
                      {getStatusChip(survey.status)}
                    </Stack>
                    <Typography variant="h6" component="h2" gutterBottom fontWeight={700} color="text.primary">
                      {survey.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {survey.description}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Stack spacing={1}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          Thời gian: {survey.duration}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {survey.participants}
                        </Typography>
                      </Stack>
                      {survey.status === 'completed' && (
                        <Box>
                          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              Tiến độ hoàn thành
                            </Typography>
                            <Typography variant="body2" fontWeight={600} color="success.main">
                              {survey.progress}%
                            </Typography>
                          </Stack>
                          <LinearProgress
                            variant="determinate"
                            value={survey.progress}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: '#e0e0e0',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: '#4caf50',
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>
                      )}
                    </Stack>
                  </Box>

                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      startIcon={survey.status === 'completed' ? <CheckCircleOutlineIcon /> : <PlayArrowIcon />}
                      onClick={() => navigate(`/surveys/${survey.id}`)}
                      disabled={survey.status === 'completed'}
                      sx={{
                        backgroundColor: survey.status === 'completed' ? '#bdbdbd' : '#2196f3',
                        '&:hover': {
                          backgroundColor: survey.status === 'completed' ? '#9e9e9e' : '#1976d2',
                        },
                        py: 1.2,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        '&:disabled': {
                          color: '#fff',
                        },
                      }}
                    >
                      {survey.status === 'completed' ? 'Đã hoàn thành' : 'Bắt đầu khảo sát'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Call to Action */}
      <Paper elevation={2} sx={{ p: 4, mt: 6, borderRadius: 3, textAlign: 'center', background: 'linear-gradient(135deg, #f3e5f5 0%, #e8f5e9 100%)' }}>
        <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark">
          Cảm ơn sự đóng góp của bạn!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Mọi ý kiến đóng góp của bạn đều rất quý giá và giúp chúng tôi cải thiện các dịch vụ phòng chống ma túy.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AssessmentIcon />}
          onClick={() => navigate('/assessments')}
          sx={{
            borderColor: '#4caf50',
            color: '#4caf50',
            '&:hover': {
              borderColor: '#388e3c',
              backgroundColor: '#e8f5e9',
            },
            px: 4,
            py: 1.2,
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          Tham gia đánh giá nguy cơ
        </Button>
      </Paper>
    </Container>
  );
};

export default SurveyList; 