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
  Divider,
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
  Groups as GroupsIcon,
  CalendarToday as CalendarTodayIcon,
  AccessTime as AccessTimeIcon,
  ArrowBack as ArrowBackIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';

const mockPrograms = [
  {
    id: '1',
    title: 'Chương trình giáo dục phòng chống ma túy cho học sinh',
    description: 'Chương trình giáo dục toàn diện dành cho học sinh THPT, giúp các em nhận diện và phòng tránh ma túy.',
    fullDescription: 'Chương trình này là một sáng kiến quan trọng nhằm trang bị cho thế hệ trẻ những kiến thức và kỹ năng cần thiết để phòng chống ma túy. Với sự tham gia của các chuyên gia giáo dục và y tế, chúng tôi cam kết mang đến một môi trường học tập an toàn và bổ ích, giúp các em học sinh phát triển toàn diện và trở thành những công dân có ích cho xã hội. Chương trình tập trung vào việc nâng cao nhận thức, xây dựng khả năng tự bảo vệ và khuyến khích các em tham gia vào các hoạt động lành mạnh.',
    date: '2024-03-01',
    time: '09:00 - 16:00',
    location: 'Trường THPT ABC, Quận 1, TP. HCM',
    target: 'Học sinh',
    status: 'active',
    image: '/images/programs/program1.jpg',
    duration: '1 ngày',
    participants: '150 học sinh',
    objectives: [
      'Nâng cao nhận thức về tác hại của ma túy',
      'Trang bị kỹ năng từ chối và tự bảo vệ',
      'Xây dựng lối sống lành mạnh và tích cực',
      'Tạo môi trường học đường an toàn',
    ],
    agenda: [
      { time: '09:00 - 10:30', activity: 'Khai mạc và giới thiệu chương trình' },
      { time: '10:45 - 12:00', activity: 'Kiến thức cơ bản về ma túy và tác hại' },
      { time: '13:30 - 15:00', activity: 'Kỹ năng từ chối và tự bảo vệ' },
      { time: '15:15 - 16:00', activity: 'Thảo luận nhóm và tổng kết' },
    ],
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
    description: 'Hội thảo cung cấp kiến thức và kỹ năng cần thiết để phụ huynh đồng hành cùng con cái phòng chống ma túy.',
    fullDescription: 'Với vai trò là những người định hướng, cha mẹ đóng vai trò then chốt trong việc bảo vệ con cái khỏi ma túy. Hội thảo này sẽ trang bị cho phụ huynh những công cụ thiết thực để nhận biết sớm các dấu hiệu, hiểu rõ tâm lý lứa tuổi và cách thức trò chuyện cởi mở, xây dựng mối quan hệ tin cậy với con. Mục tiêu là tạo ra một môi trường gia đình an toàn, nơi con cái cảm thấy được yêu thương và hỗ trợ.',
    date: '2024-03-15',
    time: '18:00 - 21:00',
    location: 'Hội trường XYZ, Quận 3, TP. HCM',
    target: 'Phụ huynh',
    status: 'upcoming',
    image: '/images/programs/program2.jpg',
    duration: '3 giờ',
    participants: '80 phụ huynh',
    objectives: [
      'Nhận biết sớm các dấu hiệu sử dụng ma túy',
      'Cải thiện kỹ năng giao tiếp với con cái',
      'Xây dựng môi trường gia đình an toàn',
      'Kết nối với cộng đồng phụ huynh',
    ],
    agenda: [
      { time: '18:00 - 18:30', activity: 'Đăng ký và tiếp đón' },
      { time: '18:30 - 19:30', activity: 'Nhận biết dấu hiệu và yếu tố nguy cơ' },
      { time: '19:45 - 20:45', activity: 'Kỹ năng giao tiếp và hỗ trợ con cái' },
      { time: '20:45 - 21:00', activity: 'Hỏi đáp và kết thúc' },
    ],
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
    description: 'Khóa tập huấn chuyên sâu nhằm trang bị cho giáo viên những kỹ năng và phương pháp giáo dục phòng chống ma túy hiệu quả.',
    fullDescription: 'Giáo viên là những người tiếp xúc trực tiếp và có ảnh hưởng lớn đến học sinh. Khóa tập huấn này được thiết kế để nâng cao năng lực cho đội ngũ giáo viên trong việc nhận diện, phòng ngừa và can thiệp sớm các trường hợp liên quan đến ma túy trong nhà trường. Chúng tôi cung cấp các kiến thức chuyên sâu, kỹ năng sư phạm và các tình huống thực tế để giáo viên có thể tự tin triển khai các hoạt động giáo dục phòng chống ma túy.',
    date: '2024-04-01',
    time: '08:30 - 17:00',
    location: 'Trung tâm Đào tạo Giáo dục Quận 1, TP. HCM',
    target: 'Giáo viên',
    status: 'upcoming',
    image: '/images/programs/program3.jpg',
    duration: '2 ngày',
    participants: '60 giáo viên',
    objectives: [
      'Nâng cao năng lực nhận diện và can thiệp sớm',
      'Trang bị phương pháp giáo dục hiệu quả',
      'Xây dựng môi trường học đường an toàn',
      'Kết nối mạng lưới giáo viên',
    ],
    agenda: [
      { time: '08:30 - 09:00', activity: 'Đăng ký và khai mạc' },
      { time: '09:00 - 10:30', activity: 'Kiến thức chuyên sâu về ma túy' },
      { time: '10:45 - 12:00', activity: 'Phương pháp giáo dục phòng chống ma túy' },
      { time: '13:30 - 15:00', activity: 'Thực hành và tình huống mô phỏng' },
      { time: '15:15 - 16:30', activity: 'Chia sẻ kinh nghiệm và tổng kết' },
    ],
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
    description: 'Cung cấp dịch vụ tư vấn miễn phí và hỗ trợ quá trình cai nghiện, tái hòa nhập cộng đồng cho người sử dụng ma túy và gia đình.',
    fullDescription: 'Chương trình này là một cầu nối quan trọng, mang đến sự hỗ trợ toàn diện cho những cá nhân đang vật lộn với chứng nghiện ma túy và gia đình họ. Chúng tôi cung cấp các buổi tư vấn chuyên sâu, kết nối với các cơ sở cai nghiện uy tín, và hỗ trợ tái hòa nhập cộng đồng thông qua các chương trình đào tạo nghề, tạo việc làm. Mục tiêu cuối cùng là giúp họ vượt qua khó khăn, xây dựng lại cuộc sống ý nghĩa và bền vững.',
    date: '2024-05-01',
    time: 'Cả ngày',
    location: 'Trung tâm Y tế Cộng đồng, TP.HCM',
    target: 'Cộng đồng',
    status: 'active',
    image: '/images/programs/program4.jpg',
    duration: 'Liên tục',
    participants: 'Không giới hạn',
    objectives: [
      'Cung cấp tư vấn chuyên nghiệp và miễn phí',
      'Hỗ trợ quá trình cai nghiện và phục hồi',
      'Tái hòa nhập cộng đồng thành công',
      'Hỗ trợ gia đình và người thân',
    ],
    agenda: [
      { time: '08:00 - 12:00', activity: 'Tư vấn cá nhân và gia đình' },
      { time: '14:00 - 16:00', activity: 'Nhóm hỗ trợ và chia sẻ kinh nghiệm' },
      { time: '16:00 - 17:00', activity: 'Hoạt động trị liệu và phục hồi' },
      { time: '19:00 - 20:30', activity: 'Tư vấn trực tuyến và hỗ trợ khẩn cấp' },
    ],
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
        return <Chip label="Đang diễn ra" color="success" size="medium" icon={<CheckCircleOutlineIcon style={{ fontSize: 18 }} />} />;
      case 'upcoming':
        return <Chip label="Sắp diễn ra" color="primary" size="medium" icon={<HourglassEmptyIcon style={{ fontSize: 18 }} />} />;
      case 'completed':
        return <Chip label="Đã hoàn thành" color="info" size="medium" icon={<CheckCircleOutlineIcon style={{ fontSize: 18 }} />} />;
      default:
        return <Chip label={status} size="medium" />;
    }
  };

  const getTargetIcon = (target) => {
    switch (target) {
      case 'Học sinh':
        return <SchoolIcon sx={{ fontSize: 24, color: '#42a5f5' }} />;
      case 'Phụ huynh':
        return <FamilyRestroomIcon sx={{ fontSize: 24, color: '#42a5f5' }} />;
      case 'Giáo viên':
        return <Diversity3Icon sx={{ fontSize: 24, color: '#42a5f5' }} />;
      case 'Cộng đồng':
        return <GroupsIcon sx={{ fontSize: 24, color: '#42a5f5' }} />;
      default:
        return null;
    }
  };

  const handleSurveyOpen = (type) => {
    setSurveyType(type);
    setSurveyAnswers({});
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
    console.log('Câu trả lời khảo sát:', surveyAnswers);
    alert('Cảm ơn bạn đã hoàn thành khảo sát!');
    handleSurveyClose();
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress size={60} sx={{ color: 'primary.main' }} />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ boxShadow: 3, borderRadius: 2, mb: 3 }}>
          {error}
        </Alert>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/programs')}
            sx={{
              px: 4,
              py: 1.2,
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
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2, mb: 3 }}>
          Không tìm thấy chương trình này.
        </Alert>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/programs')}
            sx={{
              px: 4,
              py: 1.2,
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
      {/* Back Button */}
      <Box sx={{ mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/programs')}
          sx={{ color: '#666', '&:hover': { backgroundColor: '#f5f5f5' } }}
        >
          Quay lại danh sách chương trình
        </Button>
      </Box>

      {/* Program Header */}
      <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden', mb: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={program.image || '/images/programs/default.jpg'}
          alt={program.title}
          sx={{ objectFit: 'cover' }}
        />
        <Box sx={{ p: 4 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            {getTargetIcon(program.target)}
            <Chip 
              label={program.target} 
              sx={{ 
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                fontWeight: 600,
              }} 
            />
            {getStatusChip(program.status)}
          </Stack>
          
          <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
            {program.title}
        </Typography>
          
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
            {program.description}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarTodayIcon sx={{ fontSize: 20, color: '#666' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">Ngày tổ chức</Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {new Date(program.date).toLocaleDateString('vi-VN')}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <AccessTimeIcon sx={{ fontSize: 20, color: '#666' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">Thời gian</Typography>
                  <Typography variant="body1" fontWeight={600}>{program.time}</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnIcon sx={{ fontSize: 20, color: '#666' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">Địa điểm</Typography>
                  <Typography variant="body1" fontWeight={600}>{program.location}</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <GroupsIcon sx={{ fontSize: 20, color: '#666' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">Số lượng</Typography>
                  <Typography variant="body1" fontWeight={600}>{program.participants}</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Program Description */}
          <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark" sx={{ mb: 3 }}>
              Giới thiệu chương trình
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
              {program.fullDescription}
            </Typography>
          </Paper>

          {/* Program Objectives */}
          <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark" sx={{ mb: 3 }}>
              Mục tiêu chương trình
            </Typography>
            <Grid container spacing={2}>
              {program.objectives?.map((objective, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <CheckCircleOutlineIcon sx={{ color: '#4caf50', fontSize: 20, mt: 0.2 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {objective}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Program Agenda */}
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark" sx={{ mb: 3 }}>
              Chương trình chi tiết
            </Typography>
            <Stack spacing={3}>
              {program.agenda?.map((item, index) => (
                <Box key={index}>
                  <Stack direction="row" spacing={3} alignItems="flex-start">
                    <Chip 
                      label={item.time} 
                      size="small" 
                      sx={{ 
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        fontWeight: 600,
                        minWidth: '120px',
                      }} 
                    />
                    <Typography variant="body1" sx={{ lineHeight: 1.6, flex: 1 }}>
                      {item.activity}
                    </Typography>
                  </Stack>
                  {index < program.agenda.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Registration Card */}
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mb: 3, background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)' }}>
            <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark">
              Tham gia chương trình
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Đăng ký ngay để không bỏ lỡ cơ hội tham gia chương trình bổ ích này.
            </Typography>
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<PersonAddIcon />}
              sx={{
                backgroundColor: '#4caf50',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Đăng ký tham gia
            </Button>
            <Stack direction="row" spacing={1}>
              <Button
                fullWidth
                variant="outlined"
                size="medium"
                startIcon={<PollIcon />}
                onClick={() => handleSurveyOpen('pre')}
                sx={{ 
                  borderColor: '#42a5f5',
                  color: '#42a5f5',
                  '&:hover': {
                    borderColor: '#1976d2',
                    backgroundColor: '#e3f2fd',
                  },
                }}
              >
                Khảo sát trước
              </Button>
              <Button
                fullWidth
                variant="outlined"
                size="medium"
                startIcon={<PollIcon />}
                onClick={() => handleSurveyOpen('post')}
                sx={{ 
                  borderColor: '#4caf50',
                  color: '#4caf50',
                  '&:hover': {
                    borderColor: '#388e3c',
                    backgroundColor: '#e8f5e9',
                  },
                }}
              >
                Khảo sát sau
              </Button>
            </Stack>
          </Paper>

          {/* Program Info */}
          <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark">
              Thông tin chương trình
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" color="text.secondary">Thời lượng</Typography>
                <Typography variant="body1" fontWeight={600}>{program.duration}</Typography>
              </Box>
              <Divider />
              <Box>
                <Typography variant="body2" color="text.secondary">Đối tượng</Typography>
                <Typography variant="body1" fontWeight={600}>{program.target}</Typography>
              </Box>
              <Divider />
              <Box>
                <Typography variant="body2" color="text.secondary">Số lượng tham gia</Typography>
                <Typography variant="body1" fontWeight={600}>{program.participants}</Typography>
              </Box>
              <Divider />
              <Box>
                <Typography variant="body2" color="text.secondary">Trạng thái</Typography>
                {getStatusChip(program.status)}
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Survey Dialog */}
      <Dialog 
        open={openSurvey} 
        onClose={handleSurveyClose} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        <DialogTitle sx={{ pb: 1, backgroundColor: '#f5f5f5' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <PollIcon color="primary" />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {surveyType === 'pre' ? 'Khảo sát trước chương trình' : 'Khảo sát sau chương trình'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {program.title}
              </Typography>
            </Box>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
            Vui lòng trả lời các câu hỏi dưới đây để giúp chúng tôi cải thiện chương trình.
          </Alert>
          {(surveyType === 'pre' ? program.preSurvey : program.postSurvey).map((question, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                {index + 1}. {question}
              </Typography>
              <RadioGroup
                value={surveyAnswers[question] || ''}
                onChange={(e) => handleSurveyAnswer(question, e.target.value)}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Có" />
                <FormControlLabel value="no" control={<Radio />} label="Không" />
                <FormControlLabel value="maybe" control={<Radio />} label="Có thể" />
              </RadioGroup>
            </Box>
          ))}
        </DialogContent>
        <DialogActions sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
          <Button 
            onClick={handleSurveyClose} 
            startIcon={<CancelIcon />}
            sx={{ color: '#666' }}
          >
            Hủy
          </Button>
          <Button 
            onClick={handleSurveySubmit} 
            variant="contained" 
            startIcon={<SendIcon />}
            sx={{
              backgroundColor: '#4caf50',
              '&:hover': {
                backgroundColor: '#388e3c',
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
