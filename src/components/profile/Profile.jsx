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
  },
  {
    id: 2,
    counselor: 'Trần Thị B',
    date: '2024-03-01',
    time: '14:00',
    status: 'upcoming',
    topic: 'Hỗ trợ người nghiện ma túy',
  },
  {
    id: 3,
    counselor: 'Lê Thị Hồng',
    date: '2024-04-10',
    time: '09:30',
    status: 'cancelled',
    topic: 'Tư vấn gia đình',
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
  },
  {
    id: 2,
    title: 'Hội thảo phòng chống ma túy cho phụ huynh',
    date: '2024-03-15',
    status: 'registered',
    preSurvey: false,
    postSurvey: false,
  },
];

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || 'Tên Người dùng',
    email: user?.email || 'user@example.com',
    phone: user?.phone || '0123456789',
    address: user?.address || '123 Đường ABC, Quận XYZ, TP. HCM',
    avatar: user?.avatar || '/images/placeholder-avatar.jpg', // Placeholder avatar
  });
  const [activeTab, setActiveTab] = useState(0);

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
        return <Chip label="Đã đăng ký" color="primary" size="small" icon={<CheckCircleOutlineIcon />} />;
      case 'cancelled':
        return <Chip label="Đã hủy" color="error" size="small" icon={<HighlightOffIcon />} />;
      default:
        return <Chip label={status} size="small" />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <AccountCircleIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Hồ sơ của tôi
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          Quản lý thông tin cá nhân, xem lịch sử đặt lịch và các chương trình bạn đã tham gia.
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, flexDirection: { xs: 'column', md: 'row' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Avatar
            sx={{ width: 120, height: 120, mr: { xs: 0, md: 3 }, mb: { xs: 2, md: 0 }, border: '3px solid', borderColor: 'primary.main' }}
            src={formData.avatar}
            alt={formData.name}
          />
          <Box>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={700} color="primary.dark">
              {formData.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
              Email: {formData.email}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Điện thoại: {formData.phone}
            </Typography>
          </Box>
        </Box>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Thông tin cá nhân" icon={<PersonOutlineIcon />} iconPosition="start" />
          <Tab label="Lịch sử đặt lịch" icon={<EventNoteIcon />} iconPosition="start" />
          <Tab label="Chương trình đã tham gia" icon={<ListAltIcon />} iconPosition="start" />
        </Tabs>

        {activeTab === 0 && (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Họ và tên"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
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
                  disabled // Email usually not editable
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.2,
                    fontSize: '1.1rem',
                    backgroundColor: '#2196f3',
                    '&:hover': {
                      backgroundColor: '#1976d2',
                    },
                  }}
                >
                  Cập nhật thông tin
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {activeTab === 1 && (
          appointmentHistory.length > 0 ? (
            <TableContainer component={Paper} elevation={1}>
              <Table sx={{ minWidth: 650 }} aria-label="appointment history table">
                <TableHead sx={{ bgcolor: '#e3f2fd' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Tư vấn viên</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ngày</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Giờ</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Chủ đề</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Trạng thái</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointmentHistory.map((appointment) => (
                    <TableRow
                      key={appointment.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { bgcolor: '#f8f8f8' } }}
                    >
                      <TableCell component="th" scope="row">
                        {appointment.counselor}
                      </TableCell>
                      <TableCell>{format(new Date(appointment.date), 'dd/MM/yyyy')}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.topic}</TableCell>
                      <TableCell>{getStatusChip(appointment.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                Bạn chưa có lịch sử đặt lịch nào.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }} onClick={() => alert('Chuyển đến trang đặt lịch tư vấn')}> {/* Placeholder action */}
                Đặt lịch tư vấn ngay
              </Button>
            </Box>
          )
        )}

        {activeTab === 2 && (
          programHistory.length > 0 ? (
            <TableContainer component={Paper} elevation={1}>
              <Table sx={{ minWidth: 650 }} aria-label="program history table">
                <TableHead sx={{ bgcolor: '#e3f2fd' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Chương trình</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ngày</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Trạng thái</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Khảo sát trước</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Khảo sát sau</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {programHistory.map((program) => (
                    <TableRow
                      key={program.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { bgcolor: '#f8f8f8' } }}
                    >
                      <TableCell component="th" scope="row">
                        {program.title}
                      </TableCell>
                      <TableCell>{format(new Date(program.date), 'dd/MM/yyyy')}</TableCell>
                      <TableCell>{getStatusChip(program.status)}</TableCell>
                      <TableCell>{getStatusChip(program.preSurvey ? 'completed' : 'pending')}</TableCell>
                      <TableCell>{getStatusChip(program.postSurvey ? 'completed' : 'pending')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                Bạn chưa tham gia chương trình nào.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }} onClick={() => alert('Chuyển đến trang danh sách chương trình')}> {/* Placeholder action */}
                Khám phá các chương trình
              </Button>
            </Box>
          )
        )}
      </Paper>
    </Container>
  );
};

export default Profile; 