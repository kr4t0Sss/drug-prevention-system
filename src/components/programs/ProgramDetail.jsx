import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Chip,
  Stack,
  Button,
  CardMedia,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import {
  ListAlt as ListAltIcon,
  EventAvailable as EventAvailableIcon,
  LocationOn as LocationOnIcon,
  School as SchoolIcon,
  FamilyRestroom as FamilyRestroomIcon,
  Diversity3 as Diversity3Icon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  HourglassEmpty as HourglassEmptyIcon,
  Poll as PollIcon,
  InfoOutlined as InfoOutlinedIcon,
  Send as SendIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';

const mockPrograms = [
  {
    id: '1',
    title: 'Chương trình giáo dục phòng chống ma túy cho học sinh',
    description: 'Chương trình giáo dục toàn diện dành cho học sinh THPT, giúp các em nhận diện và phòng tránh ma túy. Nội dung bao gồm kiến thức về các loại ma túy, tác hại, kỹ năng từ chối, và cách xây dựng lối sống lành mạnh. Chương trình được thiết kế tương tác với các hoạt động nhóm và thảo luận.',
    fullDescription: 'Chương trình này là một sáng kiến quan trọng nhằm trang bị cho thế hệ trẻ những kiến thức và kỹ năng cần thiết để phòng chống ma túy. Với sự tham gia của các chuyên gia giáo dục và y tế, chúng tôi cam kết mang đến một môi trường học tập an toàn và bổ ích, giúp các em học sinh phát triển toàn diện và trở thành những công dân có ích cho xã hội. Chương trình tập trung vào việc nâng cao nhận thức, xây dựng khả năng tự bảo vệ và khuyến khích các em tham gia vào các hoạt động lành mạnh.',
    date: '2024-03-01',
    time: '09:00 - 16:00',
    location: 'Trường THPT ABC, Quận 1, TP. HCM',
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
    id: '2',
    title: 'Hội thảo phòng chống ma túy cho phụ huynh',
    description: 'Hội thảo cung cấp kiến thức và kỹ năng cần thiết để phụ huynh đồng hành cùng con cái phòng chống ma túy. Giúp phụ huynh nhận biết dấu hiệu và cách giao tiếp hiệu quả.',
    fullDescription: 'Với vai trò là những người định hướng, cha mẹ đóng vai trò then chốt trong việc bảo vệ con cái khỏi ma túy. Hội thảo này sẽ trang bị cho phụ huynh những công cụ thiết thực để nhận biết sớm các dấu hiệu, hiểu rõ tâm lý lứa tuổi và cách thức trò chuyện cởi mở, xây dựng mối quan hệ tin cậy với con. Mục tiêu là tạo ra một môi trường gia đình an toàn, nơi con cái cảm thấy được yêu thương và hỗ trợ.',
    date: '2024-03-15',
    time: '18:00 - 21:00',
    location: 'Hội trường XYZ, Quận 3, TP. HCM',
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
    id: '3',
    title: 'Khóa tập huấn cho giáo viên về phòng chống ma túy học đường',
    description: 'Khóa tập huấn chuyên sâu nhằm trang bị cho giáo viên những kỹ năng và phương pháp giáo dục phòng chống ma túy hiệu quả trong môi trường học đường.',
    fullDescription: 'Giáo viên là những người tiếp xúc trực tiếp và có ảnh hưởng lớn đến học sinh. Khóa tập huấn này được thiết kế để nâng cao năng lực cho đội ngũ giáo viên trong việc nhận diện, phòng ngừa và can thiệp sớm các trường hợp liên quan đến ma túy trong nhà trường. Chúng tôi cung cấp các kiến thức chuyên sâu, kỹ năng sư phạm và các tình huống thực tế để giáo viên có thể tự tin triển khai các hoạt động giáo dục phòng chống ma túy.',
    date: '2024-04-01',
    time: '08:30 - 17:00',
    location: 'Trung tâm Đào tạo Giáo dục Quận 1, TP. HCM',
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
    id: '4',
    title: 'Tư vấn cộng đồng và hỗ trợ cai nghiện',
    description: 'Cung cấp dịch vụ tư vấn miễn phí và hỗ trợ quá trình cai nghiện, tái hòa nhập cộng đồng cho người sử dụng ma túy và gia đình. Mục tiêu là giúp người nghiện quay lại cuộc sống bình thường.',
    fullDescription: 'Chương trình này là một cầu nối quan trọng, mang đến sự hỗ trợ toàn diện cho những cá nhân đang vật lộn với chứng nghiện ma túy và gia đình họ. Chúng tôi cung cấp các buổi tư vấn chuyên sâu, kết nối với các cơ sở cai nghiện uy tín, và hỗ trợ tái hòa nhập cộng đồng thông qua các chương trình đào tạo nghề, tạo việc làm. Mục tiêu cuối cùng là giúp họ vượt qua khó khăn, xây dựng lại cuộc sống ý nghĩa và bền vững.',
    date: '2024-05-01',
    time: 'Cả ngày',
    location: 'Trung tâm Y tế Cộng đồng, Hẻm 123, Đường Nguyễn Trãi, Q.5, TP.HCM',
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

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSurvey, setOpenSurvey] = useState(false);
  const [surveyType, setSurveyType] = useState(null);
  const [surveyAnswers, setSurveyAnswers] = useState({});

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const foundProgram = mockPrograms.find((p) => p.id === id);
        if (foundProgram) {
          setProgram(foundProgram);
        } else {
          setError('Không tìm thấy chương trình.');
        }
      } catch (err) {
        setError('Đã xảy ra lỗi khi tải chi tiết chương trình.');
      } finally {
        setLoading(false);
      }
    };
    fetchProgram();
  }, [id]);

  const getStatusChip = (status) => {
    switch (status) {
      case 'active':
        return <Chip label="Đang diễn ra" color="success" size="small" icon={<CheckCircleOutlineIcon style={{ fontSize: 16 }} />} />;
      case 'upcoming':
        return <Chip label="Sắp diễn ra" color="primary" size="small" icon={<HourglassEmptyIcon style={{ fontSize: 16 }} />} />;
      case 'completed':
        return <Chip label="Đã hoàn thành" color="info" size="small" icon={<CheckCircleOutlineIcon style={{ fontSize: 16 }} />} />;
      default:
        return <Chip label={status} size="small" />;
    }
  };

  const getTargetIcon = (target) => {
    switch (target) {
      case 'Học sinh':
        return <SchoolIcon sx={{ fontSize: 20 }} />;
      case 'Phụ huynh':
        return <FamilyRestroomIcon sx={{ fontSize: 20 }} />;
      case 'Giáo viên':
        return <Diversity3Icon sx={{ fontSize: 20 }} />;
      case 'Cộng đồng':
        return <Diversity3Icon sx={{ fontSize: 20 }} />;
      default:
        return null;
    }
  };

  const handleSurveyOpen = (type) => {
    setSurveyType(type);
    setSurveyAnswers({}); // Reset answers for new survey
    setOpenSurvey(true);
  };

  const handleSurveyClose = () => {
    setOpenSurvey(false);
    setSurveyType(null);
    setSurveyAnswers({});
  };

  const handleSurveyAnswer = (question, value) => {
    setSurveyAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  const handleSurveySubmit = () => {
    // TODO: Implement survey submission logic
    console.log('Câu trả lời khảo sát:', surveyAnswers);
    alert('Cảm ơn bạn đã hoàn thành khảo sát!'); // User feedback
    handleSurveyClose();
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
            startIcon={<ListAltIcon />}
            onClick={() => navigate('/programs')}
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
            Quay lại danh sách chương trình
          </Button>
        </Box>
      </Container>
    );
  }

  if (!program) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2 }}>Không tìm thấy chương trình này. Vui lòng kiểm tra lại đường dẫn hoặc ID chương trình.</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ListAltIcon />}
            onClick={() => navigate('/programs')}
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
            Quay lại danh sách chương trình
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <ListAltIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          {program.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mx: 'auto' }}>
          {program.description}
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="300"
              image={program.image}
              alt={program.title}
              sx={{ borderRadius: 2, objectFit: 'cover', width: '100%' }}
            />
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              {program.status === 'upcoming' && (
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<EventAvailableIcon />}
                  sx={{
                    bgcolor: '#4caf50',
                    '&:hover': {
                      bgcolor: '#388e3c',
                    },
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.2,
                  }}
                  onClick={() => alert('Đăng ký tham gia chương trình!')}
                >
                  Đăng ký tham gia
                </Button>
              )}
              {program.status === 'active' && (
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<InfoOutlinedIcon />}
                  sx={{
                    bgcolor: '#2196f3',
                    '&:hover': {
                      bgcolor: '#1976d2',
                    },
                    fontWeight: 'bold
                    px: 4,
                    py: 1.2,
                  }}
                  onClick={() => alert('Chương trình đang diễn ra, bạn có thể tham gia ngay!')}
                >
                  Chương trình đang diễn ra
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom fontWeight={700} color="primary.dark">
              Thông tin chi tiết
            </Typography>
            <Stack spacing={2} sx={{ mb: 3 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EventAvailableIcon color="action" />
                <Typography variant="body1" color="text.secondary">
                  Ngày: <Typography component="span" fontWeight="bold">{format(new Date(program.date), 'dd/MM/yyyy')}</Typography> ({program.time})
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={1}>
                <LocationOnIcon color="action" sx={{ mt: '4px' }} />
                <Typography variant="body1" color="text.secondary">
                  Địa điểm: <Typography component="span" fontWeight="bold">{program.location}</Typography>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                {getTargetIcon(program.target)}
                <Typography variant="body1" color="text.secondary">
                  Đối tượng: <Typography component="span" fontWeight="bold">{program.target}</Typography>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                {getStatusChip(program.status)}
              </Stack>
            </Stack>

            <Typography variant="h6" component="h3" gutterBottom fontWeight={600} color="primary.dark" mt={3}>
              Mô tả đầy đủ
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.8, mb: 3 }}>
              {program.fullDescription}
            </Typography>

            {(program.preSurvey || program.postSurvey) && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" component="h3" gutterBottom fontWeight={600} color="primary.dark" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PollIcon color="primary" /> Khảo sát liên quan
                </Typography>
                <Stack direction="row" spacing={2} mt={2}>
                  {program.preSurvey && (
                    <Button
                      variant="outlined"
                      startIcon={<PollIcon />}
                      onClick={() => handleSurveyOpen('pre')}
                      disabled={program.status === 'active' || program.status === 'completed'} // Disable if active or completed for pre-survey
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
                  )}
                  {program.postSurvey && (
                    <Button
                      variant="outlined"
                      startIcon={<PollIcon />}
                      onClick={() => handleSurveyOpen('post')}
                      disabled={program.status === 'upcoming'} // Disable if upcoming for post-survey
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
                  )}
                </Stack>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>

      {/* Survey Dialog */}
      <Dialog open={openSurvey} onClose={handleSurveyClose} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 3, boxShadow: 10 } }}>
        <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white', pb: 2, pt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <PollIcon />
          <Typography variant="h6" component="span" fontWeight={600}>
            {surveyType === 'pre' ? `Khảo sát trước: ${program.title}` : `Khảo sát sau: ${program.title}`}
          </Typography>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 3 }}>
          {program && (
            <Box>
              {(surveyType === 'pre' ? program.preSurvey : program.postSurvey).map(
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

export default ProgramDetail;
