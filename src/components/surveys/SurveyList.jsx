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
  Fade,
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
  AccessTime as AccessTimeIcon,
  People as PeopleIcon,
  QuestionAnswer as QuestionAnswerIcon,
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
    questions: 8,
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
    questions: 12,
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
    questions: 15,
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
    questions: 10,
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
          Khảo sát & Nghiên cứu
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Tham gia các cuộc khảo sát để đóng góp ý kiến và giúp chúng tôi cải thiện các dịch vụ phòng chống ma túy hiệu quả hơn
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mb: 6, 
          borderRadius: 3, 
          background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
          border: '1px solid rgba(33, 150, 243, 0.1)'
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark">
              Tại sao tham gia khảo sát của chúng tôi?
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
              Ý kiến của bạn rất quan trọng trong việc xây dựng và cải thiện các chương trình phòng chống ma túy. 
              Mỗi phản hồi đều được ghi nhận và sử dụng để phát triển các giải pháp hiệu quả hơn.
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Chip icon={<PsychologyIcon />} label="Nâng cao nhận thức" color="primary" variant="outlined" />
              <Chip icon={<BarChartIcon />} label="Cải thiện dịch vụ" color="primary" variant="outlined" />
              <Chip icon={<SupportIcon />} label="Hỗ trợ cộng đồng" color="primary" variant="outlined" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: 180,
                height: 180,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #ff9800, #ffb74d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                boxShadow: '0 8px 32px rgba(255, 152, 0, 0.3)',
              }}
            >
              <Typography variant="h2" fontWeight={700} color="white">
                {surveys.length}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }} color="primary.dark">
              Khảo sát đang mở
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Surveys Grid */}
      <Grid container spacing={4}>
        {surveys.map((survey, index) => {
          const typeInfo = getTypeInfo(survey.type);
          return (
            <Grid item xs={12} sm={6} md={6} key={survey.id}>
              <Fade in={true} timeout={500 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={survey.image || '/images/surveys/default.jpg'}
                    alt={survey.title}
                    sx={{ 
                      objectFit: 'cover',
                      backgroundColor: '#f5f5f5',
                    }}
                    onError={(e) => {
                      e.target.src = '/images/surveys/default.jpg';
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                      {getStatusChip(survey.status)}
                      <Chip
                        icon={typeInfo.icon}
                        label={typeInfo.label}
                        size="small"
                        sx={{
                          backgroundColor: typeInfo.color,
                          fontWeight: 600,
                        }}
                      />
                    </Stack>

                    <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark" sx={{ lineHeight: 1.3 }}>
                      {survey.title}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {survey.description}
                    </Typography>

                    {/* Progress Bar */}
                    {survey.progress > 0 && (
                      <Box sx={{ mb: 3 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">Tiến độ</Typography>
                          <Typography variant="body2" fontWeight={600} color="primary.main">
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
                              borderRadius: 4,
                            }
                          }} 
                        />
                      </Box>
                    )}

                    <Stack spacing={2} sx={{ mb: 3 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <AccessTimeIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                        <Typography variant="body2" color="text.secondary">
                          {survey.duration}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <QuestionAnswerIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                        <Typography variant="body2" color="text.secondary">
                          {survey.questions} câu hỏi
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <PeopleIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                        <Typography variant="body2" color="text.secondary">
                          {survey.participants}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={survey.status === 'completed' ? <CheckCircleOutlineIcon /> : <PlayArrowIcon />}
                      onClick={() => navigate(`/surveys/${survey.id}`)}
                      sx={{
                        py: 1.2,
                        fontWeight: 600,
                        backgroundColor: survey.status === 'completed' ? '#4caf50' : '#2196f3',
                        '&:hover': {
                          backgroundColor: survey.status === 'completed' ? '#388e3c' : '#1976d2',
                        },
                      }}
                    >
                      {survey.status === 'completed' ? 'Xem kết quả' : 'Bắt đầu khảo sát'}
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          );
        })}
      </Grid>

      {/* Statistics Section */}
      <Paper elevation={2} sx={{ p: 4, mt: 6, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark" sx={{ textAlign: 'center', mb: 4 }}>
          Thống kê tham gia
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={700} color="primary.main">
                {surveys.reduce((total, survey) => total + parseInt(survey.participants.replace(/\D/g, '')), 0).toLocaleString()}
              </Typography>
              <Typography variant="body1" color="text.secondary">Tổng lượt tham gia</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={700} color="success.main">
                {surveys.filter(s => s.status === 'completed').length}
              </Typography>
              <Typography variant="body1" color="text.secondary">Khảo sát đã hoàn thành</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={700} color="warning.main">
                {surveys.filter(s => s.status === 'pending').length}
              </Typography>
              <Typography variant="body1" color="text.secondary">Khảo sát đang mở</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={700} color="info.main">
                {Math.round(surveys.reduce((total, survey) => total + survey.progress, 0) / surveys.length)}%
              </Typography>
              <Typography variant="body1" color="text.secondary">Tỷ lệ hoàn thành trung bình</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SurveyList;