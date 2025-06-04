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
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Psychologist',
    imageUrl: '/images/counselors/sarah-johnson.jpg',
    sessionTypes: ['video', 'in-person'],
  },
  '2': {
    id: '2',
    name: 'Dr. Michael Chen',
    title: 'Addiction Specialist',
    imageUrl: '/images/counselors/michael-chen.jpg',
    sessionTypes: ['video'],
  },
  '3': {
    id: '3',
    name: 'Lisa Rodriguez, LMHC',
    title: 'Mental Health Counselor',
    imageUrl: '/images/counselors/lisa-rodriguez.jpg',
    sessionTypes: ['video', 'in-person'],
  },
};

const steps = ['Session Type', 'Date & Time', 'Your Information', 'Confirmation'];

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
          Counselor not found
        </Typography>
        <Button variant="contained" onClick={() => navigate('/counseling')}>
          Back to Counselors
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
      // Format date and time for storage
      const formattedDate = selectedDate.format('YYYY-MM-DD');
      const formattedTime = selectedTime.format('HH:mm');

      // Save the session
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

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Session Type</FormLabel>
              <RadioGroup
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
              >
                {counselor.sessionTypes.map((type) => (
                  <FormControlLabel
                    key={type}
                    value={type}
                    control={<Radio />}
                    label={type === 'video' ? 'Video Session' : 'In-Person Session'}
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
                  label="Select Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  disablePast
                />
              </Box>
              <Box sx={{ width: '100%' }}>
                <TimePicker
                  label="Select Time"
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
              label="Full Name"
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
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Concerns or Questions"
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
              Your session has been scheduled successfully!
            </Alert>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Session Details
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography>
                  <strong>Counselor:</strong> {counselor.name}
                </Typography>
                <Typography>
                  <strong>Session Type:</strong> {sessionType === 'video' ? 'Video Session' : 'In-Person Session'}
                </Typography>
                <Typography>
                  <strong>Date:</strong> {selectedDate ? selectedDate.format('MMMM D, YYYY') : ''}
                </Typography>
                <Typography>
                  <strong>Time:</strong> {selectedTime ? selectedTime.format('h:mm A') : ''}
                </Typography>
                <Divider />
                <Typography>
                  <strong>Your Name:</strong> {formData.name}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {formData.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {formData.phone}
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
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar
          src={counselor.imageUrl}
          alt={counselor.name}
          sx={{ width: 80, height: 80, mr: 2 }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            Schedule a Session
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            with {counselor.name}, {counselor.title}
          </Typography>
        </Box>
      </Box>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {renderStepContent()}

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </Button>
        <Box>
          <Button
            onClick={() => navigate('/counseling')}
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? () => navigate('/counseling') : activeStep === steps.length - 2 ? handleSubmit : handleNext}
            disabled={!isStepComplete()}
          >
            {activeStep === steps.length - 1 ? 'Done' : activeStep === steps.length - 2 ? 'Schedule Session' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CounselingSchedule; 