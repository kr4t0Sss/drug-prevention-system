import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Avatar,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Container,
  Stack,
  Card,
  CardContent,
  Divider,
  IconButton,
  Badge,
  LinearProgress,
} from '@mui/material';
import {
  AccountCircle as AccountCircleIcon,
  Edit as EditIcon,
  EventNote as EventNoteIcon,
  ListAlt as ListAltIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  HighlightOff as HighlightOffIcon,
  AccessTime as AccessTimeIcon,
  PersonOutline as PersonOutlineIcon,
  Description as DescriptionIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  CameraAlt as CameraAltIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  TrendingUp as TrendingUpIcon,
  EmojiEvents as EmojiEventsIcon,
  Psychology as PsychologyIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { format } from 'date-fns';

const appointmentHistory = [
  {
    id: 1,
    counselor: 'Nguyễn Văn A',
    date: '2024-02-15',
    time: '10:00',
    status: 'completed',
    topic: 'Tư vấn phòng chống ma túy',
    rating: 5,
  },
  {
    id: 2,
    counselor: 'Trần Thị B',
    date: '2024-03-01',
    time: '14:00',
    status: 'upcoming',
    topic: 'Hỗ trợ người nghiện ma túy',
    rating: null,
  },
  {
    id: 3,
    counselor: 'Lê Thị Hồng',
    date: '2024-04-10',
    time: '09:30',
    status: 'cancelled',
    topic: 'Tư vấn gia đình',
    rating: null,
  },
];

const programHistory = [
  {
    id: 1,
    title: 'Chương trình giáo dục phòng chống ma túy cho học sinh',
    date: '2024-02-01',
    status: 'completed',
    preSurvey: true,
    postSurvey: true,
    progress: 100,
    certificate: true,
  },
  {
    id: 2,
    title: 'Hội thảo phòng chống ma túy cho phụ huynh',
    date: '2024-03-15',
    status: 'registered',
    preSurvey: false,
    postSurvey: false,
    progress: 0,
    certificate: false,
  },
];

const achievements = [
  { icon: <EmojiEventsIcon />, title: 'Hoàn thành đánh giá đầu tiên', date: '2024-01-15' },
  { icon: <SchoolIcon />, title: 'Hoàn thành khóa học cơ bản', date: '2024-02-01' },
  { icon: <PsychologyIcon />, title: 'Tham gia tư vấn lần đầu', date: '2024-02-15' },
];

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.displayName || 'Người dùng',
    email: user?.email || 'user@example.com',
    phone: user?.phone || '',
    address: user?.address || '',
    bio: user?.bio || '',
    avatar: user?.photoURL || null,
  });
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Cập nhật hồ sơ:', formData);
    alert('Hồ sơ của bạn đã được cập nhật!');
    setIsEditing(false);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'completed':
        return <Chip label="Đã hoàn thành" color="success" size="small" icon={<CheckCircleOutlineIcon />} />;
      case 'upcoming':
        return <Chip label="Sắp tới" color="primary" size="small" icon={<AccessTimeIcon />} />;
      case 'registered':
        return <Chip label="Đã đăng ký" color="info" size="small" icon={<CheckCircleOutlineIcon />} />;
      case 'cancelled':
        return <Chip label="Đã hủy" color="error" size="small" icon={<HighlightOffIcon />} />;
      default:
        return <Chip label={status} size="small" />;
    }
  };

  const TabPanel = ({ children, value, index, ...other }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Hồ sơ cá nhân
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Quản lý thông tin cá nhân và theo dõi tiến trình học tập của bạn
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              textAlign: 'center',
              height: 'fit-content',
              background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: 4,
            }}
          >
            <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <IconButton
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      width: 32,
                      height: 32,
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    <CameraAltIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                }
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    border: '4px solid white',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    bgcolor: 'primary.main',
                    fontSize: '3rem',
                  }}
                  src={formData.avatar}
                >
                  {formData.name?.charAt(0)}
                </Avatar>
              </Badge>
            </Box>
            
            <Typography variant="h5" fontWeight={700} gutterBottom color="primary.dark">
              {formData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Thành viên từ tháng 1, 2024
            </Typography>

            {/* Quick Stats */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} color="primary.main">
                    3
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Khóa học
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} color="success.main">
                    5
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Buổi tư vấn
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} color="warning.main">
                    2
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Chứng chỉ
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Button
              variant={isEditing ? "outlined" : "contained"}
              fullWidth
              startIcon={isEditing ? <CancelIcon /> : <EditIcon />}
              onClick={() => setIsEditing(!isEditing)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              {isEditing ? 'Hủy chỉnh sửa' : 'Chỉnh sửa hồ sơ'}
            </Button>
          </Card>

          {/* Achievements Card */}
          <Card sx={{ mt: 3, p: 3, borderRadius: 4 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom color="primary.dark">
              Thành tích
            </Typography>
            <Stack spacing={2}>
              {achievements.map((achievement, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: 'primary.main',
                    }}
                  >
                    {React.cloneElement(achievement.icon, { sx: { fontSize: 20, color: 'white' } })}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight={600}>
                      {achievement.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {format(new Date(achievement.date), 'dd/MM/yyyy')}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ borderRadius: 4, overflow: 'hidden' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              sx={{
                bgcolor: '#f8f9fa',
                '& .MuiTab-root': {
                  fontWeight: 600,
                  py: 2,
                },
              }}
            >
              <Tab 
                label="Thông tin cá nhân" 
                icon={<PersonOutlineIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Lịch sử tư vấn" 
                icon={<EventNoteIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Chương trình" 
                icon={<ListAltIcon />} 
                iconPosition="start"
              />
            </Tabs>

            <Box sx={{ p: 4 }}>
              {/* Personal Information Tab */}
              <TabPanel value={activeTab} index={0}>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Họ và tên"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        disabled={!isEditing}
                        InputProps={{
                          startAdornment: <PersonOutlineIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        disabled
                        InputProps={{
                          startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Số điện thoại"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        disabled={!isEditing}
                        placeholder="Nhập số điện thoại"
                        InputProps={{
                          startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Địa chỉ"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        variant="outlined"
                        disabled={!isEditing}
                        placeholder="Nhập địa chỉ"
                        InputProps={{
                          startAdornment: <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Giới thiệu bản thân"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        variant="outlined"
                        disabled={!isEditing}
                        multiline
                        rows={4}
                        placeholder="Chia sẻ một chút về bản thân bạn..."
                        InputProps={{
                          startAdornment: <DescriptionIcon sx={{ mr: 1, color: 'text.secondary', alignSelf: 'flex-start', mt: 1 }} />,
                        }}
                      />
                    </Grid>
                  </Grid>
                  
                  {isEditing && (
                    <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                      <Button
                        variant="outlined"
                        onClick={() => setIsEditing(false)}
                        startIcon={<CancelIcon />}
                      >
                        Hủy
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        startIcon={<SaveIcon />}
                        sx={{
                          background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #388e3c 0%, #1b5e20 100%)',
                          },
                        }}
                      >
                        Lưu thay đổi
                      </Button>
                    </Box>
                  )}
                </Box>
              </TabPanel>

              {/* Appointment History Tab */}
              <TabPanel value={activeTab} index={1}>
                <Stack spacing={3}>
                  {appointmentHistory.map((appointment) => (
                    <Card 
                      key={appointment.id} 
                      variant="outlined" 
                      sx={{ 
                        p: 3, 
                        borderRadius: 3,
                        '&:hover': {
                          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box>
                          <Typography variant="h6" fontWeight={600} gutterBottom>
                            {appointment.topic}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Tư vấn viên: {appointment.counselor}
                          </Typography>
                        </Box>
                        {getStatusChip(appointment.status)}
                      </Box>
                      
                      <Divider sx={{ my: 2 }} />
                      
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6} md={3}>
                          <Typography variant="caption" color="text.secondary">
                            Ngày
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {format(new Date(appointment.date), 'dd/MM/yyyy')}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="caption" color="text.secondary">
                            Giờ
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {appointment.time}
                          </Typography>
                        </Grid>
                        {appointment.rating && (
                          <Grid item xs={12} md={6}>
                            <Typography variant="caption" color="text.secondary">
                              Đánh giá
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="body2" fontWeight={500}>
                                {appointment.rating}/5
                              </Typography>
                              <Box sx={{ display: 'flex' }}>
                                {[...Array(5)].map((_, i) => (
                                  <Typography 
                                    key={i} 
                                    sx={{ 
                                      color: i < appointment.rating ? '#ffc107' : '#e0e0e0',
                                      fontSize: '1rem',
                                    }}
                                  >
                                    ★
                                  </Typography>
                                ))}
                              </Box>
                            </Box>
                          </Grid>
                        )}
                      </Grid>
                    </Card>
                  ))}
                </Stack>
              </TabPanel>

              {/* Program History Tab */}
              <TabPanel value={activeTab} index={2}>
                <Stack spacing={3}>
                  {programHistory.map((program) => (
                    <Card 
                      key={program.id} 
                      variant="outlined" 
                      sx={{ 
                        p: 3, 
                        borderRadius: 3,
                        '&:hover': {
                          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" fontWeight={600} gutterBottom>
                            {program.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            Ngày tham gia: {format(new Date(program.date), 'dd/MM/yyyy')}
                          </Typography>
                        </Box>
                        {getStatusChip(program.status)}
                      </Box>

                      {program.progress > 0 && (
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="caption" color="text.secondary">
                              Tiến độ hoàn thành
                            </Typography>
                            <Typography variant="caption" fontWeight={600}>
                              {program.progress}%
                            </Typography>
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={program.progress} 
                            sx={{ 
                              height: 8, 
                              borderRadius: 4,
                              bgcolor: '#e0e0e0',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>
                      )}

                      <Divider sx={{ my: 2 }} />

                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <Typography variant="caption" color="text.secondary">
                            Khảo sát trước
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {program.preSurvey ? '✅ Đã hoàn thành' : '⏳ Chưa thực hiện'}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="caption" color="text.secondary">
                            Khảo sát sau
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {program.postSurvey ? '✅ Đã hoàn thành' : '⏳ Chưa thực hiện'}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="caption" color="text.secondary">
                            Chứng chỉ
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {program.certificate ? '🏆 Đã nhận' : '⏳ Chưa đủ điều kiện'}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  ))}
                </Stack>
              </TabPanel>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;