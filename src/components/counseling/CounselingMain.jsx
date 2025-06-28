import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Chip,
  Stack,
  Divider,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Psychology as PsychologyIcon,
  Schedule as ScheduleIcon,
  VideoCall as VideoCallIcon,
  Phone as PhoneIcon,
  Chat as ChatIcon,
  Person as PersonIcon,
  Star as StarIcon,
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Help as HelpIcon,
  ExpandMore as ExpandMoreIcon,
  Emergency as EmergencyIcon,
  Support as SupportIcon,
  Group as GroupIcon,
  EventAvailable as EventAvailableIcon,
  Favorite as FavoriteIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CounselingMain = () => {
  const navigate = useNavigate();
  const [openBooking, setOpenBooking] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Mock data for counselors
  const counselors = [
    {
      id: 1,
      name: 'TS. Nguyễn Thị Minh Hạnh',
      specialty: 'Tâm lý học lâm sàng',
      experience: '15 năm',
      rating: 4.9,
      avatar: '/images/counselors/counselor1.jpg',
      available: true,
      languages: ['Tiếng Việt', 'English'],
      certifications: ['Chứng chỉ Tâm lý trị liệu', 'Chuyên gia Phòng chống Ma túy'],
    },
    {
      id: 2,
      name: 'ThS. Trần Văn Đức',
      specialty: 'Tư vấn nghiện chất',
      experience: '12 năm',
      rating: 4.8,
      avatar: '/images/counselors/counselor2.jpg',
      available: true,
      languages: ['Tiếng Việt'],
      certifications: ['Chứng chỉ Tư vấn nghiện', 'Chuyên gia Phục hồi chức năng'],
    },
    {
      id: 3,
      name: 'ThS. Lê Thị Thu Hương',
      specialty: 'Tâm lý gia đình',
      experience: '10 năm',
      rating: 4.7,
      avatar: '/images/counselors/counselor3.jpg',
      available: false,
      languages: ['Tiếng Việt', 'English'],
      certifications: ['Chứng chỉ Tư vấn gia đình', 'Chuyên gia Trị liệu hôn nhân'],
    },
  ];

  // Emergency contacts
  const emergencyContacts = [
    {
      name: 'Đường dây nóng Phòng chống Ma túy',
      phone: '1900 1234',
      description: '24/7 - Miễn phí',
      type: 'emergency'
    },
    {
      name: 'Tư vấn khẩn cấp',
      phone: '113',
      description: 'Cảnh sát - Cấp cứu',
      type: 'emergency'
    },
    {
      name: 'Hỗ trợ tâm lý',
      phone: '1800 6969',
      description: 'Tư vấn tâm lý 24/7',
      type: 'support'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Tôi có thể đặt lịch tư vấn như thế nào?',
      answer: 'Bạn có thể đặt lịch tư vấn bằng cách nhấn nút "Đặt lịch tư vấn" trên trang này, chọn chuyên gia phù hợp và thời gian thuận tiện. Chúng tôi cũng hỗ trợ đặt lịch qua điện thoại.'
    },
    {
      question: 'Dịch vụ tư vấn có miễn phí không?',
      answer: 'Buổi tư vấn đầu tiên (30 phút) hoàn toàn miễn phí. Các buổi tư vấn tiếp theo sẽ có mức phí hợp lý, với nhiều gói ưu đãi cho học sinh, sinh viên.'
    },
    {
      question: 'Thông tin cá nhân có được bảo mật không?',
      answer: 'Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của bạn. Mọi thông tin tư vấn đều được mã hóa và chỉ chuyên gia được phân công mới có quyền truy cập.'
    },
    {
      question: 'Tôi có thể tư vấn trực tuyến không?',
      answer: 'Có, chúng tôi hỗ trợ tư vấn trực tuyến qua video call, chat hoặc điện thoại. Bạn có thể lựa chọn hình thức phù hợp nhất với mình.'
    }
  ];

  const handleBookingOpen = () => {
    setOpenBooking(true);
  };

  const handleBookingClose = () => {
    setOpenBooking(false);
    setSelectedCounselor('');
    setSelectedTime('');
    setSelectedType('');
  };

  const handleBookingSubmit = () => {
    // Handle booking submission
    alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    handleBookingClose();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <PsychologyIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Tư Vấn Tâm Lý
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
          Dịch vụ tư vấn chuyên nghiệp, an toàn và bảo mật cho mọi vấn đề liên quan đến ma túy và sức khỏe tâm thần
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Chip icon={<SecurityIcon />} label="Bảo mật tuyệt đối" color="success" />
          <Chip icon={<AccessTimeIcon />} label="24/7 hỗ trợ" color="primary" />
          <Chip icon={<FavoriteIcon />} label="Miễn phí buổi đầu" color="secondary" />
        </Stack>
      </Box>

      {/* Emergency Alert */}
      <Alert 
        severity="error" 
        sx={{ mb: 4, borderRadius: 2 }}
        icon={<EmergencyIcon />}
      >
        <Typography variant="h6" gutterBottom>
          Cần hỗ trợ khẩn cấp?
        </Typography>
        <Typography>
          Gọi ngay <strong>1900 1234</strong> (24/7) hoặc <strong>113</strong> trong trường hợp khẩn cấp
        </Typography>
      </Alert>

      {/* Quick Actions */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card 
            elevation={3} 
            sx={{ 
              height: '100%', 
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' }
            }}
            onClick={handleBookingOpen}
          >
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <ScheduleIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Đặt Lịch Tư Vấn
              </Typography>
              <Typography color="text.secondary">
                Đặt lịch với chuyên gia tâm lý chỉ trong vài bước đơn giản
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card 
            elevation={3} 
            sx={{ 
              height: '100%', 
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' }
            }}
            onClick={() => navigate('/counseling')}
          >
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <ChatIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Tư Vấn Trực Tuyến
              </Typography>
              <Typography color="text.secondary">
                Chat trực tiếp với chuyên gia hoặc tham gia phòng tư vấn nhóm
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card 
            elevation={3} 
            sx={{ 
              height: '100%', 
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' }
            }}
            onClick={() => navigate('/counselors')}
          >
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <GroupIcon sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Chuyên Gia
              </Typography>
              <Typography color="text.secondary">
                Tìm hiểu về đội ngũ chuyên gia tâm lý giàu kinh nghiệm
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Featured Counselors */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom fontWeight={600} color="primary.dark" sx={{ mb: 3 }}>
          Đội Ngũ Chuyên Gia
        </Typography>
        <Grid container spacing={3}>
          {counselors.map((counselor) => (
            <Grid item xs={12} md={4} key={counselor.id}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={counselor.avatar} 
                      sx={{ width: 60, height: 60, mr: 2 }}
                    >
                      <PersonIcon />
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" fontWeight={600}>
                        {counselor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {counselor.specialty}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <StarIcon sx={{ color: 'warning.main', fontSize: 16 }} />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                          {counselor.rating} • {counselor.experience}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {counselor.available && (
                      <Chip label="Có thể đặt lịch" color="success" size="small" />
                    )}
                    {!counselor.available && (
                      <Chip label="Bận" color="default" size="small" />
                    )}
                  </Stack>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    <strong>Ngôn ngữ:</strong> {counselor.languages.join(', ')}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    <strong>Chứng chỉ:</strong> {counselor.certifications.join(', ')}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    variant="contained"
                    disabled={!counselor.available}
                    onClick={handleBookingOpen}
                    startIcon={<ScheduleIcon />}
                  >
                    Đặt lịch
                  </Button>
                  <Button 
                    size="small" 
                    onClick={() => navigate(`/counselors/${counselor.id}`)}
                  >
                    Xem chi tiết
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Emergency Contacts */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 3, bgcolor: 'error.light', color: 'white' }}>
        <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
          Liên Hệ Khẩn Cấp
        </Typography>
        <Grid container spacing={2}>
          {emergencyContacts.map((contact, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ bgcolor: 'rgba(255,255,255,0.9)' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {contact.type === 'emergency' ? (
                      <EmergencyIcon sx={{ color: 'error.main', mr: 1 }} />
                    ) : (
                      <SupportIcon sx={{ color: 'primary.main', mr: 1 }} />
                    )}
                    <Typography variant="h6" fontWeight={600} color="text.primary">
                      {contact.name}
                    </Typography>
                  </Box>
                  <Typography variant="h5" color="primary.main" fontWeight={700}>
                    {contact.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {contact.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* FAQ Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom fontWeight={600} color="primary.dark" sx={{ mb: 3 }}>
          Câu Hỏi Thường Gặp
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} elevation={1}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight={500}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      {/* Booking Dialog */}
      <Dialog open={openBooking} onClose={handleBookingClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h5" fontWeight={600}>
            Đặt Lịch Tư Vấn
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Chọn chuyên gia</InputLabel>
              <Select
                value={selectedCounselor}
                onChange={(e) => setSelectedCounselor(e.target.value)}
                label="Chọn chuyên gia"
              >
                {counselors.filter(c => c.available).map((counselor) => (
                  <MenuItem key={counselor.id} value={counselor.id}>
                    {counselor.name} - {counselor.specialty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Hình thức tư vấn</InputLabel>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                label="Hình thức tư vấn"
              >
                <MenuItem value="online">Tư vấn trực tuyến</MenuItem>
                <MenuItem value="phone">Tư vấn qua điện thoại</MenuItem>
                <MenuItem value="offline">Tư vấn trực tiếp</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Thời gian</InputLabel>
              <Select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                label="Thời gian"
              >
                <MenuItem value="morning">Sáng (8:00 - 12:00)</MenuItem>
                <MenuItem value="afternoon">Chiều (13:00 - 17:00)</MenuItem>
                <MenuItem value="evening">Tối (18:00 - 21:00)</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Ghi chú (tùy chọn)"
              placeholder="Mô tả ngắn gọn vấn đề bạn muốn tư vấn..."
              sx={{ mb: 2 }}
            />

            <Alert severity="info">
              <Typography variant="body2">
                💡 Buổi tư vấn đầu tiên (30 phút) hoàn toàn miễn phí. 
                Chúng tôi sẽ liên hệ xác nhận lịch hẹn trong vòng 24h.
              </Typography>
            </Alert>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleBookingClose}>
            Hủy
          </Button>
          <Button 
            variant="contained" 
            onClick={handleBookingSubmit}
            disabled={!selectedCounselor || !selectedType || !selectedTime}
          >
            Đặt lịch
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CounselingMain; 