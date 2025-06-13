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
            riskLevel: 'Trung bình',
            answers: [
              { question: 'Bạn đã bao giờ đi trong xe (ô tô, xe máy, thuyền, v.v.) do người nào đó đã sử dụng ma túy hoặc rượu lái chưa?', answer: 'Có' },
              { question: 'Bạn có bao giờ dùng ma túy hoặc rượu để thư giãn, cảm thấy tốt hơn về bản thân, hoặc hòa nhập với mọi người không?', answer: 'Có' },
              { question: 'Bạn có bao giờ dùng ma túy hoặc rượu khi ở một mình không?', answer: 'Không' },
              { question: 'Bạn có bao giờ quên những điều bạn đã làm khi đang sử dụng ma túy hoặc rượu không?', answer: 'Không' },
              { question: 'Gia đình hoặc bạn bè của bạn có bao giờ nói với bạn rằng bạn nên giảm sử dụng ma túy hoặc rượu không?', answer: 'Có' },
              { question: 'Bạn đã bao giờ gặp rắc rối khi sử dụng ma túy hoặc rượu chưa?', answer: 'Có' },
            ],
            recommendations: [
              'Cân nhắc giảm sử dụng ma túy',
              'Lên lịch đánh giá tiếp theo',
              'Cân nhắc các dịch vụ tư vấn'
            ]
          }), 1000)
        );
        setAssessment(response);
        setLoading(false);
      } catch (err) {
        setError('Không thể tải chi tiết đánh giá');
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
        <Alert severity="info">Không tìm thấy đánh giá</Alert>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Chi tiết đánh giá
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Loại đánh giá
            </Typography>
            <Typography variant="body1" gutterBottom>
              {assessment.type}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Ngày
            </Typography>
            <Typography variant="body1" gutterBottom>
              {format(new Date(assessment.date), 'PPP')}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Điểm số
            </Typography>
            <Typography variant="body1" gutterBottom>
              {assessment.score}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="text.secondary">
              Mức độ rủi ro
            </Typography>
            <Chip 
              label={assessment.riskLevel}
              color={
                assessment.riskLevel === 'Cao' ? 'error' :
                assessment.riskLevel === 'Trung bình' ? 'warning' : 'success'
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Câu trả lời
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
              Khuyến nghị
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