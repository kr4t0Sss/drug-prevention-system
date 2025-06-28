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
  Paper,
  IconButton,
  Tooltip,
  Alert,
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
  Groups as GroupsIcon,
  CalendarToday as CalendarTodayIcon,
  AccessTime as AccessTimeIcon,
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
    duration: '1 ngày',
    participants: '150 học sinh',
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
    duration: '3 giờ',
    participants: '80 phụ huynh',
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
    description: 'Khóa tập huấn chuyên sâu nhằm trang bị cho giáo viên những kỹ năng và phương pháp giáo dục phòng chống ma túy hiệu quả.',
    date: '2024-04-01',
    location: 'Trung tâm Đào tạo Giáo dục Quận 1',
    target: 'Giáo viên',
    status: 'upcoming',
    image: '/images/programs/program3.jpg',
    duration: '2 ngày',
    participants: '60 giáo viên',
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
    duration: 'Liên tục',
    participants: 'Không giới hạn',
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
    console.log('Câu trả lời khảo sát:', surveyAnswers);
    alert('Cảm ơn bạn đã hoàn thành khảo sát!');
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
      case 'completed':
        return <Chip label="Đã hoàn thành" color="info" size="small" icon={<CheckCircleOutlineIcon style={{ fontSize: 16 }} />} />;
      default:
        return <Chip label={status} size="small" />;
    }
  };

  const getTargetIcon = (target) => {
    switch (target) {
      case 'Học sinh':
        return <SchoolIcon style={{ fontSize: 20, color: '#42a5f5' }} />;
      case 'Phụ huynh':
        return <FamilyRestroomIcon style={{ fontSize: 20, color: '#42a5f5' }} />;
      case 'Giáo viên':
        return <Diversity3Icon style={{ fontSize: 20, color: '#42a5f5' }} />;
      case 'Cộng đồng':
        return <GroupsIcon style={{ fontSize: 20, color: '#42a5f5' }} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <GroupsIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Các chương trình cộng đồng
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Khám phá các chương trình giáo dục, hội thảo, và hỗ trợ cộng đồng của chúng tôi nhằm tăng cường nhận thức và phòng chống ma túy hiệu quả.
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 3, background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)' }}>
        <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark">
          Tại sao tham gia các chương trình của chúng tôi?
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <SchoolIcon sx={{ fontSize: 50, color: '#4caf50', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>Giáo dục toàn diện</Typography>
              <Typography color="text.secondary">
                Cung cấp kiến thức chuyên sâu và thực tiễn về phòng chống ma túy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <GroupsIcon sx={{ fontSize: 50, color: '#ff9800', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>Cộng đồng hỗ trợ</Typography>
              <Typography color="text.secondary">
                Kết nối với cộng đồng quan tâm và các chuyên gia trong lĩnh vực
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 50, color: '#2196f3', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>Hiệu quả thực tế</Typography>
              <Typography color="text.secondary">
                Các phương pháp đã được kiểm chứng và áp dụng thành công
      </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Programs Grid */}
      <Grid container spacing={4}>
        {programs.map((program) => (
          <Grid item xs={12} md={6} lg={6} key={program.id}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%', 
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={program.image || '/images/programs/default.jpg'}
                alt={program.title}
                sx={{ 
                  objectFit: 'cover',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <CardContent sx={{ p: 3, height: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    {getTargetIcon(program.target)}
                  <Chip
                    label={program.target}
                    size="small"
                      sx={{ 
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        fontWeight: 600,
                      }} 
                    />
                    {getStatusChip(program.status)}
                </Stack>
                  <Typography variant="h6" component="h3" fontWeight={700} color="text.primary" sx={{ mb: 1 }}>
                  {program.title}
                </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                  {program.description}
                </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <CalendarTodayIcon sx={{ fontSize: 16, color: '#666' }} />
                      <Typography variant="body2" color="text.secondary">
                        {new Date(program.date).toLocaleDateString('vi-VN')}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOnIcon sx={{ fontSize: 16, color: '#666' }} />
                      <Typography variant="body2" color="text.secondary">
                        {program.location}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <AccessTimeIcon sx={{ fontSize: 16, color: '#666' }} />
                      <Typography variant="body2" color="text.secondary">
                        {program.duration}
                </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <GroupsIcon sx={{ fontSize: 16, color: '#666' }} />
                      <Typography variant="body2" color="text.secondary">
                        {program.participants}
                </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<PollIcon />}
                      onClick={() => handleSurveyOpen(program, 'pre')}
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
                      size="small"
                      variant="outlined"
                      startIcon={<PollIcon />}
                      onClick={() => handleSurveyOpen(program, 'post')}
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
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<InfoOutlinedIcon />}
                    onClick={() => navigate(`/programs/${program.id}`)}
                    sx={{
                      backgroundColor: '#2196f3',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                      },
                      py: 1.2,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                    }}
                  >
                    Xem chi tiết
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
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
                {selectedProgram?.title}
              </Typography>
            </Box>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          {selectedProgram && (
            <Box>
              <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
                Vui lòng trả lời các câu hỏi dưới đây để giúp chúng tôi cải thiện chương trình.
              </Alert>
              {(surveyType === 'pre' ? selectedProgram.preSurvey : selectedProgram.postSurvey).map((question, index) => (
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
            </Box>
          )}
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

export default ProgramList; 