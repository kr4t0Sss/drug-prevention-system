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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    if (score === 0) return { level: 'Thấp', color: 'success', message: 'Nguy cơ sử dụng ma túy của bạn ở mức thấp.' };
    if (score >= 1 && score <= 2) return { level: 'Trung bình', color: 'warning', message: 'Bạn có nguy cơ sử dụng ma túy ở mức trung bình. Cân nhắc tìm kiếm tư vấn thêm.' };
    return { level: 'Cao', color: 'error', message: 'Bạn có nguy cơ sử dụng ma túy ở mức cao. Bạn nên tìm kiếm sự giúp đỡ từ chuyên gia ngay lập tức.' };
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
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Khảo sát CRAFFT
      </Typography>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {!showResults ? (
          <>
            <LinearProgress variant="determinate" value={progress} sx={{ mb: 3, height: 10, borderRadius: 5 }} />
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
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
                  control={<Radio size="medium" />}
                  label={<Typography variant="body1">{option.label}</Typography>}
                  sx={{ mb: 1 }}
                />
              ))}
            </RadioGroup>
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
              <Button
                variant="outlined"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Câu trước
              </Button>
              {currentQuestionIndex === questions.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={!answers[currentQuestion.id]}
                >
                  Xem kết quả
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                >
                  Câu tiếp theo
                </Button>
              )}
            </Stack>
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h5" gutterBottom>
              Kết quả đánh giá CRAFFT của bạn
            </Typography>
            <Alert severity={getRiskLevel(calculateScore()).color} sx={{ mb: 3, fontSize: '1.1rem' }}>
              {getRiskLevel(calculateScore()).message}
            </Alert>
            <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
              Tổng điểm: {calculateScore()}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
              Mức độ nguy cơ: {getRiskLevel(calculateScore()).level}
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
              <Button variant="contained" onClick={handleReset}>
                Làm lại khảo sát
              </Button>
              <Button variant="outlined" onClick={() => navigate('/counseling')}>
                Tìm hiểu thêm về tư vấn
              </Button>
            </Stack>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CrafftAssessment; 