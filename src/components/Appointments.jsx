import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
  CardMedia,
  Stack,
  Chip,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Paper,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  EventNote as EventNoteIcon,
  Psychology as PsychologyIcon,
  FamilyRestroom as FamilyRestroomIcon,
  Groups as GroupsIcon,
  ArrowForward as ArrowForwardIcon,
  Info as InfoIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  VideoCall as VideoCallIcon,
  LocationOn as LocationOnIcon,
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarTodayIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const appointmentTypes = [
  {
    id: 1,
    title: 'Tư vấn cá nhân',
    description: 'Gặp gỡ chuyên gia tâm lý để được tư vấn riêng tư về vấn đề phòng chống và phục hồi sau lạm dụng chất.',
    icon: <PsychologyIcon />,
    duration: '60 phút',
    type: 'individual',
    color: '#1976d2',
    features: ['Tư vấn 1-1', 'Bảo mật tuyệt đối', 'Kế hoạch cá nhân hóa'],
  },
  {
    id: 2,
    title: 'Tư vấn gia đình',
    description: 'Buổi tư vấn dành cho gia đình để cùng nhau tháo gỡ khó khăn và hỗ trợ người thân trong quá trình phục hồi.',
    icon: <FamilyRestroomIcon />,
    duration: '90 phút',
    type: 'family',
    color: '#388e3c',
    features: ['Tư vấn gia đình', 'Hỗ trợ người thân', 'Kỹ năng giao tiếp'],
  },
  {
    id: 3,
    title: 'Trị liệu nhóm',
    description: 'Môi trường an toàn để chia sẻ kinh nghiệm, học hỏi và nhận được sự hỗ trợ từ những người có cùng hoàn cảnh.',
    icon: <GroupsIcon />,
    duration: '120 phút',
    type: 'group',
    color: '#7b1fa2',
    features: ['Nhóm 8-12 người', 'Chia sẻ kinh nghiệm', 'Hỗ trợ lẫn nhau'],
  },
  {
    id: 4,
    title: 'Tư vấn trực tuyến',
    description: 'Tư vấn qua video call cho những ai không thể đến trực tiếp hoặc muốn tư vấn từ xa một cách thuận tiện.',
    icon: <VideoCallIcon />,
    duration: '45 phút',
    type: 'online',
    color: '#f57c00',
    features: ['Tư vấn từ xa', 'Linh hoạt thời gian', 'Tiết kiệm chi phí'],
  },
];

const upcomingAppointments = [
  {
    id: 1,
    title: 'Tư vấn cá nhân',
    counselor: 'TS. Nguyễn Thị Lan',
    date: '2024-03-25',
    time: '14:00',
    type: 'individual',
    location: 'Phòng 201, Tầng 2',
  },
  {
    id: 2,
    title: 'Trị liệu nhóm',
    counselor: 'ThS. Trần Văn Nam',
    date: '2024-03-28',
    time: '10:00',
    type: 'group',
    location: 'Phòng hội thảo A',
  },
];

const Appointments = () => {
  const [openBooking, setOpenBooking] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    counselor: '',
    notes: '',
  });

  const handleBookingOpen = (appointmentType) => {
    setSelectedType(appointmentType);
    setOpenBooking(true);
  };

  const handleBookingClose = () => {
    setOpenBooking(false);
    setSelectedType(null);
    setBookingData({ date: '', time: '', counselor: '', notes: '' });
  };

  const handleBookingSubmit = () => {
    console.log('Booking data:', { ...bookingData, type: selectedType });
    alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn để xác nhận.');
    handleBookingClose();
  };

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 3,
          }}
        >
          <EventNoteIcon sx={{ fontSize: 40, color: 'white' }} />
        </Avatar>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
        Đặt lịch tư vấn
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
          Chọn loại hình tư vấn phù hợp với nhu cầu của bạn. Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
        </Typography>
      </Box>

      {/* Upcoming Appointments */}
      {upcomingAppointments.length > 0 && (
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom color="primary.dark" sx={{ mb: 4 }}>
            Lịch hẹn sắp tới
      </Typography>
      <Grid container spacing={3}>
            {upcomingAppointments.map((appointment) => (
              <Grid item xs={12} md={6} key={appointment.id}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'primary.light',
                    background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" fontWeight={600} gutterBottom color="primary.dark">
                  {appointment.title}
                </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {appointment.counselor}
                      </Typography>
                    </Box>
                    <Chip 
                      label="Sắp tới" 
                      color="primary" 
                      size="small"
                      icon={<AccessTimeIcon />}
                    />
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" fontWeight={500}>
                          {new Date(appointment.date).toLocaleDateString('vi-VN')}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" fontWeight={500}>
                          {appointment.time}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" fontWeight={500}>
                          {appointment.location}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Appointment Types */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom color="primary.dark" sx={{ mb: 4 }}>
          Các loại hình tư vấn
        </Typography>
        <Grid container spacing={4}>
          {appointmentTypes.map((appointmentType) => (
            <Grid item xs={12} sm={6} md={6} key={appointmentType.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.1)',
                    '& .appointment-icon': {
                      transform: 'scale(1.1)',
                      backgroundColor: appointmentType.color,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${appointmentType.color}20 0%, ${appointmentType.color}10 100%)`,
                    p: 4,
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    className="appointment-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: `${appointmentType.color}30`,
                      color: appointmentType.color,
                      mx: 'auto',
                      mb: 2,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {React.cloneElement(appointmentType.icon, { sx: { fontSize: 40 } })}
                  </Avatar>
                  <Typography variant="h5" fontWeight={700} gutterBottom color="text.primary">
                    {appointmentType.title}
                  </Typography>
                  <Chip 
                    label={appointmentType.duration} 
                    size="small" 
                    sx={{ 
                      bgcolor: appointmentType.color,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                </Box>
                
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {appointmentType.description}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom color="text.primary">
                      Đặc điểm nổi bật:
                    </Typography>
                    <Stack spacing={1}>
                      {appointmentType.features.map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: appointmentType.color }} />
                          <Typography variant="body2" color="text.secondary">
                            {feature}
                </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    endIcon={<ScheduleIcon />}
                    onClick={() => handleBookingOpen(appointmentType)}
                    sx={{
                      mt: 'auto',
                      backgroundColor: appointmentType.color,
                      '&:hover': {
                        backgroundColor: appointmentType.color,
                        filter: 'brightness(0.9)',
                      },
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: 'none',
                    }}
                  >
                    Đặt lịch ngay
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

      {/* Quick Actions */}
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom color="primary.dark">
          Cần hỗ trợ khẩn cấp?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Liên hệ ngay với đường dây nóng của chúng tôi để được hỗ trợ 24/7
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #e53935 0%, #c62828 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #c62828 0%, #b71c1c 100%)',
              },
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Gọi ngay: 1900 1234
          </Button>
          <Button
            component={RouterLink}
            to="/profile"
            variant="outlined"
            size="large"
            startIcon={<InfoIcon />}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Xem lịch sử tư vấn
          </Button>
        </Stack>
      </Paper>

      {/* Booking Dialog */}
      <Dialog 
        open={openBooking} 
        onClose={handleBookingClose} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <DialogTitle sx={{ 
          bgcolor: selectedType?.color || 'primary.main', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          pb: 2,
        }}>
          {selectedType && React.cloneElement(selectedType.icon, { sx: { fontSize: 28 } })}
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Đặt lịch {selectedType?.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Thời gian: {selectedType?.duration}
            </Typography>
          </Box>
        </DialogTitle>
        
        <DialogContent sx={{ p: 4 }}>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ngày hẹn"
                type="date"
                value={bookingData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: new Date().toISOString().split('T')[0] }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Giờ hẹn</InputLabel>
                <Select
                  value={bookingData.time}
                  label="Giờ hẹn"
                  onChange={(e) => handleInputChange('time', e.target.value)}
                >
                  {['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                    <MenuItem key={time} value={time}>{time}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Chuyên gia tư vấn</InputLabel>
                <Select
                  value={bookingData.counselor}
                  label="Chuyên gia tư vấn"
                  onChange={(e) => handleInputChange('counselor', e.target.value)}
                >
                  <MenuItem value="TS. Nguyễn Thị Lan">TS. Nguyễn Thị Lan</MenuItem>
                  <MenuItem value="ThS. Trần Văn Nam">ThS. Trần Văn Nam</MenuItem>
                  <MenuItem value="BS. Lê Thị Hương">BS. Lê Thị Hương</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ghi chú (tùy chọn)"
                multiline
                rows={3}
                value={bookingData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Chia sẻ thêm về tình trạng hoặc mong muốn của bạn..."
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, gap: 2 }}>
          <Button
            onClick={handleBookingClose}
            variant="outlined"
            startIcon={<CloseIcon />}
            sx={{ borderRadius: 2 }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleBookingSubmit}
            variant="contained"
            startIcon={<CheckCircleIcon />}
            disabled={!bookingData.date || !bookingData.time || !bookingData.counselor}
            sx={{
              backgroundColor: selectedType?.color || 'primary.main',
              '&:hover': {
                backgroundColor: selectedType?.color || 'primary.dark',
                filter: 'brightness(0.9)',
              },
              borderRadius: 2,
              px: 3,
            }}
          >
            Xác nhận đặt lịch
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Appointments; 