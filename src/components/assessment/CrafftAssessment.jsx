import React, { useState } from 'react';
import { Box, Typography, Paper, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const questions = [
  'Bạn đã từng lái xe sau khi sử dụng ma túy không?',
  'Bạn đã từng sử dụng ma túy một mình không?',
  'Bạn đã từng quên những việc đã làm sau khi sử dụng ma túy không?',
];

const CrafftAssessment = () => {
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
          Bài trắc nghiệm CRAFFT
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
              <FormControlLabel value="yes" control={<Radio />} label="Có" />
              <FormControlLabel value="no" control={<Radio />} label="Không" />
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

export default CrafftAssessment; 