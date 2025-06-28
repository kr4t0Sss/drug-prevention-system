import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  Paper,
  Grid,
  Card,
  CardContent,
  Tab,
  Tabs,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Alert,
} from '@mui/material';
import {
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Psychology as PsychologyIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  Timeline as TimelineIcon,
  Download as DownloadIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
  Insights as InsightsIcon,
  Analytics as AnalyticsIcon,
  Dashboard as DashboardIcon,
  Star as StarIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

const ReportsStatistics = () => {
  const [tabValue, setTabValue] = useState(0);
  const [timeRange, setTimeRange] = useState('month');

  // Sample data
  const overviewStats = {
    totalUsers: 1247,
    activeUsers: 892,
    completionRate: 78,
    averageRating: 4.6,
    totalCourses: 45,
    totalAssessments: 892,
    totalCounselingSessions: 567,
    highRiskUsers: 23,
  };

  const monthlyData = [
    { month: 'Tháng 1', users: 120, courses: 45, assessments: 89, counseling: 67 },
    { month: 'Tháng 2', users: 145, courses: 52, assessments: 98, counseling: 78 },
    { month: 'Tháng 3', users: 167, courses: 61, assessments: 112, counseling: 89 },
    { month: 'Tháng 4', users: 189, courses: 73, assessments: 134, counseling: 95 },
  ];

  const topCourses = [
    { id: 1, name: 'Hiểu biết về ma túy và tác hại', completions: 234, rating: 4.8 },
    { id: 2, name: 'Kỹ năng từ chối và phòng tránh', completions: 198, rating: 4.7 },
    { id: 3, name: 'Hỗ trợ người nghiện phục hồi', completions: 167, rating: 4.6 },
    { id: 4, name: 'Tư vấn gia đình và cộng đồng', completions: 145, rating: 4.5 },
  ];

  const riskAnalysis = [
    { level: 'Thấp', count: 456, percentage: 73.2, color: '#4caf50' },
    { level: 'Trung bình', count: 145, percentage: 23.3, color: '#ff9800' },
    { level: 'Cao', count: 23, percentage: 3.7, color: '#f44336' },
  ];

  const counselorPerformance = [
    { id: 1, name: 'Lê Văn Cường', sessions: 45, rating: 4.8, specialization: 'Tư vấn gia đình' },
    { id: 2, name: 'Nguyễn Thị Mai', sessions: 38, rating: 4.7, specialization: 'Tư vấn cá nhân' },
    { id: 3, name: 'Trần Minh Đức', sessions: 34, rating: 4.6, specialization: 'Tư vấn nhóm' },
  ];

  const TabPanel = ({ children, value, index, ...other }) => (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <AssessmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Báo cáo & Thống kê
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Phân tích dữ liệu và báo cáo hiệu quả hoạt động hệ thống phòng chống ma túy
        </Typography>
      </Box>

      {/* Overview Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {overviewStats.totalUsers.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tổng người dùng
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    +12% so với tháng trước
                  </Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {overviewStats.completionRate}%
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tỷ lệ hoàn thành
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Khóa học và đánh giá
                  </Typography>
                </Box>
                <CheckCircleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #ff9800 0%, #ffc107 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {overviewStats.totalAssessments}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Đánh giá hoàn thành
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    ASSIST & CRAFFT
                  </Typography>
                </Box>
                <PsychologyIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #9c27b0 0%, #e91e63 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {overviewStats.averageRating}/5
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Điểm hài lòng
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Đánh giá từ người dùng
                  </Typography>
                </Box>
                <StarIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content with Tabs */}
      <Paper elevation={3} sx={{ borderRadius: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
              <Tab label="Tổng quan" icon={<DashboardIcon />} />
              <Tab label="Phân tích xu hướng" icon={<TrendingUpIcon />} />
              <Tab label="Hiệu suất khóa học" icon={<SchoolIcon />} />
              <Tab label="Đánh giá rủi ro" icon={<WarningIcon />} />
              <Tab label="Tư vấn viên" icon={<GroupIcon />} />
            </Tabs>
            
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Thời gian</InputLabel>
                <Select
                  value={timeRange}
                  label="Thời gian"
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <MenuItem value="week">Tuần này</MenuItem>
                  <MenuItem value="month">Tháng này</MenuItem>
                  <MenuItem value="quarter">Quý này</MenuItem>
                  <MenuItem value="year">Năm này</MenuItem>
                </Select>
              </FormControl>
              
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{ borderColor: '#42a5f5', color: '#42a5f5' }}
              >
                Xuất báo cáo
              </Button>
            </Stack>
          </Stack>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Tổng quan hoạt động hệ thống
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Biểu đồ hoạt động theo tháng
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
                    <Stack alignItems="center" spacing={2}>
                      <BarChartIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
                      <Typography variant="body1" color="text.secondary">
                        Biểu đồ cột thể hiện số liệu hoạt động hàng tháng
                      </Typography>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Hoạt động nổi bật
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Người dùng hoạt động
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {overviewStats.activeUsers}/{overviewStats.totalUsers}
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={(overviewStats.activeUsers / overviewStats.totalUsers) * 100}
                        sx={{ mt: 1, height: 6, borderRadius: 3 }}
                      />
                    </Box>
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Buổi tư vấn
                      </Typography>
                      <Typography variant="h6" color="success.main">
                        {overviewStats.totalCounselingSessions}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        +15% so với tháng trước
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Người dùng nguy cơ cao
                      </Typography>
                      <Typography variant="h6" color="error.main">
                        {overviewStats.highRiskUsers}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Cần can thiệp khẩn cấp
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Phân tích xu hướng và dự báo
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Xu hướng đăng ký người dùng
                  </Typography>
                  <Box sx={{ height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5', borderRadius: 2 }}>
                    <Stack alignItems="center" spacing={2}>
                      <TimelineIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
                      <Typography variant="body1" color="text.secondary">
                        Biểu đồ đường thể hiện xu hướng tăng trưởng
                      </Typography>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Dự báo hoạt động
                  </Typography>
                  <Stack spacing={2}>
                    <Alert severity="info">
                      <Typography variant="body2">
                        Dự kiến tháng tới sẽ có thêm 180-200 người dùng mới đăng ký
                      </Typography>
                    </Alert>
                    <Alert severity="success">
                      <Typography variant="body2">
                        Tỷ lệ hoàn thành khóa học dự kiến tăng lên 82%
                      </Typography>
                    </Alert>
                    <Alert severity="warning">
                      <Typography variant="body2">
                        Cần tăng cường tư vấn viên để đáp ứng nhu cầu tăng cao
                      </Typography>
                    </Alert>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Hiệu suất và đánh giá khóa học
            </Typography>
            
            <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell>Khóa học</TableCell>
                    <TableCell align="center">Số lượt hoàn thành</TableCell>
                    <TableCell align="center">Đánh giá</TableCell>
                    <TableCell align="center">Tỷ lệ hoàn thành</TableCell>
                    <TableCell align="center">Xu hướng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topCourses.map((course, index) => (
                    <TableRow key={course.id} hover>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            {index + 1}
                          </Avatar>
                          <Typography variant="body1" fontWeight={600}>
                            {course.name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h6" color="primary">
                          {course.completions}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                          <StarIcon fontSize="small" color="warning" />
                          <Typography variant="body1" fontWeight={600}>
                            {course.rating}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="center">
                        <Chip 
                          label={`${Math.round((course.completions / 300) * 100)}%`}
                          color="success"
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TrendingUpIcon color="success" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Phân tích và đánh giá mức độ rủi ro
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Phân bố mức độ rủi ro
                  </Typography>
                  <Stack spacing={3}>
                    {riskAnalysis.map((risk) => (
                      <Box key={risk.level}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                          <Typography variant="body1" fontWeight={600}>
                            Mức độ {risk.level}
                          </Typography>
                          <Typography variant="body1" fontWeight={600}>
                            {risk.count} người ({risk.percentage}%)
                          </Typography>
                        </Stack>
                        <LinearProgress
                          variant="determinate"
                          value={risk.percentage}
                          sx={{
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: '#f0f0f0',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: risk.color,
                              borderRadius: 6,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Kế hoạch can thiệp
                  </Typography>
                  <Stack spacing={2}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">Người dùng nguy cơ cao (23 người)</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2">
                          • Lên lịch tư vấn cá nhân trong vòng 48 giờ<br/>
                          • Thông báo cho gia đình và người thân<br/>
                          • Theo dõi hàng ngày qua ứng dụng<br/>
                          • Kết nối với các trung tâm hỗ trợ
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">Người dùng nguy cơ trung bình (145 người)</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2">
                          • Tư vấn nhóm hàng tuần<br/>
                          • Khóa học chuyên sâu về phòng tránh<br/>
                          • Theo dõi định kỳ mỗi tuần<br/>
                          • Hoạt động cộng đồng tích cực
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Hiệu suất và đánh giá tư vấn viên
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell>Tư vấn viên</TableCell>
                        <TableCell align="center">Số buổi tư vấn</TableCell>
                        <TableCell align="center">Đánh giá</TableCell>
                        <TableCell align="center">Chuyên môn</TableCell>
                        <TableCell align="center">Hiệu suất</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {counselorPerformance.map((counselor) => (
                        <TableRow key={counselor.id} hover>
                          <TableCell>
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Avatar sx={{ bgcolor: 'primary.main' }}>
                                {counselor.name.charAt(0)}
                              </Avatar>
                              <Typography variant="body1" fontWeight={600}>
                                {counselor.name}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="h6" color="primary">
                              {counselor.sessions}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                              <StarIcon fontSize="small" color="warning" />
                              <Typography variant="body1" fontWeight={600}>
                                {counselor.rating}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="center">
                            <Chip 
                              label={counselor.specialization}
                              color="primary"
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Chip 
                              label="Xuất sắc"
                              color="success"
                              size="small"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Thống kê tư vấn
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Tổng buổi tư vấn tháng này
                      </Typography>
                      <Typography variant="h5" color="primary">
                        567
                      </Typography>
                      <Typography variant="caption" color="success.main">
                        +18% so với tháng trước
                      </Typography>
                    </Box>
                    
                    <Divider />
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Thời gian tư vấn trung bình
                      </Typography>
                      <Typography variant="h5" color="primary">
                        45 phút
                      </Typography>
                    </Box>
                    
                    <Divider />
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Tỷ lệ hài lòng
                      </Typography>
                      <Typography variant="h5" color="success.main">
                        94%
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
      </Paper>

      {/* Additional Insights */}
      <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
          <InsightsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight={600}>
            Thông tin chi tiết và khuyến nghị
          </Typography>
        </Stack>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Alert severity="success" sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Điểm mạnh
              </Typography>
              <Typography variant="body2">
                • Tỷ lệ hoàn thành khóa học cao (78%)<br/>
                • Đánh giá người dùng tích cực (4.6/5)<br/>
                • Tăng trưởng người dùng ổn định
              </Typography>
            </Alert>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Alert severity="warning" sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Cần cải thiện
              </Typography>
              <Typography variant="body2">
                • Tăng số lượng tư vấn viên<br/>
                • Phát triển thêm khóa học chuyên sâu<br/>
                • Cải thiện hệ thống theo dõi
              </Typography>
            </Alert>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Alert severity="info" sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Kế hoạch phát triển
              </Typography>
              <Typography variant="body2">
                • Mở rộng chương trình đến các tỉnh<br/>
                • Tích hợp AI hỗ trợ tư vấn<br/>
                • Phát triển ứng dụng di động
              </Typography>
            </Alert>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ReportsStatistics; 