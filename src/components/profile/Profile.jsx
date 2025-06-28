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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
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
  Star as StarIcon,
  CalendarToday as CalendarTodayIcon,
  Person as PersonIcon,
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
        <PersonIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Hồ sơ cá nhân
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
          Quản lý thông tin cá nhân và theo dõi tiến trình học tập của bạn
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              height: 'fit-content',
              background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
              border: '1px solid rgba(33, 150, 243, 0.1)',
            }}
          >
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      <CameraAltIcon fontSize="small" />
                    </IconButton>
                  }
                >
                  <Avatar
                    src={formData.avatar}
                    sx={{
                      width: 120,
                      height: 120,
                      border: '4px solid white',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    }}
                  >
                    <PersonOutlineIcon sx={{ fontSize: 60 }} />
                  </Avatar>
                </Badge>
              </Box>

              <Typography variant="h5" gutterBottom fontWeight={600} color="primary.dark">
                {formData.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {formData.email}
              </Typography>

              <Stack spacing={2} sx={{ mb: 3 }}>
                <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
                  <PhoneIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    {formData.phone || 'Chưa cập nhật'}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
                  <LocationOnIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    {formData.address || 'Chưa cập nhật'}
                  </Typography>
                </Stack>
              </Stack>

              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => setIsEditing(true)}
                fullWidth
                sx={{
                  py: 1.2,
                  fontWeight: 600,
                  backgroundColor: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#1976d2',
                  },
                }}
              >
                Chỉnh sửa hồ sơ
              </Button>
            </CardContent>
          </Card>

          {/* Statistics Card */}
          <Card elevation={2} sx={{ mt: 3, borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark">
                Thống kê hoạt động
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" color="text.secondary">Chương trình tham gia:</Typography>
                  <Typography variant="h6" fontWeight={600} color="primary.main">
                    {programHistory.length}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" color="text.secondary">Buổi tư vấn:</Typography>
                  <Typography variant="h6" fontWeight={600} color="success.main">
                    {appointmentHistory.filter(a => a.status === 'completed').length}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" color="text.secondary">Thành tích:</Typography>
                  <Typography variant="h6" fontWeight={600} color="warning.main">
                    {achievements.length}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                backgroundColor: '#f8f9fa',
                '& .MuiTab-root': {
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                },
              }}
            >
              <Tab label="Thông tin cá nhân" icon={<PersonOutlineIcon />} />
              <Tab label="Lịch sử tư vấn" icon={<EventNoteIcon />} />
              <Tab label="Chương trình" icon={<ListAltIcon />} />
              <Tab label="Thành tích" icon={<EmojiEventsIcon />} />
            </Tabs>

            {/* Personal Information Tab */}
            <TabPanel value={activeTab} index={0}>
              <Box sx={{ p: 4 }}>
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Họ và tên"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Số điện thoại"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Địa chỉ"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Mô tả bản thân"
                          name="bio"
                          multiline
                          rows={4}
                          value={formData.bio}
                          onChange={handleChange}
                          placeholder="Viết vài dòng về bản thân..."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>
                          <Button
                            type="submit"
                            variant="contained"
                            startIcon={<SaveIcon />}
                            sx={{
                              backgroundColor: '#4caf50',
                              '&:hover': {
                                backgroundColor: '#388e3c',
                              },
                            }}
                          >
                            Lưu thay đổi
                          </Button>
                          <Button
                            variant="outlined"
                            startIcon={<CancelIcon />}
                            onClick={() => setIsEditing(false)}
                          >
                            Hủy
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </form>
                ) : (
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Alert severity="info" sx={{ mb: 3 }}>
                        Thông tin cá nhân của bạn được bảo mật và chỉ được sử dụng để cải thiện dịch vụ.
                      </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="text.secondary">Họ và tên</Typography>
                        <Typography variant="body1" fontWeight={500}>{formData.name}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="text.secondary">Email</Typography>
                        <Typography variant="body1" fontWeight={500}>{formData.email}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="text.secondary">Số điện thoại</Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {formData.phone || 'Chưa cập nhật'}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="text.secondary">Địa chỉ</Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {formData.address || 'Chưa cập nhật'}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="text.secondary">Mô tả bản thân</Typography>
                        <Typography variant="body1" fontWeight={500} sx={{ lineHeight: 1.6 }}>
                          {formData.bio || 'Chưa có mô tả'}
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                )}
              </Box>
            </TabPanel>

            {/* Appointment History Tab */}
            <TabPanel value={activeTab} index={1}>
              <Box sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark">
                  Lịch sử tư vấn
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                        <TableCell fontWeight={600}>Tư vấn viên</TableCell>
                        <TableCell fontWeight={600}>Ngày</TableCell>
                        <TableCell fontWeight={600}>Chủ đề</TableCell>
                        <TableCell fontWeight={600}>Trạng thái</TableCell>
                        <TableCell fontWeight={600}>Đánh giá</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {appointmentHistory.map((appointment) => (
                        <TableRow key={appointment.id} hover>
                          <TableCell>{appointment.counselor}</TableCell>
                          <TableCell>
                            {format(new Date(appointment.date), 'dd/MM/yyyy')} - {appointment.time}
                          </TableCell>
                          <TableCell>{appointment.topic}</TableCell>
                          <TableCell>{getStatusChip(appointment.status)}</TableCell>
                          <TableCell>
                            {appointment.rating ? (
                              <Stack direction="row" alignItems="center" spacing={0.5}>
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    sx={{
                                      fontSize: 16,
                                      color: i < appointment.rating ? '#ffc107' : '#e0e0e0',
                                    }}
                                  />
                                ))}
                              </Stack>
                            ) : (
                              <Typography variant="body2" color="text.secondary">
                                Chưa đánh giá
                              </Typography>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </TabPanel>

            {/* Program History Tab */}
            <TabPanel value={activeTab} index={2}>
              <Box sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark">
                  Chương trình đã tham gia
                </Typography>
                <Stack spacing={3}>
                  {programHistory.map((program) => (
                    <Card key={program.id} elevation={1} sx={{ borderRadius: 2 }}>
                      <CardContent sx={{ p: 3 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                          <Typography variant="h6" fontWeight={600} color="primary.dark">
                            {program.title}
                          </Typography>
                          {getStatusChip(program.status)}
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                          <CalendarTodayIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                          <Typography variant="body2" color="text.secondary">
                            {format(new Date(program.date), 'dd/MM/yyyy')}
                          </Typography>
                        </Stack>
                        {program.status === 'completed' && (
                          <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              Tiến độ hoàn thành
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={program.progress}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: '#e0e0e0',
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 4,
                                },
                              }}
                            />
                            <Typography variant="body2" color="primary.main" sx={{ mt: 1, textAlign: 'right' }}>
                              {program.progress}%
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Box>
            </TabPanel>

            {/* Achievements Tab */}
            <TabPanel value={activeTab} index={3}>
              <Box sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight={600} color="primary.dark">
                  Thành tích đạt được
                </Typography>
                <List>
                  {achievements.map((achievement, index) => (
                    <ListItem key={index} sx={{ py: 2 }}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: 'warning.light',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'warning.dark',
                          }}
                        >
                          {achievement.icon}
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body1" fontWeight={600}>
                            {achievement.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" color="text.secondary">
                            {format(new Date(achievement.date), 'dd/MM/yyyy')}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;