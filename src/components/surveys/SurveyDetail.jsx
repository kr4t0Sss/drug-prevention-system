import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  CircularProgress,
  Alert,
  Stack,
  Divider,
} from '@mui/material';
import {
  Poll as PollIcon,
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from '@mui/icons-material';

const mockSurveys = [
  {
    id: '1',
    title: 'Khảo sát nhận thức về ma túy tổng hợp',
    description: 'Đánh giá kiến thức và hiểu biết của bạn về các loại ma túy tổng hợp và tác hại của chúng. Hãy trả lời thành thật để chúng tôi có cái nhìn chính xác nhất.',
    questions: [
      {
        id: '1.1',
        text: 'Bạn có biết ma túy tổng hợp là gì không?',
        type: 'radio',
        options: ['Có', 'Không', 'Không chắc chắn'],
      },
      {
        id: '1.2',
        text: 'Kể tên ít nhất 3 tác hại của ma túy tổng hợp đối với sức khỏe cá nhân.',
        type: 'text',
      },
      {
        id: '1.3',
        text: 'Theo bạn, phương pháp phòng chống ma túy hiệu quả nhất là gì?',
        type: 'radio',
        options: ['Giáo dục và tuyên truyền', 'Tăng cường kiểm soát và xử lý nghiêm', 'Hỗ trợ cai nghiện và tái hòa nhập', 'Tất cả các phương án trên'],
      },
      {
        id: '1.4',
        text: 'Bạn có sẵn lòng tham gia các hoạt động phòng chống ma túy tại địa phương không?',
        type: 'radio',
        options: ['Có', 'Không'],
      },
    ],
  },
  {
    id: '2',
    title: 'Khảo sát về thái độ phòng chống ma túy học đường',
    description: 'Thu thập ý kiến của học sinh và giáo viên về các biện pháp phòng chống ma túy trong môi trường học đường. Ý kiến của bạn sẽ giúp xây dựng môi trường học tập an toàn hơn.',
    questions: [
      {
        id: '2.1',
        text: 'Bạn có thường xuyên được giáo dục về phòng chống ma túy tại trường không?',
        type: 'radio',
        options: ['Rất thường xuyên', 'Thường xuyên', 'Ít khi', 'Chưa bao giờ'],
      },
      {
        id: '2.2',
        text: 'Theo bạn, học sinh có dễ tiếp cận ma túy trong và ngoài trường học không?',
        type: 'radio',
        options: ['Rất dễ', 'Dễ', 'Khó', 'Rất khó'],
      },
      {
        id: '2.3',
        text: 'Bạn có cảm thấy tự tin khi từ chối lời mời sử dụng ma túy từ bạn bè không?',
        type: 'radio',
        options: ['Rất tự tin', 'Tự tin', 'Hơi tự tin', 'Không tự tin'],
      },
      {
        id: '2.4',
        text: 'Đề xuất của bạn để cải thiện công tác phòng chống ma túy trong trường học là gì?',
        type: 'text',
      },
    ],
  },
  {
    id: '3',
    title: 'Khảo sát đánh giá hiệu quả chương trình can thiệp cộng đồng',
    description: 'Đo lường mức độ thành công và tác động của các chương trình can thiệp phòng chống ma túy đối với cộng đồng. Phản hồi của bạn rất quan trọng để chúng tôi cải thiện dịch vụ.',
    questions: [
      {
        id: '3.1',
        text: 'Bạn có biết về các chương trình can thiệp phòng chống ma túy tại địa phương không?',
        type: 'radio',
        options: ['Có', 'Không'],
      },
      {
        id: '3.2',
        text: 'Bạn đánh giá mức độ hiệu quả của các chương trình này như thế nào?',
        type: 'radio',
        options: ['Rất hiệu quả', 'Hiệu quả', 'Bình thường', 'Không hiệu quả', 'Rất không hiệu quả'],
      },
      {
        id: '3.3',
        text: 'Bạn đã nhận được sự hỗ trợ nào từ các chương trình này chưa? Nếu có, vui lòng mô tả.',
        type: 'text',
      },
      {
        id: '3.4',
        text: 'Theo bạn, cần cải thiện điều gì để các chương trình này đạt hiệu quả cao hơn?',
        type: 'text',
      },
    ],
  },
];

const SurveyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const foundSurvey = mockSurveys.find((s) => s.id === id);
        if (foundSurvey) {
          setSurvey(foundSurvey);
          // Initialize answers state
          const initialAnswers = {};
          foundSurvey.questions.forEach(q => {
            initialAnswers[q.id] = '';
          });
          setAnswers(initialAnswers);
        } else {
          setError('Không tìm thấy khảo sát.');
        }
      } catch (err) {
        setError('Đã xảy ra lỗi khi tải chi tiết khảo sát.');
      } finally {
        setLoading(false);
      }
    };
    fetchSurvey();
  }, [id]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const allQuestionsAnswered = survey.questions.every(q => {
      if (q.type === 'text') {
        return answers[q.id] && answers[q.id].trim() !== '';
      } else {
        return answers[q.id] !== '';
      }
    });

    if (!allQuestionsAnswered) {
      alert('Vui lòng trả lời tất cả các câu hỏi trước khi gửi khảo sát.');
      return;
    }

    console.log('Gửi khảo sát:', answers);
    setSubmitted(true);
    // TODO: Send answers to backend
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
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/surveys')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khảo sát
          </Button>
        </Box>
      </Container>
    );
  }

  if (!survey) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2 }}>Không tìm thấy khảo sát này. Vui lòng kiểm tra lại đường dẫn hoặc ID khảo sát.</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/surveys')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khảo sát
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <PollIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          {survey.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          {survey.description}
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        {!submitted ? (
          <Box component="form" onSubmit={handleSubmit}>
            {survey.questions.map((question, index) => (
              <Box key={question.id} sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight={600} color="text.primary">
                  Câu hỏi {index + 1}: {question.text}
                </Typography>
                {question.type === 'radio' ? (
                  <RadioGroup
                    value={answers[question.id]}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    sx={{ ml: 2 }}
                  >
                    {question.options.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio color="primary" />}
                        label={<Typography variant="body1" color="text.secondary">{option}</Typography>}
                      />
                    ))}
                  </RadioGroup>
                ) : (
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    value={answers[question.id]}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    placeholder="Nhập câu trả lời của bạn tại đây..."
                    sx={{ mt: 1 }}
                  />
                )}
              </Box>
            ))}
            <Divider sx={{ my: 4 }} />
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<SendIcon />}
              sx={{
                mt: 2,
                px: 4,
                py: 1.2,
                fontSize: '1.1rem',
                backgroundColor: '#4caf50',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
                width: '100%',
              }}
            >
              Gửi khảo sát
            </Button>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 100, color: 'success.main', mb: 3 }} />
            <Typography variant="h4" gutterBottom fontWeight={700} color="success.main">
              Cảm ơn bạn đã hoàn thành khảo sát!
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
              Phản hồi của bạn rất quý giá đối với chúng tôi.
            </Typography>
            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/surveys')}
              sx={{
                px: 4,
                py: 1.2,
                fontSize: '1rem',
                backgroundColor: '#2196f3',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              Quay lại danh sách khảo sát
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default SurveyDetail; 