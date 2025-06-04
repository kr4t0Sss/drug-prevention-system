import React, { useState } from 'react';
import { Box, Typography, Paper, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const questions = [
  'Trong 3 tháng qua, bạn đã sử dụng ma túy bao nhiêu lần?',
  'Trong 3 tháng qua, bạn đã cảm thấy thèm muốn sử dụng ma túy không?',
  'Trong 3 tháng qua, bạn đã gặp vấn đề về sức khỏe, tài chính, xã hội do sử dụng ma túy không?',
];

const AssistAssessment = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const handleSubmit = () => {
    // TODO: Implement assessment logic
    console.log('Assessment answers:', answers);
    navigate('/assessment/results');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bài trắc nghiệm ASSIST
        </Typography>
        {questions.map((question, idx) => (
          <Box key={idx} sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              {question}
            </Typography>
            <RadioGroup
              value={answers[question] || ''}
              onChange={(e) => handleAnswer(question, e.target.value)}
            >
              <FormControlLabel value="never" control={<Radio />} label="Không bao giờ" />
              <FormControlLabel value="once" control={<Radio />} label="Một lần" />
              <FormControlLabel value="few" control={<Radio />} label="Vài lần" />
              <FormControlLabel value="many" control={<Radio />} label="Nhiều lần" />
            </RadioGroup>
          </Box>
        ))}
        <Button variant="contained" onClick={handleSubmit}>
          Hoàn thành
        </Button>
      </Paper>
    </Box>
  );
};

export default AssistAssessment; 