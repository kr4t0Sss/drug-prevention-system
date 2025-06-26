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
  Container,
  Stack,
} from '@mui/material';
import {
  Science as ScienceIcon,
  ChildFriendly as ChildFriendlyIcon,
  EventNote as EventNoteIcon,
  Score as ScoreIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  LightbulbOutlined as LightbulbOutlinedIcon,
  QuestionAnswer as QuestionAnswerIcon,
  CalendarToday as CalendarTodayIcon,
} from '@mui/icons-material';
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
        const mockAssessments = {
          '1': {
            id: '1',
            type: 'ASSIST',
            date: new Date('2024-05-10T10:00:00Z'),
            score: 12,
            riskLevel: 'Trung bình',
            answers: [
              { question: 'Trong 3 tháng qua, bạn đã sử dụng rượu bao nhiêu lần?', answer: '1-2 lần/tháng' },
              { question: 'Trong 3 tháng qua, bạn đã sử dụng cần sa bao nhiêu lần?', answer: 'Chưa bao giờ' },
              { question: 'Trong 3 tháng qua, bạn đã sử dụng ma túy đá bao nhiêu lần?', answer: '1-2 lần/tuần' },
              { question: 'Bạn có cảm thấy lo lắng hoặc trầm cảm do sử dụng chất gây nghiện không?', answer: 'Có' },
              { question: 'Bạn có nghĩ rằng bạn nên giảm hoặc ngừng sử dụng chất gây nghiện không?', answer: 'Có' },
            ],
            recommendations: [
              'Tìm hiểu thêm về tác hại của ma túy đá và rượu.',
              'Cân nhắc tham gia các buổi tư vấn cá nhân để được hỗ trợ.',
              'Tham gia các nhóm hỗ trợ đồng đẳng.',
              'Thực hiện đánh giá định kỳ để theo dõi sự tiến bộ.'
            ]
          },
          '2': {
            id: '2',
            type: 'CRAFFT',
            date: new Date('2024-04-20T14:30:00Z'),
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
              'Thảo luận với người lớn đáng tin cậy về kết quả này.',
              'Tìm hiểu thêm về các lựa chọn lành mạnh để giải trí.',
              'Cân nhắc nói chuyện với chuyên gia tư vấn.'
            ]
          }
        };

        const response = await new Promise(resolve =>
          setTimeout(() => resolve(mockAssessments[id]), 1000)
        );

        if (response) {
          setAssessment(response);
        } else {
          setError('Không tìm thấy đánh giá với ID này');
        }
        setLoading(false);
      } catch (err) {
        setError('Không thể tải chi tiết đánh giá');
        setLoading(false);
      }
    };

    fetchAssessment();
  }, [id]);

  const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel) {
      case 'Cao':
        return 'error';
      case 'Trung bình':
        return 'warning';
      case 'Thấp':
        return 'success';
      default:
        return 'default';
    }
  };

  const getTypeIcon = (type) => {
    if (type === 'ASSIST') return <ScienceIcon sx={{ fontSize: 'inherit' }} />;
    if (type === 'CRAFFT') return <ChildFriendlyIcon sx={{ fontSize: 'inherit' }} />;
    return null;
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress size={60} sx={{ color: 'primary.main' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ boxShadow: 3, borderRadius: 2 }}>{error}</Alert>
      </Container>
    );
  }

  if (!assessment) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2 }}>Không tìm thấy đánh giá. Vui lòng kiểm tra lại đường dẫn hoặc ID đánh giá.</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <AssignmentTurnedInIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Chi tiết kết quả đánh giá
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Xem lại toàn bộ thông tin và khuyến nghị dựa trên kết quả đánh giá của bạn.
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap' }}>
          <Typography variant="h5" component="h2" fontWeight={700} color="primary.main">
            Kết quả đánh giá {assessment.type}
          </Typography>
          <Chip
            label={format(new Date(assessment.date), 'dd/MM/yyyy HH:mm')}
            icon={<CalendarTodayIcon />}
            color="info"
            sx={{ mt: { xs: 2, md: 0 } }}
          />
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: '#e3f2fd', height: '100%' }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                {getTypeIcon(assessment.type)}
                <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">
                  Loại đánh giá
                </Typography>
              </Stack>
              <Typography variant="h6" color="primary.dark">
                {assessment.type}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: '#e8f5e9', height: '100%' }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <ScoreIcon sx={{ fontSize: 'inherit' }} />
                <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">
                  Điểm số
                </Typography>
              </Stack>
              <Typography variant="h6" color="success.main">
                {assessment.score}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: '#fff3e0', height: '100%' }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <LightbulbOutlinedIcon sx={{ fontSize: 'inherit' }} />
                <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">
                  Mức độ rủi ro
                </Typography>
              </Stack>
              <Chip
                label={assessment.riskLevel}
                color={getRiskLevelColor(assessment.riskLevel)}
                size="medium"
                sx={{ fontWeight: 'bold', fontSize: '1rem' }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" component="h3" gutterBottom fontWeight={600} color="primary.dark" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <QuestionAnswerIcon color="primary" /> Câu trả lời của bạn
        </Typography>
        <Grid container spacing={3}>
          {assessment.answers.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: '#f5f5f5' }}>
                <Typography variant="body1" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                  Câu {index + 1}: {item.question}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  **Trả lời:** <Chip label={item.answer} color="primary" size="small" sx={{ ml: 1 }} />
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" component="h3" gutterBottom fontWeight={600} color="primary.dark" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LightbulbOutlinedIcon color="primary" /> Khuyến nghị từ hệ thống
        </Typography>
        <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, border: '1px solid #e0e0e0' }}>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            {assessment.recommendations.map((recommendation, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <Typography variant="body1" color="text.primary">
                  {recommendation}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Paper>
    </Container>
  );
};

export default AssessmentDetail; 