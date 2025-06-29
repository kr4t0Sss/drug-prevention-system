import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from '@mui/material';
import {
  Assessment as AssessmentIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Visibility as VisibilityIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AssessmentManagement = () => {
  const [assessments] = useState([
    {
      id: 1,
      user: 'Nguyễn Văn An',
      type: 'CRAFFT Assessment',
      score: 2,
      riskLevel: 'medium',
      completedDate: '2024-03-15',
      recommendations: ['Tư vấn cá nhân', 'Theo dõi định kỳ'],
    },
    {
      id: 2,
      user: 'Trần Thị Bình',
      type: 'ASSIST Assessment',
      score: 5,
      riskLevel: 'high',
      completedDate: '2024-03-14',
      recommendations: ['Can thiệp khẩn cấp', 'Hỗ trợ chuyên sâu'],
    },
    {
      id: 3,
      user: 'Lê Văn Cường',
      type: 'CRAFFT Assessment',
      score: 0,
      riskLevel: 'low',
      completedDate: '2024-03-13',
      recommendations: ['Giáo dục phòng ngừa'],
    },
  ]);

  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const riskDistribution = [
    { name: 'Thấp', value: 65, color: '#4caf50', count: 156 },
    { name: 'Trung bình', value: 25, color: '#ff9800', count: 60 },
    { name: 'Cao', value: 10, color: '#f44336', count: 24 },
  ];

  const monthlyData = [
    { month: 'T1', total: 45, high: 5 },
    { month: 'T2', total: 52, high: 8 },
    { month: 'T3', total: 67, high: 12 },
    { month: 'T4', total: 58, high: 7 },
    { month: 'T5', total: 73, high: 15 },
    { month: 'T6', total: 69, high: 11 },
  ];

  const getRiskColor = (level) => {
    switch (level) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      default: return 'default';
    }
  };

  const getRiskText = (level) => {
    switch (level) {
      case 'low': return 'Thấp';
      case 'medium': return 'Trung bình';
      case 'high': return 'Cao';
      default: return level;
    }
  };

  const handleViewDetails = (assessment) => {
    setSelectedAssessment(assessment);
    setDialogOpen(true);
  };

  const totalStats = {
    totalAssessments: assessments.length,
    highRisk: assessments.filter(a => a.riskLevel === 'high').length,
    mediumRisk: assessments.filter(a => a.riskLevel === 'medium').length,
    lowRisk: assessments.filter(a => a.riskLevel === 'low').length,
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <AssessmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Quản lý đánh giá
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Theo dõi và phân tích kết quả đánh giá rủi ro của người dùng
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
            color: 'white',
            '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {totalStats.totalAssessments}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tổng đánh giá
                  </Typography>
                </Box>
                <AssessmentIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #f44336 0%, #ff5722 100%)',
            color: 'white',
            '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {totalStats.highRisk}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Rủi ro cao
                  </Typography>
                </Box>
                <WarningIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #ff9800 0%, #ffc107 100%)',
            color: 'white',
            '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {totalStats.mediumRisk}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Rủi ro trung bình
                  </Typography>
                </Box>
                <ScheduleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
            color: 'white',
            '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {totalStats.lowRisk}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Rủi ro thấp
                  </Typography>
                </Box>
                <CheckCircleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Phân bố mức độ rủi ro
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2 }}>
              {riskDistribution.map((item) => (
                <Box key={item.name} display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                  <Box display="flex" alignItems="center">
                    <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: '50%', mr: 1 }} />
                    <Typography variant="body2">{item.name}</Typography>
                  </Box>
                  <Typography variant="body2" fontWeight={600}>{item.count} người</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Xu hướng đánh giá theo tháng
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#2196f3" name="Tổng đánh giá" />
                <Bar dataKey="high" fill="#f44336" name="Rủi ro cao" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ mb: 4 }}>
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={600}>
              Đánh giá gần đây
            </Typography>
            <Button startIcon={<DownloadIcon />} variant="outlined">
              Xuất báo cáo
            </Button>
          </Stack>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Người dùng</TableCell>
                <TableCell>Loại đánh giá</TableCell>
                <TableCell>Điểm số</TableCell>
                <TableCell>Mức rủi ro</TableCell>
                <TableCell>Ngày hoàn thành</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assessments.map((assessment) => (
                <TableRow key={assessment.id} hover>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {assessment.user.charAt(0)}
                      </Avatar>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {assessment.user}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip label={assessment.type} variant="outlined" size="small" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight={600}>
                      {assessment.score}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={getRiskText(assessment.riskLevel)}
                      color={getRiskColor(assessment.riskLevel)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(assessment.completedDate).toLocaleDateString('vi-VN')}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleViewDetails(assessment)}
                    >
                      Chi tiết
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Chi tiết đánh giá</DialogTitle>
        <DialogContent>
          {selectedAssessment && (
            <Box sx={{ pt: 2 }}>
              <Stack spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60 }}>
                    {selectedAssessment.user.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {selectedAssessment.user}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedAssessment.type}
                    </Typography>
                  </Box>
                </Stack>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Điểm số</Typography>
                    <Typography variant="h4" fontWeight={600}>{selectedAssessment.score}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Mức rủi ro</Typography>
                    <Chip 
                      label={getRiskText(selectedAssessment.riskLevel)}
                      color={getRiskColor(selectedAssessment.riskLevel)}
                      sx={{ mt: 1 }}
                    />
                  </Grid>
                </Grid>

                <Box>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Khuyến nghị can thiệp:
                  </Typography>
                  <Stack spacing={1}>
                    {selectedAssessment.recommendations.map((rec, index) => (
                      <Alert key={index} severity="info" sx={{ fontSize: '0.875rem' }}>
                        {rec}
                      </Alert>
                    ))}
                  </Stack>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  <strong>Ngày hoàn thành:</strong> {new Date(selectedAssessment.completedDate).toLocaleDateString('vi-VN')}
                </Typography>
              </Stack>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Đóng</Button>
          <Button variant="contained">Tạo kế hoạch can thiệp</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AssessmentManagement; 