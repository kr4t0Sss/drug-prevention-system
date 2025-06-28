import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  IconButton,
  Button,
  Stack,
  LinearProgress,
  Alert,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Psychology as PsychologyIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeCourses: 6,
    completedAssessments: 892,
    counselingSessions: 156,
    newUsersThisMonth: 89,
    courseCompletionRate: 78,
    riskAssessments: 23,
    emergencyCases: 3,
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, user: 'Nguyễn Văn A', action: 'Hoàn thành khóa học', course: 'Kiến thức cơ bản về ma túy', time: '2 giờ trước' },
    { id: 2, user: 'Trần Thị B', action: 'Đặt lịch tư vấn', counselor: 'BS. Nguyễn Minh', time: '3 giờ trước' },
    { id: 3, user: 'Lê Văn C', action: 'Hoàn thành đánh giá', assessment: 'CRAFFT Assessment', time: '5 giờ trước' },
    { id: 4, user: 'Phạm Thị D', action: 'Tham gia khóa học', course: 'Kỹ năng từ chối', time: '1 ngày trước' },
  ]);

  const [userGrowthData] = useState([
    { month: 'T1', users: 120 },
    { month: 'T2', users: 180 },
    { month: 'T3', users: 250 },
    { month: 'T4', users: 320 },
    { month: 'T5', users: 410 },
    { month: 'T6', users: 520 },
    { month: 'T7', users: 650 },
    { month: 'T8', users: 780 },
    { month: 'T9', users: 920 },
    { month: 'T10', users: 1050 },
    { month: 'T11', users: 1180 },
    { month: 'T12', users: 1247 },
  ]);

  const [courseStatsData] = useState([
    { name: 'Kiến thức cơ bản', completed: 340, enrolled: 420 },
    { name: 'Kỹ năng từ chối', completed: 280, enrolled: 350 },
    { name: 'Vai trò gia đình', completed: 150, enrolled: 200 },
    { name: 'Phục hồi toàn diện', completed: 90, enrolled: 130 },
    { name: 'Tâm lý nghiện chất', completed: 70, enrolled: 110 },
    { name: 'Cộng đồng an toàn', completed: 120, enrolled: 160 },
  ]);

  const [riskLevelData] = useState([
    { name: 'Thấp', value: 65, color: '#4caf50' },
    { name: 'Trung bình', value: 25, color: '#ff9800' },
    { name: 'Cao', value: 10, color: '#f44336' },
  ]);

  const StatCard = ({ title, value, icon, color, trend, trendValue }) => (
    <Card sx={{ 
      height: '100%', 
      background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
      border: `1px solid ${color}20`,
      '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
      transition: 'all 0.3s ease-in-out'
    }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="body2" fontWeight={500}>
              {title}
            </Typography>
            <Typography variant="h4" component="h2" fontWeight={700} color={color}>
              {value}
            </Typography>
            {trend && (
              <Box display="flex" alignItems="center" mt={1}>
                <TrendingUpIcon sx={{ fontSize: 16, color: trend === 'up' ? 'success.main' : 'error.main', mr: 0.5 }} />
                <Typography variant="body2" color={trend === 'up' ? 'success.main' : 'error.main'} fontWeight={600}>
                  {trendValue}% so với tháng trước
                </Typography>
              </Box>
            )}
          </Box>
          <Avatar sx={{ bgcolor: color, width: 56, height: 56 }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <DashboardIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Admin Dashboard
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Tổng quan hệ thống phòng chống ma túy
        </Typography>
      </Box>

      {/* Alert for urgent cases */}
      {stats.emergencyCases > 0 && (
        <Alert 
          severity="warning" 
          sx={{ mb: 3 }}
          action={
            <Button color="inherit" size="small">
              Xem chi tiết
            </Button>
          }
        >
          <strong>Cảnh báo:</strong> Có {stats.emergencyCases} trường hợp cần can thiệp khẩn cấp!
        </Alert>
      )}

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Tổng người dùng"
            value={stats.totalUsers.toLocaleString()}
            icon={<PeopleIcon />}
            color="#2196f3"
            trend="up"
            trendValue={12}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Khóa học hoạt động"
            value={stats.activeCourses}
            icon={<SchoolIcon />}
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Đánh giá hoàn thành"
            value={stats.completedAssessments}
            icon={<AssessmentIcon />}
            color="#ff9800"
            trend="up"
            trendValue={8}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Phiên tư vấn"
            value={stats.counselingSessions}
            icon={<PsychologyIcon />}
            color="#9c27b0"
            trend="up"
            trendValue={15}
          />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* User Growth Chart */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Tăng trưởng người dùng theo tháng
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#2196f3" 
                  strokeWidth={3}
                  dot={{ fill: '#2196f3', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Risk Level Distribution */}
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Phân bố mức độ rủi ro
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskLevelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskLevelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2 }}>
              {riskLevelData.map((item) => (
                <Box key={item.name} display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                  <Box display="flex" alignItems="center">
                    <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: '50%', mr: 1 }} />
                    <Typography variant="body2">{item.name}</Typography>
                  </Box>
                  <Typography variant="body2" fontWeight={600}>{item.value}%</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Course Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Thống kê khóa học
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseStatsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="enrolled" fill="#e3f2fd" name="Đã đăng ký" />
                <Bar dataKey="completed" fill="#2196f3" name="Đã hoàn thành" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activities and Quick Actions */}
      <Grid container spacing={3}>
        {/* Recent Activities */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Hoạt động gần đây
              </Typography>
              <Button size="small" color="primary">
                Xem tất cả
              </Button>
            </Box>
            <List>
              {recentActivities.map((activity) => (
                <ListItem key={activity.id} divider>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      {activity.user.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box>
                        <strong>{activity.user}</strong> {activity.action}
                        {activity.course && <Chip label={activity.course} size="small" sx={{ ml: 1 }} />}
                        {activity.counselor && <Chip label={activity.counselor} size="small" sx={{ ml: 1 }} />}
                        {activity.assessment && <Chip label={activity.assessment} size="small" sx={{ ml: 1 }} />}
                      </Box>
                    }
                    secondary={activity.time}
                  />
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Thao tác nhanh
            </Typography>
            <Stack spacing={2}>
              <Button
                variant="contained"
                startIcon={<PeopleIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                Quản lý người dùng
              </Button>
              <Button
                variant="contained"
                startIcon={<SchoolIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
                color="success"
              >
                Quản lý khóa học
              </Button>
              <Button
                variant="contained"
                startIcon={<AssessmentIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
                color="warning"
              >
                Xem báo cáo đánh giá
              </Button>
              <Button
                variant="contained"
                startIcon={<PsychologyIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
                color="secondary"
              >
                Quản lý tư vấn
              </Button>
              <Button
                variant="outlined"
                startIcon={<NotificationsIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                Gửi thông báo
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard; 