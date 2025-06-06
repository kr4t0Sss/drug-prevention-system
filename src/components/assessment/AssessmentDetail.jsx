import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material';
import { format } from 'date-fns';

const AssessmentDetail = () => {
  const { id } = useParams();
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchAssessment = async () => {
      try {
        // Simulated API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            id,
            type: 'CRAFFT',
            date: new Date(),
            score: 4,
            riskLevel: 'Moderate',
            answers: [
              { question: 'Have you ever ridden in a CAR driven by someone who was high?', answer: 'Yes' },
              { question: 'Do you ever use drugs to RELAX?', answer: 'Yes' },
              { question: 'Do you ever use drugs while you are by yourself, ALONE?', answer: 'No' },
              { question: 'Do you ever FORGET things you did while using drugs?', answer: 'No' },
              { question: 'Do your family or FRIENDS ever tell you that you should cut down on your drug use?', answer: 'Yes' },
              { question: 'Have you ever gotten into TROUBLE while you were using drugs?', answer: 'Yes' },
            ],
            recommendations: [
              'Consider reducing drug use',
              'Schedule follow-up assessment',
              'Consider counseling services'
            ]
          }), 1000)
        );
        setAssessment(response);
        setLoading(false);
      } catch (err) {
        setError('Failed to load assessment details');
        setLoading(false);
      }
    };

    fetchAssessment();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!assessment) {
    return (
      <Box p={3}>
        <Alert severity="info">Assessment not found</Alert>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Assessment Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Assessment Type
            </Typography>
            <Typography variant="body1" gutterBottom>
              {assessment.type}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Date
            </Typography>
            <Typography variant="body1" gutterBottom>
              {format(new Date(assessment.date), 'PPP')}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Score
            </Typography>
            <Typography variant="body1" gutterBottom>
              {assessment.score}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Risk Level
            </Typography>
            <Chip 
              label={assessment.riskLevel}
              color={
                assessment.riskLevel === 'High' ? 'error' :
                assessment.riskLevel === 'Moderate' ? 'warning' : 'success'
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Answers
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {assessment.answers.map((item, index) => (
              <Box key={index} mb={2}>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.question}
                </Typography>
                <Typography variant="body1">
                  {item.answer}
                </Typography>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Recommendations
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {assessment.recommendations.map((recommendation, index) => (
              <Typography key={index} variant="body1" paragraph>
                • {recommendation}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AssessmentDetail; 