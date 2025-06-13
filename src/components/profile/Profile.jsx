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
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

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
];

const programHistory = [
  {
    id: 1,
    title: 'Chương trình giáo dục phòng chống ma túy cho học sinh',
    date: '2024-02-01',
    status: 'hoàn thành',
    preSurvey: true,
    postSurvey: true,
  },
  {
    id: 2,
    title: 'Hội thảo phòng chống ma túy cho phụ huynh',
    date: '2024-03-15',
    status: 'đã đăng ký',
    preSurvey: false,
    postSurvey: false,
  },
];

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
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
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            sx={{ width: 100, height: 100, mr: 2 }}
            src={user?.avatar}
          />
          <Typography variant="h4" component="h1">
            Hồ sơ cá nhân
          </Typography>
        </Box>

        <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Thông tin cá nhân" />
          <Tab label="Lịch sử đặt lịch" />
          <Tab label="Chương trình đã tham gia" />
        </Tabs>

        {activeTab === 0 && (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Họ và tên"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Số điện thoại"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Địa chỉ"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Cập nhật thông tin
                </Button>
              </Grid>
            </Grid>
          </form>
        )}

        {activeTab === 1 && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tư vấn viên</TableCell>
                  <TableCell>Ngày</TableCell>
                  <TableCell>Giờ</TableCell>
                  <TableCell>Chủ đề</TableCell>
                  <TableCell>Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointmentHistory.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.counselor}</TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.topic}</TableCell>
                    <TableCell>
                      <Chip
                        label={appointment.status === 'hoàn thành' ? 'Đã hoàn thành' : 'Sắp tới'}
                        color={appointment.status === 'hoàn thành' ? 'success' : 'warning'}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {activeTab === 2 && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Chương trình</TableCell>
                  <TableCell>Ngày</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Khảo sát trước</TableCell>
                  <TableCell>Khảo sát sau</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programHistory.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell>{program.title}</TableCell>
                    <TableCell>{program.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={program.status === 'completed' ? 'Đã hoàn thành' : 'Đã đăng ký'}
                        color={program.status === 'completed' ? 'success' : 'warning'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={program.preSurvey ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                        color={program.preSurvey ? 'success' : 'error'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={program.postSurvey ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                        color={program.postSurvey ? 'success' : 'error'}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
};

export default Profile; 