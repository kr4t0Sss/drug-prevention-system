import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Alert,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import {
  Psychology as PsychologyIcon,
  NavigateNext as NextIcon,
  NavigateBefore as BackIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MentalHealthAssessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  // Mental health assessment questions
  const questionSets = [
    {
      title: 'Tâm trạng và cảm xúc',
      questions: [
        {
          id: 'mood_1',
          question: 'Trong 2 tuần qua, bạn có cảm thấy buồn, chán nản hoặc tuyệt vọng không?',
          options: [
            { value: 0, label: 'Không bao giờ' },
            { value: 1, label: 'Vài ngày' },
            { value: 2, label: 'Hơn một nửa số ngày' },
            { value: 3, label: 'Gần như mỗi ngày' }
          ]
        },
        {
          id: 'mood_2',
          question: 'Bạn có mất hứng thú hoặc không còn thấy vui vẻ với các hoạt động không?',
          options: [
            { value: 0, label: 'Không bao giờ' },
            { value: 1, label: 'Vài ngày' },
            { value: 2, label: 'Hơn một nửa số ngày' },
            { value: 3, label: 'Gần như mỗi ngày' }
          ]
        },
        {
          id: 'mood_3',
          question: 'Bạn có gặp khó khăn trong việc ngủ hoặc ngủ quá nhiều không?',
          options: [
            { value: 0, label: 'Không có vấn đề' },
            { value: 1, label: 'Thỉnh thoảng' },
            { value: 2, label: 'Thường xuyên' },
            { value: 3, label: 'Rất thường xuyên' }
          ]
        }
      ]
    },
    {
      title: 'Lo âu và căng thẳng',
      questions: [
        {
          id: 'anxiety_1',
          question: 'Bạn có cảm thấy lo lắng, bồn chồn hoặc căng thẳng không?',
          options: [
            { value: 0, label: 'Không bao giờ' },
            { value: 1, label: 'Vài ngày' },
            { value: 2, label: 'Hơn một nửa số ngày' },
            { value: 3, label: 'Gần như mỗi ngày' }
          ]
        },
        {
          id: 'anxiety_2',
          question: 'Bạn có khó kiểm soát lo lắng hoặc không thể ngừng lo lắng không?',
          options: [
            { value: 0, label: 'Không bao giờ' },
            { value: 1, label: 'Vài ngày' },
            { value: 2, label: 'Hơn một nửa số ngày' },
            { value: 3, label: 'Gần như mỗi ngày' }
          ]
        },
        {
          id: 'anxiety_3',
          question: 'Bạn có lo lắng quá mức về nhiều thứ khác nhau không?',
          options: [
            { value: 0, label: 'Không bao giờ' },
            { value: 1, label: 'Vài ngày' },
            { value: 2, label: 'Hơn một nửa số ngày' },
            { value: 3, label: 'Gần như mỗi ngày' }
          ]
        }
      ]
    },
    {
      title: 'Stress và áp lực',
      questions: [
        {
          id: 'stress_1',
          question: 'Bạn cảm thấy áp lực từ công việc/học tập như thế nào?',
          options: [
            { value: 0, label: 'Không có áp lực' },
            { value: 1, label: 'Áp lực nhẹ' },
            { value: 2, label: 'Áp lực vừa phải' },
            { value: 3, label: 'Áp lực nặng' }
          ]
        },
        {
          id: 'stress_2',
          question: 'Bạn có cảm thấy khó tập trung vào công việc không?',
          options: [
            { value: 0, label: 'Không bao giờ' },
            { value: 1, label: 'Thỉnh thoảng' },
            { value: 2, label: 'Thường xuyên' },
            { value: 3, label: 'Rất thường xuyên' }
          ]
        },
        {
          id: 'stress_3',
          question: 'Bạn có sử dụng chất gì để giảm stress không?',
          options: [
            { value: 0, label: 'Không bao giờ' },
            { value: 1, label: 'Rượu/bia thỉnh thoảng' },
            { value: 2, label: 'Thuốc lá hoặc rượu thường xuyên' },
            { value: 3, label: 'Các chất khác' }
          ]
        }
      ]
    }
  ];

  const steps = questionSets.map(set => set.title);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentStep < questionSets.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questionSets.reduce((total, set) => total + set.questions.length * 3, 0);
    const percentage = (totalScore / maxScore) * 100;

    let level, color, recommendations;

    if (percentage <= 25) {
      level = 'Tốt';
      color = 'success';
      recommendations = [
        'Tình trạng sức khỏe tâm thần của bạn khá tốt',
        'Tiếp tục duy trì lối sống lành mạnh',
        'Tham gia các hoạt động thể thao và giải trí',
        'Duy trì mối quan hệ xã hội tích cực'
      ];
    } else if (percentage <= 50) {
      level = 'Cần chú ý';
      color = 'warning';
      recommendations = [
        'Có một số dấu hiệu cần lưu ý về sức khỏe tâm thần',
        'Nên tìm hiểu các kỹ thuật quản lý stress',
        'Tham gia các khóa học về sức khỏe tâm thần',
        'Cân nhắc tư vấn với chuyên gia nếu cần'
      ];
    } else {
      level = 'Cần hỗ trợ';
      color = 'error';
      recommendations = [
        'Tình trạng sức khỏe tâm thần cần được chú ý nghiêm túc',
        'Nên tìm kiếm sự hỗ trợ từ chuyên gia tâm lý',
        'Tránh sử dụng rượu bia và các chất gây nghiện',
        'Liên hệ đường dây nóng: 1900 1234 nếu cần hỗ trợ khẩn cấp'
      ];
    }

    setResult({
      score: totalScore,
      maxScore,
      percentage: Math.round(percentage),
      level,
      color,
      recommendations
    });
    setShowResult(true);
  };

  const currentQuestionSet = questionSets[currentStep];
  const progress = ((currentStep + 1) / questionSets.length) * 100;
  const isStepComplete = currentQuestionSet?.questions.every(q => answers[q.id] !== undefined);

  if (showResult && result) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CheckIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
            <Typography variant="h3" fontWeight={700} color="primary.dark">
              Kết Quả Đánh Giá
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Đánh giá Sức khỏe Tâm thần
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h4" fontWeight={700} color={`${result.color}.main`}>
                    {result.score}/{result.maxScore}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Điểm số tổng
                  </Typography>
                  <Chip 
                    label={result.level} 
                    color={result.color} 
                    sx={{ mt: 2, fontSize: '1rem', px: 2 }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={2}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h4" fontWeight={700} color={`${result.color}.main`}>
                    {result.percentage}%
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Mức độ nguy cơ
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={result.percentage} 
                    color={result.color}
                    sx={{ mt: 2, height: 8, borderRadius: 4 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Khuyến nghị:
            </Typography>
            <Stack spacing={2}>
              {result.recommendations.map((rec, index) => (
                <Alert 
                  key={index} 
                  severity={result.color} 
                  sx={{ borderRadius: 2 }}
                >
                  {rec}
                </Alert>
              ))}
            </Stack>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/assessment-main')}
            >
              Về trang đánh giá
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/counseling-main')}
              color={result.color === 'error' ? 'error' : 'primary'}
            >
              {result.color === 'error' ? 'Tư vấn ngay' : 'Tìm hiểu thêm'}
            </Button>
          </Stack>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        {/* Header */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, #7b1fa2, #ba68c8)',
          color: 'white',
          p: 4,
          textAlign: 'center'
        }}>
          <PsychologyIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" fontWeight={700}>
            Đánh Giá Sức Khỏe Tâm Thần
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
            Đánh giá tình trạng tâm lý và các yếu tố nguy cơ
          </Typography>
        </Box>

        {/* Progress */}
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Tiến độ: {currentStep + 1}/{questionSets.length}
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ height: 8, borderRadius: 4 }}
            />
          </Box>

          <Stepper activeStep={currentStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Questions */}
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom color="primary.dark">
            {currentQuestionSet.title}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Stack spacing={3}>
            {currentQuestionSet.questions.map((question, index) => (
              <Card key={question.id} elevation={1}>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight={500}>
                    {index + 1}. {question.question}
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    >
                      {question.options.map((option) => (
                        <FormControlLabel
                          key={option.value}
                          value={option.value}
                          control={<Radio />}
                          label={option.label}
                          sx={{ my: 0.5 }}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Navigation */}
        <Box sx={{ p: 3, bgcolor: 'grey.50', display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            startIcon={<BackIcon />}
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Quay lại
          </Button>
          <Button
            variant="contained"
            endIcon={currentStep === questionSets.length - 1 ? <CheckIcon /> : <NextIcon />}
            onClick={handleNext}
            disabled={!isStepComplete}
          >
            {currentStep === questionSets.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default MentalHealthAssessment; 