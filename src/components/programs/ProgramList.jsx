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
  Container,
  CardMedia,
  Fab,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Diversity3 as Diversity3Icon,
  School as SchoolIcon,
  FamilyRestroom as FamilyRestroomIcon,
  EventAvailable as EventAvailableIcon,
  LocationOn as LocationOnIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  HourglassEmpty as HourglassEmptyIcon,
  Send as SendIcon,
  Cancel as CancelIcon,
  ListAlt as ListAltIcon,
  InfoOutlined as InfoOutlinedIcon,
  Poll as PollIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';

const programs = [
  {
    id: 1,
    title: 'Chương trình giáo dục phòng chống ma túy cho học sinh',
    description: 'Chương trình giáo dục toàn diện dành cho học sinh THPT, giúp các em nhận diện và phòng tránh ma túy.',
    date: '2024-03-01',
    location: 'Trường THPT ABC',
    target: 'Học sinh',
    status: 'active',
    image: '/images/programs/program1.jpg',
    preSurvey: [
      'Bạn đã từng tham gia chương trình phòng chống ma túy nào trước đây chưa?',
      'Bạn có kiến thức cơ bản về các loại ma túy và tác hại của chúng không?',
      'Bạn có tự tin vào khả năng từ chối ma túy của mình khi bị bạn bè rủ rê không?',
    ],
    postSurvey: [
      'Chương trình này có giúp bạn hiểu rõ hơn về ma túy và tác hại của chúng không?',
      'Bạn cảm thấy tự tin hơn bao nhiêu trong việc từ chối ma túy sau khi tham gia chương trình?',
      'Bạn có muốn giới thiệu chương trình này cho bạn bè hoặc người thân không?',
    ],
  },
  {
    id: 2,
    title: 'Hội thảo phòng chống ma túy cho phụ huynh',
    description: 'Hội thảo cung cấp kiến thức và kỹ năng cần thiết để phụ huynh đồng hành cùng con cái phòng chống ma túy.',
    date: '2024-03-15',
    location: 'Hội trường XYZ',
    target: 'Phụ huynh',
    status: 'upcoming',
    image: '/images/programs/program2.jpg',
    preSurvey: [
      'Bạn có lo lắng về việc con mình có thể tiếp xúc với ma túy không?',
      'Bạn có biết các dấu hiệu nhận biết con đang sử dụng ma túy không?',
      'Bạn có biết cách trò chuyện với con về vấn đề ma túy một cách hiệu quả không?',
    ],
    postSurvey: [
      'Hội thảo này có giúp bạn giảm bớt lo lắng về ma túy cho con cái không?',
      'Bạn có cảm thấy tự tin hơn trong việc nhận biết và đối phó với tình huống ma túy liên quan đến con không?',
      'Bạn có muốn tham gia thêm các buổi hội thảo tương tự trong tương lai không?',
    ],
  },
  {
    id: 3,
    title: 'Khóa tập huấn cho giáo viên về phòng chống ma túy học đường',
    description: 'Khóa tập huấn chuyên sâu nhằm trang bị cho giáo viên những kỹ năng và phương pháp giáo dục phòng chống ma túy hiệu quả trong môi trường học đường.',
    date: '2024-04-01',
    location: 'Trung tâm Đào tạo Giáo dục Quận 1',
    target: 'Giáo viên',
    status: 'upcoming',
    image: '/images/programs/program3.jpg',
    preSurvey: [
      'Bạn có thường xuyên nhận thấy các hành vi đáng ngờ liên quan đến ma túy trong trường học không?',
      'Bạn có cảm thấy đủ kiến thức và kỹ năng để giáo dục học sinh về phòng chống ma túy không?',
      'Bạn có sẵn sàng tham gia các hoạt động ngoại khóa về phòng chống ma túy cùng học sinh không?',
    ],
    postSurvey: [
      'Khóa tập huấn này có cung cấp cho bạn những công cụ và phương pháp mới để giáo dục phòng chống ma túy không?',
      'Bạn có cảm thấy tự tin hơn trong việc xử lý các tình huống liên quan đến ma túy trong trường học sau khóa tập huấn không?',
      'Bạn sẽ áp dụng những kiến thức đã học vào công tác giảng dạy và hoạt động ngoại khóa như thế nào?',
    ],
  },
  {
    id: 4,
    title: 'Tư vấn cộng đồng và hỗ trợ cai nghiện',
    description: 'Cung cấp dịch vụ tư vấn miễn phí và hỗ trợ quá trình cai nghiện, tái hòa nhập cộng đồng cho người sử dụng ma túy và gia đình.',
    date: '2024-05-01',
    location: 'Trung tâm Y tế Cộng đồng',
    target: 'Cộng đồng',
    status: 'active',
    image: '/images/programs/program4.jpg',
    preSurvey: [
      'Bạn có thành viên gia đình hoặc bạn bè đang gặp vấn đề về ma túy không?',
      'Bạn có biết các nguồn lực hỗ trợ cai nghiện và tái hòa nhập cộng đồng không?',
      'Bạn có sẵn sàng tham gia hỗ trợ những người đang cai nghiện không?',
    ],
    postSurvey: [
      'Bạn có tìm được thông tin hữu ích về hỗ trợ cai nghiện từ chương trình không?',
      'Bạn có cảm thấy lạc quan hơn về khả năng cai nghiện và tái hòa nhập của người thân/bạn bè không?',
      'Bạn có sẵn lòng giới thiệu dịch vụ này cho những người cần thiết không?',
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
    setSurveyAnswers({}); // Reset answers for new survey
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
    console.log('Câu trả lời khảo sát:', surveyAnswers);
    alert('Cảm ơn bạn đã hoàn thành khảo sát!'); // User feedback
    handleSurveyClose();
  };

  const handleSurveyAnswer = (question, value) => {
    setSurveyAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'active':
        return <Chip label="Đang diễn ra" color="success" size="small" icon={<CheckCircleOutlineIcon style={{ fontSize: 16 }} />} />;
      case 'upcoming':
        return <Chip label="Sắp diễn ra" color="primary" size="small" icon={<HourglassEmptyIcon style={{ fontSize: 16 }} />} />;
      case 'completed': // Assuming there might be completed programs in the future
        return <Chip label="Đã hoàn thành" color="info" size="small" icon={<CheckCircleOutlineIcon style={{ fontSize: 16 }} />} />;
      default:
        return <Chip label={status} size="small" />;
    }
  };

  const getTargetIcon = (target) => {
    switch (target) {
      case 'Học sinh':
        return <SchoolIcon style={{ fontSize: 16 }} />;
      case 'Phụ huynh':
        return <FamilyRestroomIcon style={{ fontSize: 16 }} />;
      case 'Giáo viên':
        return <Diversity3Icon style={{ fontSize: 16 }} />;
      case 'Cộng đồng':
        return <Diversity3Icon style={{ fontSize: 16 }} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <ListAltIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Các chương trình cộng đồng
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Khám phá các chương trình giáo dục, hội thảo, và hỗ trợ cộng đồng của chúng tôi nhằm tăng cường nhận thức và phòng chống ma túy.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {programs.map((program) => (
          <Grid item xs={12} sm={6} md={4} key={program.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 6,
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 12,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={program.image}
                alt={program.title}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                  <Chip
                    label={program.target}
                    color="secondary"
                    size="small"
                    icon={getTargetIcon(program.target)}
                    sx={{ fontWeight: 'bold' }}
                  />
                  {getStatusChip(program.status)}
                  <Chip
                    label={format(new Date(program.date), 'dd/MM/yyyy')}
                    icon={<EventAvailableIcon style={{ fontSize: 16 }} />}
                    size="small"
                    color="info"
                  />
                </Stack>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={700} color="primary.dark">
                  {program.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {program.description}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <LocationOnIcon color="action" sx={{ fontSize: 18 }} />
                  <Typography variant="body2" color="text.secondary">
                    {program.location}
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={1} sx={{ mt: 'auto' }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate(`/programs/${program.id}`)}
                    sx={{
                      bgcolor: '#42a5f5',
                      '&:hover': {
                        bgcolor: '#1976d2',
                      },
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    Xem chi tiết
                  </Button>
                  {(program.status === 'active' || program.status === 'upcoming') && (
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="outlined"
                        size="medium"
                        startIcon={<PollIcon />}
                        onClick={() => handleSurveyOpen(program, 'pre')}
                        sx={{
                          textTransform: 'none',
                          borderColor: '#4caf50',
                          color: '#4caf50',
                          '&:hover': {
                            bgcolor: '#e8f5e9',
                            borderColor: '#388e3c',
                          },
                        }}
                      >
                        Khảo sát trước
                      </Button>
                      <Button
                        variant="outlined"
                        size="medium"
                        startIcon={<PollIcon />}
                        onClick={() => handleSurveyOpen(program, 'post')}
                        sx={{
                          textTransform: 'none',
                          borderColor: '#ff9800',
                          color: '#ff9800',
                          '&:hover': {
                            bgcolor: '#fff3e0',
                            borderColor: '#fb8c00',
                          },
                        }}
                      >
                        Khảo sát sau
                      </Button>
                    </Stack>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Survey Dialog */}
      <Dialog open={openSurvey} onClose={handleSurveyClose} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 3, boxShadow: 10 } }}>
        <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white', pb: 2, pt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <PollIcon />
          <Typography variant="h6" component="span" fontWeight={600}>
            {surveyType === 'pre' ? 'Khảo sát trước chương trình' : 'Khảo sát sau chương trình'}
          </Typography>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 3 }}>
          {selectedProgram && (
            <Box>
              <Typography variant="h6" gutterBottom color="primary.dark" mb={2}>
                Chương trình: {selectedProgram.title}
              </Typography>
              {(surveyType === 'pre' ? selectedProgram.preSurvey : selectedProgram.postSurvey).map(
                (question, idx) => (
                  <Paper key={idx} variant="outlined" sx={{ mb: 3, p: 2, borderRadius: 2, bgcolor: '#f8f8f8' }}>
                    <Typography variant="body1" fontWeight={600} gutterBottom sx={{ mb: 1.5 }}>
                      Câu hỏi {idx + 1}: {question}
                    </Typography>
                    <RadioGroup
                      value={surveyAnswers[question] || ''}
                      onChange={(e) => handleSurveyAnswer(question, e.target.value)}
                      row
                    >
                      <FormControlLabel value="yes" control={<Radio color="primary" />} label="Có" />
                      <FormControlLabel value="no" control={<Radio color="primary" />} label="Không" />
                      <FormControlLabel value="sometimes" control={<Radio color="primary" />} label="Đôi khi" />
                    </RadioGroup>
                  </Paper>
                )
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={handleSurveyClose}
            startIcon={<CancelIcon />}
            sx={{
              color: '#757575',
              '&:hover': {
                bgcolor: '#eeeeee',
              },
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleSurveySubmit}
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              bgcolor: '#4caf50',
              '&:hover': {
                bgcolor: '#388e3c',
              },
            }}
          >
            Gửi khảo sát
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProgramList; 