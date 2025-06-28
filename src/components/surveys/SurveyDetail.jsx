import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  CircularProgress,
  Alert,
  Stack,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import {
  Poll as PollIcon,
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBeforeIcon,
  Psychology as PsychologyIcon,
  Assessment as AssessmentIcon,
  BarChart as BarChartIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const mockSurveys = [
  {
    id: '1',
    title: 'Khảo sát nhận thức về ma túy tổng hợp',
    description: 'Đánh giá kiến thức và hiểu biết của bạn về các loại ma túy tổng hợp và tác hại của chúng. Hãy trả lời thành thật để chúng tôi có cái nhìn chính xác nhất.',
    type: 'knowledge',
    estimatedTime: '10-15 phút',
    questions: [
      {
        id: '1.1',
        text: 'Bạn có biết ma túy tổng hợp là gì không?',
        type: 'radio',
        options: ['Có', 'Không', 'Không chắc chắn'],
      },
      {
        id: '1.2',
        text: 'Kể tên ít nhất 3 tác hại của ma túy tổng hợp đối với sức khỏe cá nhân.',
        type: 'text',
      },
      {
        id: '1.3',
        text: 'Theo bạn, phương pháp phòng chống ma túy hiệu quả nhất là gì?',
        type: 'radio',
        options: ['Giáo dục và tuyên truyền', 'Tăng cường kiểm soát và xử lý nghiêm', 'Hỗ trợ cai nghiện và tái hòa nhập', 'Tất cả các phương án trên'],
      },
      {
        id: '1.4',
        text: 'Bạn có sẵn lòng tham gia các hoạt động phòng chống ma túy tại địa phương không?',
        type: 'radio',
        options: ['Có', 'Không'],
      },
    ],
  },
  {
    id: '2',
    title: 'Khảo sát về thái độ phòng chống ma túy học đường',
    description: 'Thu thập ý kiến của học sinh và giáo viên về các biện pháp phòng chống ma túy trong môi trường học đường. Ý kiến của bạn sẽ giúp xây dựng môi trường học tập an toàn hơn.',
    type: 'attitude',
    estimatedTime: '15-20 phút',
    questions: [
      {
        id: '2.1',
        text: 'Bạn có thường xuyên được giáo dục về phòng chống ma túy tại trường không?',
        type: 'radio',
        options: ['Rất thường xuyên', 'Thường xuyên', 'Ít khi', 'Chưa bao giờ'],
      },
      {
        id: '2.2',
        text: 'Theo bạn, học sinh có dễ tiếp cận ma túy trong và ngoài trường học không?',
        type: 'radio',
        options: ['Rất dễ', 'Dễ', 'Khó', 'Rất khó'],
      },
      {
        id: '2.3',
        text: 'Bạn có cảm thấy tự tin khi từ chối lời mời sử dụng ma túy từ bạn bè không?',
        type: 'radio',
        options: ['Rất tự tin', 'Tự tin', 'Hơi tự tin', 'Không tự tin'],
      },
      {
        id: '2.4',
        text: 'Đề xuất của bạn để cải thiện công tác phòng chống ma túy trong trường học là gì?',
        type: 'text',
      },
    ],
  },
  {
    id: '3',
    title: 'Khảo sát đánh giá hiệu quả chương trình can thiệp cộng đồng',
    description: 'Đo lường mức độ thành công và tác động của các chương trình can thiệp phòng chống ma túy đối với cộng đồng. Phản hồi của bạn rất quan trọng để chúng tôi cải thiện dịch vụ.',
    type: 'evaluation',
    estimatedTime: '20-25 phút',
    questions: [
      {
        id: '3.1',
        text: 'Bạn có biết về các chương trình can thiệp phòng chống ma túy tại địa phương không?',
        type: 'radio',
        options: ['Có', 'Không'],
      },
      {
        id: '3.2',
        text: 'Bạn đánh giá mức độ hiệu quả của các chương trình này như thế nào?',
        type: 'radio',
        options: ['Rất hiệu quả', 'Hiệu quả', 'Bình thường', 'Không hiệu quả', 'Rất không hiệu quả'],
      },
      {
        id: '3.3',
        text: 'Bạn đã nhận được sự hỗ trợ nào từ các chương trình này chưa? Nếu có, vui lòng mô tả.',
        type: 'text',
      },
      {
        id: '3.4',
        text: 'Theo bạn, cần cải thiện điều gì để các chương trình này đạt hiệu quả cao hơn?',
        type: 'text',
      },
    ],
  },
];

const SurveyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const foundSurvey = mockSurveys.find((s) => s.id === id);
        if (foundSurvey) {
          setSurvey(foundSurvey);
          const initialAnswers = {};
          foundSurvey.questions.forEach(q => {
            initialAnswers[q.id] = '';
          });
          setAnswers(initialAnswers);
        } else {
          setError('Không tìm thấy khảo sát.');
        }
      } catch (err) {
        setError('Đã xảy ra lỗi khi tải chi tiết khảo sát.');
      } finally {
        setLoading(false);
      }
    };
    fetchSurvey();
  }, [id]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < survey.questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allQuestionsAnswered = survey.questions.every(q => {
      if (q.type === 'text') {
        return answers[q.id] && answers[q.id].trim() !== '';
      } else {
        return answers[q.id] !== '';
      }
    });

    if (!allQuestionsAnswered) {
      alert('Vui lòng trả lời tất cả các câu hỏi trước khi gửi khảo sát.');
      return;
    }

    console.log('Gửi khảo sát:', answers);
    setSubmitted(true);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'knowledge':
        return <PsychologyIcon sx={{ fontSize: 30, color: '#42a5f5' }} />;
      case 'attitude':
        return <AssessmentIcon sx={{ fontSize: 30, color: '#4caf50' }} />;
      case 'evaluation':
        return <BarChartIcon sx={{ fontSize: 30, color: '#ff9800' }} />;
      case 'support_needs':
        return <SupportIcon sx={{ fontSize: 30, color: '#9c27b0' }} />;
      default:
        return <PollIcon sx={{ fontSize: 30, color: '#2196f3' }} />;
    }
  };

  const progress = survey ? ((currentStep + 1) / survey.questions.length) * 100 : 0;

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress size={60} sx={{ color: 'primary.main' }} />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ boxShadow: 3, borderRadius: 2, mb: 3 }}>
          {error}
        </Alert>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/surveys')}
            sx={{
              px: 4,
              py: 1.2,
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khảo sát
          </Button>
        </Box>
      </Container>
    );
  }

  if (submitted) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={3} sx={{ p: 6, borderRadius: 3, textAlign: 'center' }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 80, color: '#4caf50', mb: 3 }} />
          <Typography variant="h4" gutterBottom fontWeight={700} color="primary.dark">
            Cảm ơn bạn!
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Khảo sát của bạn đã được gửi thành công. Cảm ơn bạn đã dành thời gian đóng góp ý kiến quý báu.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/surveys')}
              sx={{
                borderColor: '#42a5f5',
                color: '#42a5f5',
                '&:hover': {
                  borderColor: '#1976d2',
                  backgroundColor: '#e3f2fd',
                },
              }}
            >
              Quay lại danh sách
            </Button>
            <Button
              variant="contained"
              startIcon={<AssessmentIcon />}
              onClick={() => navigate('/assessments')}
              sx={{
                backgroundColor: '#4caf50',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
              }}
            >
              Tham gia đánh giá
            </Button>
          </Stack>
        </Paper>
      </Container>
    );
  }

  if (!survey) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2, mb: 3 }}>
          Không tìm thấy khảo sát này.
        </Alert>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/surveys')}
            sx={{
              px: 4,
              py: 1.2,
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khảo sát
          </Button>
        </Box>
      </Container>
    );
  }

  const currentQuestion = survey.questions[currentStep];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Back Button */}
      <Box sx={{ mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/surveys')}
          sx={{ color: '#666', '&:hover': { backgroundColor: '#f5f5f5' } }}
        >
          Quay lại danh sách khảo sát
        </Button>
      </Box>

      {/* Survey Header */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
          {getTypeIcon(survey.type)}
          <Box>
            <Typography variant="h4" component="h1" fontWeight={700} color="primary.dark">
              {survey.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Thời gian ước tính: {survey.estimatedTime}
            </Typography>
          </Box>
        </Stack>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
          {survey.description}
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Tiến độ khảo sát
            </Typography>
            <Typography variant="body2" fontWeight={600} color="primary.main">
              {currentStep + 1}/{survey.questions.length} ({Math.round(progress)}%)
          </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#2196f3',
                borderRadius: 4,
              },
            }}
          />
        </Box>
      </Paper>

      {/* Question Card */}
      <Card elevation={3} sx={{ borderRadius: 3, mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark">
            Câu hỏi {currentStep + 1}/{survey.questions.length}
          </Typography>
          <Typography variant="h5" gutterBottom fontWeight={500} sx={{ mb: 3 }}>
            {currentQuestion.text}
          </Typography>

          {currentQuestion.type === 'radio' ? (
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                  sx={{
                    mb: 1,
                    '& .MuiFormControlLabel-label': {
                      fontSize: '1rem',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          ) : (
            <TextField
              fullWidth
              multiline
              rows={4}
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
              placeholder="Nhập câu trả lời của bạn..."
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            startIcon={<NavigateBeforeIcon />}
            onClick={handleBack}
            disabled={currentStep === 0}
            sx={{
              borderColor: '#42a5f5',
              color: '#42a5f5',
              '&:hover': {
                borderColor: '#1976d2',
                backgroundColor: '#e3f2fd',
              },
              '&:disabled': {
                borderColor: '#e0e0e0',
                color: '#9e9e9e',
              },
            }}
          >
            Câu trước
          </Button>

          {currentStep === survey.questions.length - 1 ? (
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              onClick={handleSubmit}
              sx={{
                backgroundColor: '#4caf50',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
                px: 4,
                py: 1.2,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Gửi khảo sát
            </Button>
          ) : (
            <Button
              variant="contained"
              endIcon={<NavigateNextIcon />}
              onClick={handleNext}
              sx={{
                backgroundColor: '#2196f3',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
                px: 4,
                py: 1.2,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Câu tiếp theo
            </Button>
          )}
        </Stack>
      </Paper>
    </Container>
  );
};

export default SurveyDetail; 