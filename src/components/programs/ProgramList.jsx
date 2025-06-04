import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const programs = [
  {
    id: 1,
    title: 'Chương trình giáo dục phòng chống ma túy cho học sinh',
    description: 'Chương trình giáo dục phòng chống ma túy dành cho học sinh THPT.',
    date: '2024-03-01',
    location: 'Trường THPT ABC',
    target: 'Học sinh',
    status: 'active',
    preSurvey: [
      'Bạn đã từng tham gia chương trình phòng chống ma túy chưa?',
      'Bạn có kiến thức về các loại ma túy không?',
      'Bạn có kỹ năng từ chối ma túy không?',
    ],
    postSurvey: [
      'Chương trình có giúp bạn hiểu thêm về ma túy không?',
      'Bạn có tự tin hơn trong việc từ chối ma túy không?',
      'Bạn có muốn tham gia thêm các chương trình tương tự không?',
    ],
  },
  {
    id: 2,
    title: 'Hội thảo phòng chống ma túy cho phụ huynh',
    description: 'Hội thảo chia sẻ kiến thức và kỹ năng phòng chống ma túy cho phụ huynh.',
    date: '2024-03-15',
    location: 'Hội trường XYZ',
    target: 'Phụ huynh',
    status: 'upcoming',
    preSurvey: [
      'Bạn có kiến thức về các dấu hiệu sử dụng ma túy không?',
      'Bạn có kỹ năng giao tiếp với con về ma túy không?',
      'Bạn có biết cách phòng ngừa ma túy cho con không?',
    ],
    postSurvey: [
      'Hội thảo có giúp bạn hiểu thêm về dấu hiệu sử dụng ma túy không?',
      'Bạn có tự tin hơn trong việc giao tiếp với con về ma túy không?',
      'Bạn có áp dụng được các biện pháp phòng ngừa không?',
    ],
  },
  {
    id: 3,
    title: 'Khóa tập huấn cho giáo viên',
    description: 'Khóa tập huấn kỹ năng phòng chống ma túy cho giáo viên.',
    date: '2024-04-01',
    location: 'Trung tâm Đào tạo',
    target: 'Giáo viên',
    status: 'upcoming',
    preSurvey: [
      'Bạn có kiến thức về phòng chống ma túy không?',
      'Bạn có kỹ năng giảng dạy về phòng chống ma túy không?',
      'Bạn có kinh nghiệm xử lý tình huống liên quan đến ma túy không?',
    ],
    postSurvey: [
      'Khóa tập huấn có giúp bạn nâng cao kiến thức không?',
      'Bạn có tự tin hơn trong việc giảng dạy không?',
      'Bạn có áp dụng được các kỹ năng xử lý tình huống không?',
    ],
  },
];

const ProgramList = () => {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [surveyType, setSurveyType] = useState(null);
  const [surveyAnswers, setSurveyAnswers] = useState({});
  const [openSurvey, setOpenSurvey] = useState(false);

  const handleSurveyOpen = (program, type) => {
    setSelectedProgram(program);
    setSurveyType(type);
    setSurveyAnswers({});
    setOpenSurvey(true);
  };

  const handleSurveyClose = () => {
    setOpenSurvey(false);
    setSelectedProgram(null);
    setSurveyType(null);
    setSurveyAnswers({});
  };

  const handleSurveySubmit = () => {
    // TODO: Implement survey submission logic
    console.log('Survey answers:', surveyAnswers);
    handleSurveyClose();
  };

  const handleSurveyAnswer = (question, value) => {
    setSurveyAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Chương trình cộng đồng
      </Typography>
      <Grid container spacing={3}>
        {programs.map((program) => (
          <Grid item xs={12} md={4} key={program.id}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip
                    label={program.target}
                    color="primary"
                    size="small"
                  />
                  <Chip
                    label={program.status === 'active' ? 'Đang diễn ra' : 'Sắp diễn ra'}
                    color={program.status === 'active' ? 'success' : 'warning'}
                    size="small"
                  />
                </Stack>
                <Typography variant="h6" gutterBottom>
                  {program.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {program.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Ngày: {program.date}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Địa điểm: {program.location}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/programs/${program.id}`)}
                  >
                    Xem chi tiết
                  </Button>
                  {program.status === 'active' && (
                    <>
                      <Button
                        variant="outlined"
                        onClick={() => handleSurveyOpen(program, 'pre')}
                      >
                        Khảo sát trước
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => handleSurveyOpen(program, 'post')}
                      >
                        Khảo sát sau
                      </Button>
                    </>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Survey Dialog */}
      <Dialog open={openSurvey} onClose={handleSurveyClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {surveyType === 'pre' ? 'Khảo sát trước chương trình' : 'Khảo sát sau chương trình'}
        </DialogTitle>
        <DialogContent>
          {selectedProgram && (
            <Box sx={{ mt: 2 }}>
              {(surveyType === 'pre' ? selectedProgram.preSurvey : selectedProgram.postSurvey).map(
                (question, idx) => (
                  <Box key={idx} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      {question}
                    </Typography>
                    <RadioGroup
                      value={surveyAnswers[question] || ''}
                      onChange={(e) => handleSurveyAnswer(question, e.target.value)}
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Có" />
                      <FormControlLabel value="no" control={<Radio />} label="Không" />
                      <FormControlLabel value="sometimes" control={<Radio />} label="Đôi khi" />
                    </RadioGroup>
                  </Box>
                )
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSurveyClose}>Hủy</Button>
          <Button onClick={handleSurveySubmit} variant="contained">
            Gửi khảo sát
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProgramList; 