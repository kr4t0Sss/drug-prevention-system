import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Button,
  Alert,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../../contexts/AssessmentContext';

const getRiskLevelColor = (riskLevel) => {
  switch (riskLevel.toLowerCase()) {
    case 'low':
    case 'low risk':
      return 'success';
    case 'moderate':
    case 'medium risk':
      return 'warning';
    case 'high':
    case 'high risk':
      return 'error';
    default:
      return 'default';
  }
};

const AssessmentHistory = () => {
  const navigate = useNavigate();
  const { results, deleteResult } = useAssessment();

  const handleDownload = (result) => {
    // Create a text version of the assessment result
    const content = `
Assessment Report
Type: ${result.type}
Date: ${result.date}
Score: ${result.score}
Risk Level: ${result.riskLevel}

Recommendations:
${result.recommendations.map(rec => `- ${rec}`).join('\n')}
    `.trim();

    // Create and trigger download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assessment-${result.type.toLowerCase()}-${result.date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (results.length === 0) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Assessment History
        </Typography>
        <Alert severity="info" sx={{ mt: 2 }}>
          You haven't taken any assessments yet. Take an assessment to start tracking your progress.
        </Alert>
        <Button
          variant="contained"
          onClick={() => navigate('/assessment')}
          sx={{ mt: 3 }}
        >
          Take an Assessment
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Assessment History
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        View and manage your past assessment results. You can download reports to share with healthcare providers.
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Risk Level</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{new Date(result.date).toLocaleDateString()}</TableCell>
                <TableCell>{result.type}</TableCell>
                <TableCell>{result.score}</TableCell>
                <TableCell>
                  <Chip
                    label={result.riskLevel}
                    color={getRiskLevelColor(result.riskLevel)}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleDownload(result)}
                    title="Download report"
                  >
                    <DownloadIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteResult(result.id)}
                    title="Delete result"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          About Your Assessment History
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This history shows all assessments you've taken. Regular assessments can help track changes
          in your risk levels and the effectiveness of prevention strategies. You can download reports
          to share with healthcare providers or delete results you no longer want to keep.
        </Typography>
      </Box>
    </Box>
  );
};

export default AssessmentHistory; 