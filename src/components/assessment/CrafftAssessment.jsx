import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  LinearProgress,
  Alert,
  Stack,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'; // Icon for CRAFFT Assessment

const questions = [
  {
    id: 1,
    text: 'Bạn đã bao giờ đi trong xe (ô tô, xe máy, thuyền, v.v.) do người nào đó đã sử dụng ma túy hoặc rượu lái chưa?',
    options: [
      { value: 'yes', label: 'Có', score: 1 },
      { value: 'no', label: 'Không', score: 0 }
    ]
  },
  {
    id: 2,
    text: 'Bạn có bao giờ dùng ma túy hoặc rượu để thư giãn, cảm thấy tốt hơn về bản thân, hoặc hòa nhập với mọi người không?',
    options: [
      { value: 'yes', label: 'Có', score: 1 },
      { value: 'no', label: 'Không', score: 0 }
    ]
  },
  {
    id: 3,
    text: 'Bạn có bao giờ dùng ma túy hoặc rượu khi ở một mình không?',
    options: [
      { value: 'yes', label: 'Có', score: 1 },
      { value: 'no', label: 'Không', score: 0 }
    ]
  },
  {
    id: 4,
    text: 'Bạn có bao giờ quên những điều bạn đã làm khi đang sử dụng ma túy hoặc rượu không?',
    options: [
      { value: 'yes', label: 'Có', score: 1 },
      { value: 'no', label: 'Không', score: 0 }
    ]
  },
  {
    id: 5,
    text: 'Gia đình hoặc bạn bè của bạn có bao giờ nói với bạn rằng bạn nên giảm sử dụng ma túy hoặc rượu không?',
    options: [
      { value: 'yes', label: 'Có', score: 1 },
      { value: 'no', label: 'Không', score: 0 }
    ]
  },
  {
    id: 6,
    text: 'Bạn đã bao giờ gặp rắc rối khi sử dụng ma túy hoặc rượu chưa?',
    options: [
      { value: 'yes', label: 'Có', score: 1 },
      { value: 'no', label: 'Không', score: 0 }
    ]
  },
];

const CrafftAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (event) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: event.target.value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find(q => String(q.id) === questionId);
      const option = question.options.find(opt => opt.value === answerValue);
      if (option) {
        totalScore += option.score;
      }
    });
    return totalScore;
  };

  const getRiskLevel = (score) => {
    if (score === 0) return { level: 'Thấp', color: 'success', message: 'Nguy cơ sử dụng ma túy ở thanh thiếu niên của bạn ở mức thấp. Hãy tiếp tục duy trì lối sống lành mạnh.' };
    if (score >= 1 && score <= 2) return { level: 'Trung bình', color: 'warning', message: 'Bạn có nguy cơ sử dụng ma túy ở mức trung bình. Cân nhắc tìm kiếm tư vấn thêm từ người lớn đáng tin cậy hoặc chuyên gia.' };
    return { level: 'Cao', color: 'error', message: 'Bạn có nguy cơ sử dụng ma túy ở mức cao. Bạn nên tìm kiếm sự giúp đỡ từ chuyên gia ngay lập tức và tham gia các chương trình hỗ trợ phù hợp với lứa tuổi.' };
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
    } else {
      alert('Vui lòng trả lời đầy đủ tất cả các câu hỏi trước khi xem kết quả!');
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <ChildFriendlyIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Bài đánh giá CRAFFT
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
          Bài đánh giá này dành cho thanh thiếu niên để giúp nhận diện và hiểu rõ hơn về mức độ nguy cơ liên quan đến việc sử dụng các chất gây nghiện.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Vui lòng trả lời các câu hỏi một cách trung thực để nhận được kết quả chính xác nhất.
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        {!showResults ? (
          <>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mb: 4, height: 12, borderRadius: 5, bgcolor: '#e0e0e0', '& .MuiLinearProgress-bar': { bgcolor: '#4caf50' } }}
            />
            <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary' }}>
              Câu {currentQuestionIndex + 1}/{questions.length}: {currentQuestion.text}
            </Typography>
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onChange={handleAnswer}
            >
              {currentQuestion.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio size="medium" color="primary" />}
                  label={<Typography variant="body1" sx={{ color: 'text.secondary' }}>{option.label}</Typography>}
                  sx={{ mb: 1.5 }}
                />
              ))}
            </RadioGroup>
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 5 }}>
              <Button
                variant="outlined"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                size="large"
                sx={{ px: 3, py: 1.2, borderColor: '#9e9e9e', color: '#616161', '&:hover': { borderColor: '#424242', color: '#424242' } }}
              >
                Câu trước
              </Button>
              {currentQuestionIndex === questions.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={!answers[currentQuestion.id]}
                  size="large"
                  sx={{
                    backgroundColor: '#2196f3',
                    '&:hover': {
                      backgroundColor: '#1976d2',
                    },
                    px: 4,
                    py: 1.2,
                  }}
                >
                  Xem kết quả
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  size="large"
                  sx={{
                    backgroundColor: '#2196f3',
                    '&:hover': {
                      backgroundColor: '#1976d2',
                    },
                    px: 4,
                    py: 1.2,
                  }}
                >
                  Câu tiếp theo
                </Button>
              )}
            </Stack>
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom fontWeight={700} color="primary.dark">
              Kết quả đánh giá CRAFFT của bạn
            </Typography>
            <Alert
              severity={getRiskLevel(calculateScore()).color}
              sx={{
                mb: 3,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                py: 2,
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {getRiskLevel(calculateScore()).message}
            </Alert>
            <Typography variant="h5" paragraph sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Tổng điểm: <Box component="span" sx={{ color: '#4caf50' }}>{calculateScore()}</Box>
            </Typography>
            <Typography variant="h5" paragraph sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Mức độ nguy cơ: <Box component="span" sx={{ color: getRiskLevel(calculateScore()).color === 'success' ? '#4caf50' : getRiskLevel(calculateScore()).color === 'warning' ? '#ff9800' : '#f44336' }}>{getRiskLevel(calculateScore()).level}</Box>
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                onClick={handleReset}
                size="large"
                sx={{
                  backgroundColor: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#1976d2',
                  },
                }}
              >
                Làm lại khảo sát
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/counseling')}
                size="large"
                sx={{ borderColor: '#2196f3', color: '#2196f3', '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.04)' } }}
              >
                Tìm hiểu thêm về tư vấn
              </Button>
            </Stack>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default CrafftAssessment; 