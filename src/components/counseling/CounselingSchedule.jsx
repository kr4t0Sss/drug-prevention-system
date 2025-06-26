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
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useCounseling } from '../../contexts/CounselingContext';
import EventAvailableIcon from '@mui/icons-material/EventAvailable'; // Icon for scheduling
import { Check, Schedule, Person, AssignmentTurnedIn } from '@mui/icons-material';

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
                slotProps={{ textField: { fullWidth: true, variant: "outlined" } }}
              />
              <TimePicker
                label="Chọn giờ"
                value={selectedTime}
                onChange={handleTimeChange}
                slotProps={{ textField: { fullWidth: true, variant: "outlined" } }}
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
            />
            <TextField
              required
              label="Số điện thoại"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
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
            />
          </Box>
        );

      case 3:
        return (
          <Box sx={{ mt: 3 }}>
            <Alert severity="success" sx={{ mb: 3, fontSize: '1.1rem', fontWeight: 'bold' }}>
              Phiên tư vấn của bạn đã được đặt lịch thành công!
            </Alert>
            <Paper sx={{ p: 3, borderRadius: 2, bgcolor: '#e8f5e9' }}>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Chi tiết phiên tư vấn
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={1.5}>
                <Typography variant="body1"><strong>Tư vấn viên:</strong> {counselor.name}</Typography>
                <Typography variant="body1"><strong>Loại phiên:</strong> {sessionType === 'video' ? 'Phiên video trực tuyến' : 'Phiên trực tiếp tại văn phòng'}</Typography>
                <Typography variant="body1"><strong>Ngày:</strong> {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'N/A'}</Typography>
                <Typography variant="body1"><strong>Thời gian:</strong> {selectedTime ? selectedTime.format('HH:mm') : 'N/A'}</Typography>
                <Typography variant="body1"><strong>Tên của bạn:</strong> {formData.name}</Typography>
                <Typography variant="body1"><strong>Email:</strong> {formData.email}</Typography>
                <Typography variant="body1"><strong>Số điện thoại:</strong> {formData.phone}</Typography>
                <Typography variant="body1"><strong>Mối quan tâm:</strong> {formData.concerns || 'Không có'}</Typography>
              </Stack>
            </Paper>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <EventAvailableIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Đặt lịch tư vấn
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
          Điền vào biểu mẫu dưới đây để đặt lịch tư vấn với chuyên gia của chúng tôi.
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar alt={counselor.name} src={counselor.imageUrl} sx={{ width: 80, height: 80, mb: 1 }} />
          <Typography variant="h5" fontWeight={600}>{counselor.name}</Typography>
          <Typography variant="body1" color="text.secondary">{counselor.title}</Typography>
        </Box>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={() => step.icon}>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent()}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
            size="large"
            sx={{ px: 3, py: 1.2, borderColor: '#9e9e9e', color: '#616161', '&:hover': { borderColor: '#424242', color: '#424242' } }}
          >
            Quay lại
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              onClick={() => navigate('/')}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#4caf50',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
                px: 4,
                py: 1.2,
              }}
            >
              Hoàn tất & Quay về trang chủ
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={isStepComplete() ? handleNext : () => alert('Vui lòng điền đầy đủ thông tin để tiếp tục!')}
              disabled={!isStepComplete() && activeStep !== steps.length - 1} // Disable if not complete and not on last step
              size="large"
              sx={{
                backgroundColor: '#2196f3',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
                px: 4,
                py: 1.2,
              }}
            >
              {activeStep === steps.length - 2 ? 'Xác nhận & Đặt lịch' : 'Tiếp theo'}
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default CounselingSchedule; 