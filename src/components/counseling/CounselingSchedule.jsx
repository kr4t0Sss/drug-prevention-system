import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Avatar,
  Divider,
  Container,
  Stack,
  InputAdornment,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useCounseling } from '../../contexts/CounselingContext';
import {
  EventAvailable as EventAvailableIcon,
  Check,
  Schedule,
  Person,
  AssignmentTurnedIn,
  ArrowBackIosNew as ArrowBackIosNewIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Subject as SubjectIcon,
  CalendarMonth as CalendarMonthIcon,
  AccessTime as AccessTimeIcon,
  MeetingRoom as MeetingRoomIcon,
  Videocam as VideocamIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Home as HomeIcon,
} from '@mui/icons-material';

const counselors = {
  '1': {
    id: '1',
    name: 'Tiến sĩ Nguyễn Thị Hương',
    title: 'Nhà tâm lý học lâm sàng có giấy phép',
    imageUrl: '/images/counselors/sarah-johnson.jpg',
    sessionTypes: ['video', 'in-person'],
  },
  '2': {
    id: '2',
    name: 'Tiến sĩ Trần Văn Minh',
    title: 'Chuyên gia về nghiện',
    imageUrl: '/images/counselors/michael-chen.jpg',
    sessionTypes: ['video'],
  },
  '3': {
    id: '3',
    name: 'Lê Thị Hồng, ThS',
    title: 'Cố vấn sức khỏe tâm thần',
    imageUrl: '/images/counselors/lisa-rodriguez.jpg',
    sessionTypes: ['video', 'in-person'],
  },
};

const steps = [
  { label: 'Chọn loại phiên', icon: <Check /> },
  { label: 'Ngày & Giờ', icon: <Schedule /> },
  { label: 'Thông tin của bạn', icon: <Person /> },
  { label: 'Xác nhận', icon: <AssignmentTurnedIn /> },
];

const CounselingSchedule = () => {
  const { counselorId } = useParams();
  const navigate = useNavigate();
  const { addSession } = useCounseling();
  const counselor = counselors[counselorId || ''];

  const [activeStep, setActiveStep] = useState(0);
  const [sessionType, setSessionType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concerns: '',
  });

  if (!counselor) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Không tìm thấy tư vấn viên
        </Typography>
        <Button variant="contained" onClick={() => navigate('/counseling')}>
          Quay lại danh sách tư vấn viên
        </Button>
      </Box>
    );
  }

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue);
  };

  const isStepComplete = () => {
    switch (activeStep) {
      case 0:
        return !!sessionType;
      case 1:
        return selectedDate && selectedTime;
      case 2:
        return formData.name && formData.email && formData.phone;
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime && sessionType) {
      const formattedDate = selectedDate.format('YYYY-MM-DD');
      const formattedTime = selectedTime.format('HH:mm');

      addSession({
        counselorId: counselor.id,
        sessionType,
        date: formattedDate,
        time: formattedTime,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        concerns: formData.concerns,
      });
    }
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setSessionType('');
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      concerns: '',
    });
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" sx={{ mb: 2, fontSize: '1.1rem', fontWeight: 'bold' }}>Chọn loại phiên tư vấn</FormLabel>
              <RadioGroup
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
              >
                {counselor.sessionTypes.map((type) => (
                  <FormControlLabel
                    key={type}
                    value={type}
                    control={<Radio color="primary" />}
                    label={<Typography variant="body1">{type === 'video' ? 'Phiên video trực tuyến' : 'Phiên trực tiếp tại văn phòng'}</Typography>}
                    sx={{ mb: 1 }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <DatePicker
                label="Chọn ngày"
                value={selectedDate}
                onChange={handleDateChange}
                disablePast
                slotProps={{ textField: { fullWidth: true, variant: "outlined", InputProps: { startAdornment: (<InputAdornment position="start"><CalendarMonthIcon color="action" /></InputAdornment>) } } }}
              />
              <TimePicker
                label="Chọn giờ"
                value={selectedTime}
                onChange={handleTimeChange}
                slotProps={{ textField: { fullWidth: true, variant: "outlined", InputProps: { startAdornment: (<InputAdornment position="start"><AccessTimeIcon color="action" /></InputAdornment>) } } }}
              />
            </Box>
          </LocalizationProvider>
        );

      case 2:
        return (
          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              required
              label="Họ và tên"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              label="Số điện thoại"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Mối quan tâm hoặc câu hỏi"
              name="concerns"
              value={formData.concerns}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SubjectIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        );

      case 3:
        return (
          <Box sx={{ mt: 3, textAlign: 'left' }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Xác nhận thông tin đặt lịch
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={1.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Person fontSize="small" color="primary" />
                <Typography variant="body1">Tư vấn viên: <Box component="span" fontWeight="bold">{counselor.name}</Box></Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                {sessionType === 'video' ? <VideocamIcon fontSize="small" color="primary" /> : <MeetingRoomIcon fontSize="small" color="primary" />}
                <Typography variant="body1">Loại phiên: <Box component="span" fontWeight="bold">{sessionType === 'video' ? 'Trực tuyến' : 'Trực tiếp'}</Box></Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonthIcon fontSize="small" color="primary" />
                <Typography variant="body1">Ngày: <Box component="span" fontWeight="bold">{selectedDate ? selectedDate.format('DD/MM/YYYY') : 'Chưa chọn'}</Box></Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <AccessTimeIcon fontSize="small" color="primary" />
                <Typography variant="body1">Giờ: <Box component="span" fontWeight="bold">{selectedTime ? selectedTime.format('HH:mm') : 'Chưa chọn'}</Box></Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Person fontSize="small" color="primary" />
                <Typography variant="body1">Họ và tên: <Box component="span" fontWeight="bold">{formData.name}</Box></Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailIcon fontSize="small" color="primary" />
                <Typography variant="body1">Email: <Box component="span" fontWeight="bold">{formData.email}</Box></Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneIcon fontSize="small" color="primary" />
                <Typography variant="body1">Số điện thoại: <Box component="span" fontWeight="bold">{formData.phone}</Box></Typography>
              </Stack>
              {formData.concerns && (
                <Stack direction="row" alignItems="flex-start" spacing={1}>
                  <SubjectIcon fontSize="small" color="primary" sx={{ mt: 0.5 }} />
                  <Typography variant="body1">Mối quan tâm: <Box component="span" fontWeight="bold">{formData.concerns}</Box></Typography>
                </Stack>
              )}
            </Stack>
            <Alert severity="info" sx={{ mt: 4, textAlign: 'center' }}>
              Vui lòng kiểm tra lại thông tin trước khi xác nhận. Chúng tôi sẽ gửi email xác nhận cho bạn.
            </Alert>
          </Box>
        );

      default:
        return <Typography>Bước không hợp lệ</Typography>;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <EventAvailableIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Đặt lịch tư vấn
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Hoàn thành các bước dưới đây để đặt lịch hẹn tư vấn với chuyên gia của chúng tôi.
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar alt={counselor.name} src={counselor.imageUrl} sx={{ width: 80, height: 80, mb: 1 }} />
          <Typography variant="h5" fontWeight={600}>{counselor.name}</Typography>
          <Typography variant="body1" color="text.secondary">{counselor.title}</Typography>
        </Box>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel icon={step.icon}>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box>
          {renderStepContent()}
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              startIcon={<ArrowBackIosNewIcon />}
              sx={{
                px: 3,
                py: 1.2,
                borderColor: '#9e9e9e',
                color: '#616161',
                '&:hover': { borderColor: '#424242', color: '#424242' },
              }}
            >
              {activeStep === 0 ? 'Hủy' : 'Quay lại'}
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              disabled={!isStepComplete()}
              endIcon={activeStep === steps.length - 1 ? <CheckCircleOutlineIcon /> : <ArrowForwardIosIcon />}
              sx={{
                backgroundColor: '#2196f3',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
                px: 4,
                py: 1.2,
              }}
            >
              {activeStep === steps.length - 1 ? 'Xác nhận và đặt lịch' : 'Tiếp theo'}
            </Button>
          </Stack>
        </Box>

        {activeStep === steps.length && (
          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Lịch hẹn của bạn đã được đặt thành công!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Cảm ơn bạn đã tin tưởng dịch vụ của chúng tôi. Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận chi tiết.
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                onClick={handleReset}
                startIcon={<AddCircleOutlineIcon />}
                sx={{
                  backgroundColor: '#4caf50',
                  '&:hover': {
                    backgroundColor: '#388e3c',
                  },
                }}
              >
                Đặt lịch hẹn khác
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/')}
                startIcon={<HomeIcon />}
                sx={{ borderColor: '#2196f3', color: '#2196f3', '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.04)' } }}
              >
                Quay về trang chủ
              </Button>
            </Stack>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default CounselingSchedule; 