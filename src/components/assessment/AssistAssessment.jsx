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
    text: 'Trong 3 tháng qua, bạn đã sử dụng ma túy bao nhiêu lần?',
    options: [
      { value: 'chưa_từng', label: 'Chưa từng', score: 0 },
      { value: 'một_hai_lần', label: '1-2 lần', score: 2 },
      { value: 'ba_năm_lần', label: '3-5 lần', score: 3 },
      { value: 'trên_năm_lần', label: 'Trên 5 lần', score: 4 }
    ]
  },
  {
    id: 2,
    text: 'Trong 3 tháng qua, bạn có thường xuyên nghĩ đến việc sử dụng ma túy không?',
    options: [
      { value: 'không_bao_giờ', label: 'Không bao giờ', score: 0 },
      { value: 'thỉnh_thoảng', label: 'Thỉnh thoảng', score: 2 },
      { value: 'thường_xuyên', label: 'Thường xuyên', score: 3 },
      { value: 'rất_thường_xuyên', label: 'Rất thường xuyên', score: 4 }
    ]
  },
  {
    id: 3,
    text: 'Trong 3 tháng qua, việc sử dụng ma túy có ảnh hưởng đến sức khỏe, công việc hoặc các mối quan hệ của bạn không?',
    options: [
      { value: 'không_ảnh_hưởng', label: 'Không ảnh hưởng', score: 0 },
      { value: 'ảnh_hưởng_nhẹ', label: 'Ảnh hưởng nhẹ', score: 2 },
      { value: 'ảnh_hưởng_trung_bình', label: 'Ảnh hưởng trung bình', score: 3 },
      { value: 'ảnh_hưởng_nghiêm_trọng', label: 'Ảnh hưởng nghiêm trọng', score: 4 }
    ]
  }
];

const AssistAssessment = () => {
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
    if (score <= 3) return { level: 'Thấp', color: 'success', message: 'Nguy cơ sử dụng ma túy của bạn ở mức thấp.' };
    if (score <= 7) return { level: 'Trung bình', color: 'warning', message: 'Bạn có nguy cơ sử dụng ma túy ở mức trung bình. Cân nhắc tìm kiếm tư vấn thêm.' };
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
        Khảo sát ASSIST
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
              Kết quả đánh giá của bạn
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

export default AssistAssessment; 