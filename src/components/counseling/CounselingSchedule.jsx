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
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useCounseling } from '../../contexts/CounselingContext';

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

const steps = ['Chọn loại phiên', 'Ngày & Giờ', 'Thông tin của bạn', 'Xác nhận'];

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
      // Định dạng ngày và giờ để lưu trữ
      const formattedDate = selectedDate.format('YYYY-MM-DD');
      const formattedTime = selectedTime.format('HH:mm');

      // Lưu phiên
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Chọn loại phiên tư vấn</FormLabel>
              <RadioGroup
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
              >
                {counselor.sessionTypes.map((type) => (
                  <FormControlLabel
                    key={type}
                    value={type}
                    control={<Radio />}
                    label={type === 'video' ? 'Phiên video' : 'Phiên trực tiếp'}
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
              <Box sx={{ width: '100%' }}>
                <DatePicker
                  label="Chọn ngày"
                  value={selectedDate}
                  onChange={handleDateChange}
                  disablePast
                />
              </Box>
              <Box sx={{ width: '100%' }}>
                <TimePicker
                  label="Chọn giờ"
                  value={selectedTime}
                  onChange={handleTimeChange}
                />
              </Box>
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
            />
            <TextField
              required
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              required
              label="Số điện thoại"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Mối quan tâm hoặc câu hỏi"
              name="concerns"
              value={formData.concerns}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
            />
          </Box>
        );

      case 3:
        return (
          <Box sx={{ mt: 3 }}>
            <Alert severity="success" sx={{ mb: 3 }}>
              Phiên tư vấn của bạn đã được đặt lịch thành công!
            </Alert>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Chi tiết phiên tư vấn
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography>
                  <strong>Tư vấn viên:</strong> {counselor.name}
                </Typography>
                <Typography>
                  <strong>Loại phiên:</strong> {sessionType === 'video' ? 'Phiên video' : 'Phiên trực tiếp'}
                </Typography>
                <Typography>
                  <strong>Ngày:</strong> {selectedDate ? selectedDate.format('DD/MM/YYYY') : ''}
                </Typography>
                <Typography>
                  <strong>Giờ:</strong> {selectedTime ? selectedTime.format('HH:mm') : ''}
                </Typography>
                <Typography>
                  <strong>Mối quan tâm:</strong> {formData.concerns || 'Không có'}
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary">
                  Một email xác nhận đã được gửi đến {formData.email}.
                </Typography>
              </Box>
            </Paper>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Đặt lịch tư vấn
      </Typography>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box>
          {renderStepContent()}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Quay lại
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" onClick={handleReset}>
              Hoàn thành
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext} disabled={!isStepComplete()}>
              Tiếp tục
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default CounselingSchedule; 