import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
  Paper,
  Chip,
  Stack,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  LinearProgress,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
} from '@mui/material';
import {
  Assessment as AssessmentIcon,
  Science as ScienceIcon,
  ChildFriendly as ChildFriendlyIcon,
  Psychology as PsychologyIcon,
  Timeline as TimelineIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Star as StarIcon,
  Group as GroupIcon,
  Security as SecurityIcon,
  ExpandMore as ExpandMoreIcon,
  PlayArrow as PlayArrowIcon,
  History as HistoryIcon,
  TrendingUp as TrendingUpIcon,
  HealthAndSafety as HealthIcon,
  Home as FamilyIcon,
  School as SchoolIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AssessmentMain = () => {
  const navigate = useNavigate();
  const [openInfo, setOpenInfo] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  // Enhanced assessment data
  const assessments = [
    {
      id: 'assist',
      title: 'Bài đánh giá ASSIST',
      subtitle: 'Alcohol, Smoking and Substance Involvement Screening Test',
      description: 'Công cụ sàng lọc chuẩn hóa của WHO để đánh giá mức độ nguy cơ sử dụng các chất gây nghiện.',
      detailedDescription: 'ASSIST là công cụ được Tổ chức Y tế Thế giới (WHO) phát triển để sàng lọc và đánh giá mức độ nguy cơ liên quan đến việc sử dụng rượu, thuốc lá và các chất gây nghiện khác. Bài test này giúp xác định mức độ rủi ro và đưa ra khuyến nghị can thiệp phù hợp.',
      icon: <ScienceIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      route: '/assessment/assist',
      duration: '10-15 phút',
      difficulty: 'Trung bình',
      targetAge: '18+ tuổi',
      questions: 8,
      color: 'primary',
      features: [
        'Đánh giá 10 loại chất khác nhau',
        'Tính điểm nguy cơ tự động',
        'Khuyến nghị can thiệp cụ thể',
        'Báo cáo chi tiết'
      ],
      benefits: [
        'Nhận biết sớm nguy cơ nghiện',
        'Lời khuyên chuyên môn',
        'Kế hoạch can thiệp cá nhân hóa'
      ]
    },
    {
      id: 'crafft',
      title: 'Bài đánh giá CRAFFT',
      subtitle: 'Car, Relax, Alone, Forget, Friends, Trouble',
      description: 'Công cụ sàng lọc chuyên biệt cho thanh thiếu niên về việc sử dụng rượu và ma túy.',
      detailedDescription: 'CRAFFT là công cụ sàng lọc được thiết kế riêng cho thanh thiếu niên từ 12-21 tuổi. Bài test này đánh giá hành vi sử dụng chất và các hậu quả liên quan, giúp phát hiện sớm các vấn đề về sử dụng chất ở lứa tuổi này.',
      icon: <ChildFriendlyIcon sx={{ fontSize: 60, color: 'success.main' }} />,
      route: '/assessment/crafft',
      duration: '5-10 phút',
      difficulty: 'Dễ',
      targetAge: '12-21 tuổi',
      questions: 9,
      color: 'success',
      features: [
        'Thiết kế phù hợp với thanh thiếu niên',
        'Câu hỏi dễ hiểu',
        'Đánh giá tác động xã hội',
        'Kết quả tức thời'
      ],
      benefits: [
        'Phát hiện sớm vấn đề',
        'Tư vấn phù hợp lứa tuổi',
        'Hỗ trợ gia đình'
      ]
    },
    {
      id: 'mental-health',
      title: 'Đánh giá Sức khỏe Tâm thần',
      subtitle: 'Mental Health Screening',
      description: 'Đánh giá tổng quát về tình trạng sức khỏe tâm thần, stress và các yếu tố nguy cơ.',
      detailedDescription: 'Bài đánh giá này tập trung vào việc sàng lọc các vấn đề sức khỏe tâm thần phổ biến như trầm cảm, lo âu, stress, và các yếu tố có thể dẫn đến việc sử dụng chất gây nghiện như một cách đối phó.',
      icon: <PsychologyIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      route: '/assessment/mental-health',
      duration: '15-20 phút',
      difficulty: 'Trung bình',
      targetAge: '16+ tuổi',
      questions: 25,
      color: 'secondary',
      features: [
        'Đánh giá đa chiều',
        'Phân tích yếu tố nguy cơ',
        'Gợi ý can thiệp',
        'Theo dõi tiến triển'
      ],
      benefits: [
        'Hiểu rõ tình trạng tâm lý',
        'Phòng ngừa sử dụng chất',
        'Cải thiện chất lượng cuộc sống'
      ]
    },
    {
      id: 'family-assessment',
      title: 'Đánh giá Gia đình',
      subtitle: 'Family Risk Assessment',
      description: 'Đánh giá các yếu tố nguy cơ và bảo vệ trong môi trường gia đình.',
      detailedDescription: 'Công cụ này đánh giá động lực gia đình, mối quan hệ, giao tiếp và các yếu tố có thể ảnh hưởng đến nguy cơ sử dụng chất của các thành viên trong gia đình.',
      icon: <FamilyIcon sx={{ fontSize: 60, color: 'warning.main' }} />,
      route: '/assessment/family',
      duration: '20-25 phút',
      difficulty: 'Cao',
      targetAge: 'Phụ huynh',
      questions: 30,
      color: 'warning',
      features: [
        'Đánh giá môi trường gia đình',
        'Phân tích mối quan hệ',
        'Xác định yếu tố bảo vệ',
        'Kế hoạch cải thiện'
      ],
      benefits: [
        'Tăng cường liên kết gia đình',
        'Tạo môi trường an toàn',
        'Phòng ngừa hiệu quả'
      ]
    }
  ];

  // Assessment statistics
  const stats = [
    { label: 'Người đã tham gia', value: '15,240', icon: <GroupIcon />, color: 'primary' },
    { label: 'Bài đánh giá', value: '4', icon: <AssessmentIcon />, color: 'success' },
    { label: 'Độ chính xác', value: '94%', icon: <StarIcon />, color: 'warning' },
    { label: 'Thời gian trung bình', value: '12 phút', icon: <ScheduleIcon />, color: 'info' }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Các bài đánh giá có chính xác không?',
      answer: 'Tất cả các công cụ đánh giá đều được chuẩn hóa quốc tế và có độ tin cậy cao. Tuy nhiên, kết quả chỉ mang tính tham khảo và không thay thế cho chẩn đoán y khoa chuyên nghiệp.'
    },
    {
      question: 'Thông tin cá nhân có được bảo mật không?',
      answer: 'Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân. Tất cả dữ liệu được mã hóa và chỉ bạn mới có quyền truy cập kết quả của mình.'
    },
    {
      question: 'Tôi có thể làm lại bài đánh giá không?',
      answer: 'Có, bạn có thể làm lại bài đánh giá sau mỗi 30 ngày để theo dõi sự thay đổi. Hệ thống sẽ lưu lịch sử để bạn so sánh kết quả.'
    },
    {
      question: 'Sau khi có kết quả, tôi nên làm gì?',
      answer: 'Dựa vào kết quả, hệ thống sẽ đưa ra khuyến nghị cụ thể. Nếu có nguy cơ cao, chúng tôi khuyến khích bạn tìm kiếm sự hỗ trợ từ chuyên gia.'
    }
  ];

  const handleAssessmentInfo = (assessment) => {
    setSelectedAssessment(assessment);
    setOpenInfo(true);
  };

  const handleStartAssessment = (route) => {
    navigate(route);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <AssessmentIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Đánh Giá Nguy Cơ
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
          Sử dụng các công cụ đánh giá được chuẩn hóa quốc tế để hiểu rõ tình trạng của bạn và nhận được hỗ trợ phù hợp
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Chip icon={<SecurityIcon />} label="Bảo mật tuyệt đối" color="success" />
          <Chip icon={<StarIcon />} label="Chuẩn hóa quốc tế" color="primary" />
          <Chip icon={<CheckCircleIcon />} label="Miễn phí 100%" color="secondary" />
        </Stack>
      </Box>

      {/* Statistics Section */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                textAlign: 'center',
                borderRadius: 3,
                background: `linear-gradient(135deg, ${stat.color === 'primary' ? '#1976d2' : 
                  stat.color === 'success' ? '#2e7d32' :
                  stat.color === 'warning' ? '#ed6c02' : '#0288d1'} 0%, ${
                  stat.color === 'primary' ? '#42a5f5' : 
                  stat.color === 'success' ? '#66bb6a' :
                  stat.color === 'warning' ? '#ffb74d' : '#4fc3f7'} 100%)`,
                color: 'white'
              }}
            >
              <Box sx={{ mb: 1 }}>
                {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
              </Box>
              <Typography variant="h4" fontWeight={700}>
                {stat.value}
              </Typography>
              <Typography variant="body2">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Assessment Cards */}
      <Typography variant="h4" gutterBottom fontWeight={600} color="primary.dark" sx={{ mb: 4 }}>
        Các Bài Đánh Giá
      </Typography>
      
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {assessments.map((assessment) => (
          <Grid item xs={12} md={6} key={assessment.id}>
            <Card
              elevation={3}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
            >
              {/* Card Header */}
              <Box 
                sx={{ 
                  background: `linear-gradient(135deg, ${
                    assessment.color === 'primary' ? '#1976d2, #42a5f5' :
                    assessment.color === 'success' ? '#2e7d32, #66bb6a' :
                    assessment.color === 'secondary' ? '#7b1fa2, #ba68c8' :
                    '#ed6c02, #ffb74d'
                  })`,
                  color: 'white',
                  p: 3,
                  textAlign: 'center'
                }}
              >
                {assessment.icon}
                <Typography variant="h5" fontWeight={600} sx={{ mt: 1 }}>
                  {assessment.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {assessment.subtitle}
                </Typography>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {assessment.description}
                </Typography>

                {/* Assessment Info */}
                <Stack spacing={2} sx={{ mb: 3 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Chip 
                      icon={<ScheduleIcon />} 
                      label={assessment.duration} 
                      size="small"
                      variant="outlined"
                    />
                    <Chip 
                      label={assessment.targetAge} 
                      size="small"
                      color={assessment.color}
                    />
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
                      <strong>{assessment.questions}</strong> câu hỏi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Độ khó: <strong>{assessment.difficulty}</strong>
                    </Typography>
                  </Stack>
                </Stack>

                {/* Action Buttons */}
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    color={assessment.color}
                    startIcon={<PlayArrowIcon />}
                    onClick={() => handleStartAssessment(assessment.route)}
                    sx={{ flexGrow: 1 }}
                  >
                    Bắt đầu
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<InfoIcon />}
                    onClick={() => handleAssessmentInfo(assessment)}
                  >
                    Chi tiết
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom fontWeight={600} color="primary.dark">
          Hành Động Nhanh
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card 
              elevation={1}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                cursor: 'pointer',
                '&:hover': { bgcolor: 'action.hover' }
              }}
              onClick={() => navigate('/assessment/history')}
            >
              <HistoryIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600}>
                Lịch sử đánh giá
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Xem lại các bài đánh giá đã thực hiện
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
              elevation={1}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                cursor: 'pointer',
                '&:hover': { bgcolor: 'action.hover' }
              }}
              onClick={() => navigate('/counseling-main')}
            >
              <PsychologyIcon sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600}>
                Tư vấn chuyên gia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nhận tư vấn từ chuyên gia tâm lý
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
              elevation={1}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                cursor: 'pointer',
                '&:hover': { bgcolor: 'action.hover' }
              }}
              onClick={() => navigate('/courses')}
            >
              <SchoolIcon sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600}>
                Khóa học phòng ngừa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tham gia các khóa học giáo dục
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* FAQ Section */}
      <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom fontWeight={600} color="primary.dark" sx={{ mb: 3 }}>
          Câu Hỏi Thường Gặp
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} elevation={1}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight={500}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      {/* Assessment Detail Dialog */}
      <Dialog 
        open={openInfo} 
        onClose={() => setOpenInfo(false)} 
        maxWidth="md" 
        fullWidth
      >
        {selectedAssessment && (
          <>
            <DialogTitle>
              <Stack direction="row" alignItems="center" spacing={2}>
                {selectedAssessment.icon}
                <Box>
                  <Typography variant="h5" fontWeight={600}>
                    {selectedAssessment.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedAssessment.subtitle}
                  </Typography>
                </Box>
              </Stack>
            </DialogTitle>
            <DialogContent>
              <Typography paragraph sx={{ lineHeight: 1.7 }}>
                {selectedAssessment.detailedDescription}
              </Typography>
              
              <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
                Tính năng chính:
              </Typography>
              <List dense>
                {selectedAssessment.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 2 }}>
                Lợi ích:
              </Typography>
              <List dense>
                {selectedAssessment.benefits.map((benefit, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <StarIcon color="warning" />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={() => setOpenInfo(false)}>
                Đóng
              </Button>
              <Button 
                variant="contained" 
                color={selectedAssessment.color}
                startIcon={<PlayArrowIcon />}
                onClick={() => {
                  setOpenInfo(false);
                  handleStartAssessment(selectedAssessment.route);
                }}
              >
                Bắt đầu đánh giá
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default AssessmentMain; 