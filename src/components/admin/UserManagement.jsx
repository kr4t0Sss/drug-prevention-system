import React, { useState, useEffect } from 'react';
import {
  Container, Paper, Typography, Box, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TablePagination, IconButton, Button, Chip, Avatar, TextField,
  InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions, Stack,
  FormControl, InputLabel, Select, MenuItem, Alert, Menu, ListItemIcon,
  ListItemText, Card, CardContent, Grid, Divider, Badge, LinearProgress, Tab, Tabs,
  List, ListItem, ListItemAvatar, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import {
  People as PeopleIcon, Search as SearchIcon, Edit as EditIcon, Delete as DeleteIcon,
  Block as BlockIcon, CheckCircle as CheckCircleIcon, MoreVert as MoreVertIcon,
  Add as AddIcon, Download as DownloadIcon, Visibility as VisibilityIcon,
  Email as EmailIcon, Phone as PhoneIcon, PersonAdd as PersonAddIcon, Group as GroupIcon,
  Security as SecurityIcon, TrendingUp as TrendingUpIcon, Schedule as ScheduleIcon,
  Assessment as AssessmentIcon, School as SchoolIcon, Warning as WarningIcon,
  ExpandMore as ExpandMoreIcon, Analytics as AnalyticsIcon, Assignment as AssignmentIcon,
  LocationOn as LocationOnIcon, Work as WorkIcon, Cake as CakeIcon, Star as StarIcon,
} from '@mui/icons-material';

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1, name: 'Nguyễn Văn An', email: 'nguyenvanan@email.com', phone: '0123456789',
      role: 'user', status: 'active', joinDate: '2024-01-15', lastLogin: '2024-03-15 14:30',
      coursesCompleted: 3, riskLevel: 'low', assessments: 5, counselingSessions: 2,
      location: 'TP. Hồ Chí Minh', age: 25, occupation: 'Sinh viên', notes: 'Tích cực tham gia các hoạt động',
    },
    {
      id: 2, name: 'Trần Thị Bình', email: 'tranthibinh@email.com', phone: '0987654321',
      role: 'user', status: 'active', joinDate: '2024-02-10', lastLogin: '2024-03-14 09:15',
      coursesCompleted: 1, riskLevel: 'medium', assessments: 2, counselingSessions: 4,
      location: 'Hà Nội', age: 22, occupation: 'Nhân viên văn phòng', notes: 'Cần theo dõi thêm',
    },
    {
      id: 3, name: 'Lê Văn Cường', email: 'levancuong@email.com', phone: '0369852147',
      role: 'counselor', status: 'active', joinDate: '2024-01-20', lastLogin: '2024-03-15 16:45',
      coursesCompleted: 6, riskLevel: 'low', assessments: 0, counselingSessions: 45,
      location: 'Đà Nẵng', age: 35, occupation: 'Tư vấn viên', notes: 'Chuyên gia có kinh nghiệm',
      specialization: 'Tư vấn gia đình', rating: 4.8,
    },
    {
      id: 4, name: 'Phạm Thị Dung', email: 'phamthidung@email.com', phone: '0147258369',
      role: 'user', status: 'inactive', joinDate: '2024-03-01', lastLogin: '2024-03-10 11:20',
      coursesCompleted: 0, riskLevel: 'high', assessments: 1, counselingSessions: 0,
      location: 'Cần Thơ', age: 28, occupation: 'Thất nghiệp', notes: 'Cần can thiệp khẩn cấp',
    },
    {
      id: 5, name: 'Hoàng Minh Tuấn', email: 'hoangminhtuan@email.com', phone: '0258741369',
      role: 'counselor', status: 'active', joinDate: '2024-02-05', lastLogin: '2024-03-15 10:20',
      coursesCompleted: 8, riskLevel: 'low', assessments: 0, counselingSessions: 38,
      location: 'Hải Phòng', age: 32, occupation: 'Tư vấn viên', notes: 'Chuyên tư vấn nhóm',
      specialization: 'Tư vấn nhóm', rating: 4.7,
    },
    {
      id: 6, name: 'Vũ Thị Lan', email: 'vuthilan@email.com', phone: '0369741258',
      role: 'user', status: 'active', joinDate: '2024-03-05', lastLogin: '2024-03-15 08:45',
      coursesCompleted: 2, riskLevel: 'medium', assessments: 3, counselingSessions: 1,
      location: 'Huế', age: 19, occupation: 'Học sinh', notes: 'Cần hỗ trợ thêm',
    },
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuUserId, setMenuUserId] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length,
    counselors: users.filter(u => u.role === 'counselor').length,
    highRiskUsers: users.filter(u => u.riskLevel === 'high').length,
    newUsersThisMonth: users.filter(u => new Date(u.joinDate) > new Date('2024-03-01')).length,
  };

  useEffect(() => {
    let filtered = users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.phone.includes(searchTerm);
      const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
      const matchesRole = roleFilter === 'all' || user.role === roleFilter;
      const matchesRisk = riskFilter === 'all' || user.riskLevel === riskFilter;
      return matchesSearch && matchesStatus && matchesRole && matchesRisk;
    });
    setFilteredUsers(filtered);
    setPage(0);
  }, [users, searchTerm, statusFilter, roleFilter, riskFilter]);

  const handleMenuOpen = (event, userId) => {
    setAnchorEl(event.currentTarget);
    setMenuUserId(userId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuUserId(null);
  };

  const handleDialogOpen = (type, user = null) => {
    setDialogType(type);
    setSelectedUser(user);
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedUser(null);
    setDialogType('');
  };

  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    handleMenuClose();
  };

  const handleDeleteUser = () => {
    setUsers(users.filter(user => user.id !== selectedUser.id));
    handleDialogClose();
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      default: return 'default';
    }
  };

  const getRiskLevelText = (level) => {
    switch (level) {
      case 'low': return 'Thấp';
      case 'medium': return 'Trung bình';
      case 'high': return 'Cao';
      default: return level;
    }
  };

  const getRoleText = (role) => {
    switch (role) {
      case 'user': return 'Người dùng';
      case 'counselor': return 'Tư vấn viên';
      case 'admin': return 'Quản trị viên';
      default: return role;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Hoạt động';
      case 'inactive': return 'Không hoạt động';
      case 'blocked': return 'Bị khóa';
      default: return status;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'warning';
      case 'blocked': return 'error';
      default: return 'default';
    }
  };

  const TabPanel = ({ children, value, index, ...other }) => (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Quản lý tư vấn
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Quản lý người dùng, tư vấn viên và theo dõi hoạt động hệ thống phòng chống ma túy
        </Typography>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>{stats.totalUsers}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>Tổng người dùng</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    +{Math.round((stats.newUsersThisMonth / stats.totalUsers) * 100)}% tháng này
                  </Typography>
                </Box>
                <GroupIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>{stats.activeUsers}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>Đang hoạt động</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    {Math.round((stats.activeUsers / stats.totalUsers) * 100)}% tổng số
                  </Typography>
                </Box>
                <CheckCircleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #9c27b0 0%, #e91e63 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>{stats.counselors}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>Tư vấn viên</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Chuyên nghiệp
                  </Typography>
                </Box>
                <SecurityIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #ff9800 0%, #ffc107 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>{stats.highRiskUsers}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>Nguy cơ cao</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Cần can thiệp
                  </Typography>
                </Box>
                <WarningIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #607d8b 0%, #90a4ae 100%)',
            color: 'white', '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>{stats.newUsersThisMonth}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>Mới tháng này</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Tăng trưởng tốt
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Paper elevation={3} sx={{ borderRadius: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="Danh sách người dùng" icon={<PeopleIcon />} />
            <Tab label="Phân tích chi tiết" icon={<AnalyticsIcon />} />
            <Tab label="Báo cáo hoạt động" icon={<AssignmentIcon />} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          {/* Search and Filters */}
          <Box sx={{ p: 3, pb: 0 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Tìm kiếm theo tên, email, số điện thoại..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Trạng thái</InputLabel>
                  <Select value={statusFilter} label="Trạng thái" onChange={(e) => setStatusFilter(e.target.value)}>
                    <MenuItem value="all">Tất cả</MenuItem>
                    <MenuItem value="active">Hoạt động</MenuItem>
                    <MenuItem value="inactive">Không hoạt động</MenuItem>
                    <MenuItem value="blocked">Bị khóa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Vai trò</InputLabel>
                  <Select value={roleFilter} label="Vai trò" onChange={(e) => setRoleFilter(e.target.value)}>
                    <MenuItem value="all">Tất cả</MenuItem>
                    <MenuItem value="user">Người dùng</MenuItem>
                    <MenuItem value="counselor">Tư vấn viên</MenuItem>
                    <MenuItem value="admin">Quản trị viên</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Mức độ rủi ro</InputLabel>
                  <Select value={riskFilter} label="Mức độ rủi ro" onChange={(e) => setRiskFilter(e.target.value)}>
                    <MenuItem value="all">Tất cả</MenuItem>
                    <MenuItem value="low">Thấp</MenuItem>
                    <MenuItem value="medium">Trung bình</MenuItem>
                    <MenuItem value="high">Cao</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    startIcon={<PersonAddIcon />}
                    onClick={() => handleDialogOpen('add')}
                    sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#388e3c' } }}
                  >
                    Thêm mới
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{ borderColor: '#42a5f5', color: '#42a5f5' }}
                  >
                    Xuất
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          {/* Users Table */}
          <TableContainer sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell>Người dùng</TableCell>
                  <TableCell>Vai trò</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Mức độ rủi ro</TableCell>
                  <TableCell>Hoạt động</TableCell>
                  <TableCell>Ngày tham gia</TableCell>
                  <TableCell align="center">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id} hover>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                              user.status === 'active' ? (
                                <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#4caf50', border: '2px solid white' }} />
                              ) : null
                            }
                          >
                            <Avatar sx={{ bgcolor: 'primary.main' }}>
                              {user.name.charAt(0)}
                            </Avatar>
                          </Badge>
                          <Box>
                            <Typography variant="body1" fontWeight={600}>{user.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{user.email}</Typography>
                            <Typography variant="caption" color="text.secondary">{user.phone}</Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={getRoleText(user.role)}
                          color={user.role === 'counselor' ? 'primary' : 'default'}
                          size="small"
                          icon={user.role === 'counselor' ? <SecurityIcon /> : <GroupIcon />}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip label={getStatusText(user.status)} color={getStatusColor(user.status)} size="small" />
                      </TableCell>
                      <TableCell>
                        <Chip label={getRiskLevelText(user.riskLevel)} color={getRiskLevelColor(user.riskLevel)} size="small" />
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="body2">Khóa học: {user.coursesCompleted}</Typography>
                          <Typography variant="body2">Đánh giá: {user.assessments}</Typography>
                          <Typography variant="body2">Tư vấn: {user.counselingSessions}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{new Date(user.joinDate).toLocaleDateString('vi-VN')}</Typography>
                        <Typography variant="caption" color="text.secondary">Lần cuối: {user.lastLogin}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton onClick={(e) => handleMenuOpen(e, user.id)} size="small">
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={filteredUsers.length}
            page={page}
            onPageChange={(e, newPage) => setPage(newPage)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
            labelRowsPerPage="Số hàng mỗi trang:"
            labelDisplayedRows={({ from, to, count }) => `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`}
          />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>Phân tích chi tiết người dùng</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>Phân bố theo mức độ rủi ro</Typography>
                  <Stack spacing={2}>
                    {['low', 'medium', 'high'].map(level => {
                      const count = users.filter(u => u.riskLevel === level).length;
                      const percentage = (count / users.length * 100).toFixed(1);
                      return (
                        <Box key={level}>
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="body2">{getRiskLevelText(level)}</Typography>
                            <Typography variant="body2" fontWeight={600}>{count} ({percentage}%)</Typography>
                          </Stack>
                          <LinearProgress
                            variant="determinate"
                            value={percentage}
                            color={getRiskLevelColor(level)}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                        </Box>
                      );
                    })}
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>Hoạt động gần đây</Typography>
                  <List>
                    {users.slice(0, 4).map(user => (
                      <ListItem key={user.id} divider>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>{user.name.charAt(0)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={user.name}
                          secondary={`Lần cuối hoạt động: ${user.lastLogin}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>Thống kê tư vấn viên</Typography>
                  <Stack spacing={2}>
                    {users.filter(u => u.role === 'counselor').map(counselor => (
                      <Box key={counselor.id}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                              {counselor.name.charAt(0)}
                            </Avatar>
                            <Box>
                              <Typography variant="body2" fontWeight={600}>{counselor.name}</Typography>
                              <Typography variant="caption">{counselor.specialization}</Typography>
                            </Box>
                          </Stack>
                          <Stack alignItems="flex-end">
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <StarIcon fontSize="small" color="warning" />
                              <Typography variant="body2">{counselor.rating}</Typography>
                            </Stack>
                            <Typography variant="caption">{counselor.counselingSessions} buổi</Typography>
                          </Stack>
                        </Stack>
                        <Divider sx={{ my: 1 }} />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>Phân bố theo độ tuổi</Typography>
                  <Stack spacing={2}>
                    {[
                      { range: '18-25', count: users.filter(u => u.age >= 18 && u.age <= 25).length },
                      { range: '26-35', count: users.filter(u => u.age >= 26 && u.age <= 35).length },
                      { range: '36+', count: users.filter(u => u.age >= 36).length },
                    ].map(ageGroup => {
                      const percentage = (ageGroup.count / users.length * 100).toFixed(1);
                      return (
                        <Box key={ageGroup.range}>
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="body2">{ageGroup.range} tuổi</Typography>
                            <Typography variant="body2" fontWeight={600}>{ageGroup.count} ({percentage}%)</Typography>
                          </Stack>
                          <LinearProgress
                            variant="determinate"
                            value={percentage}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                        </Box>
                      );
                    })}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>Báo cáo hoạt động hệ thống</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Báo cáo người dùng mới</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Trong tháng này có {stats.newUsersThisMonth} người dùng mới đăng ký.
                      Tỷ lệ tăng trưởng so với tháng trước là 15%. Đây là tín hiệu tích cực cho thấy
                      hệ thống đang được nhiều người quan tâm và sử dụng.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Báo cáo tư vấn viên</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Hiện có {stats.counselors} tư vấn viên đang hoạt động với tổng cộng{' '}
                      {users.filter(u => u.role === 'counselor').reduce((sum, c) => sum + c.counselingSessions, 0)} buổi tư vấn.
                      Điểm đánh giá trung bình là{' '}
                      {(users.filter(u => u.role === 'counselor').reduce((sum, c) => sum + c.rating, 0) / stats.counselors).toFixed(1)}/5.0.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Cảnh báo nguy cơ cao</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Alert severity="error" sx={{ mb: 2 }}>
                      <Typography color="error">
                        Có {stats.highRiskUsers} người dùng được đánh giá có nguy cơ cao.
                        Cần có kế hoạch can thiệp kịp thời và theo dõi chặt chẽ.
                      </Typography>
                    </Alert>
                    <Typography>
                      Danh sách người dùng nguy cơ cao:{' '}
                      {users.filter(u => u.riskLevel === 'high').map(u => u.name).join(', ')}.
                      Khuyến nghị lên lịch tư vấn cá nhân trong vòng 48 giờ.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Hiệu quả can thiệp</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Tỷ lệ hoàn thành khóa học: {Math.round((users.reduce((sum, u) => sum + u.coursesCompleted, 0) / (users.length * 5)) * 100)}%.
                      Số buổi tư vấn trung bình mỗi người dùng: {(users.reduce((sum, u) => sum + u.counselingSessions, 0) / users.filter(u => u.role === 'user').length).toFixed(1)} buổi.
                      Xu hướng cải thiện tích cực được ghi nhận ở 78% người dùng tham gia chương trình.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
      </Paper>

      {/* Action Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleDialogOpen('view', users.find(u => u.id === menuUserId))}>
          <ListItemIcon><VisibilityIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Xem chi tiết</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen('edit', users.find(u => u.id === menuUserId))}>
          <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Chỉnh sửa</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleStatusChange(menuUserId, 'blocked')}>
          <ListItemIcon><BlockIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Khóa tài khoản</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen('delete', users.find(u => u.id === menuUserId))}>
          <ListItemIcon><DeleteIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Xóa</ListItemText>
        </MenuItem>
      </Menu>

      {/* User Detail Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}>
        <DialogTitle sx={{ pb: 1, backgroundColor: '#f5f5f5' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>{selectedUser?.name?.charAt(0)}</Avatar>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {dialogType === 'view' ? 'Chi tiết người dùng' : 
                 dialogType === 'edit' ? 'Chỉnh sửa thông tin' : 
                 dialogType === 'delete' ? 'Xác nhận xóa' : 'Thêm người dùng mới'}
              </Typography>
              {selectedUser && (
                <Typography variant="body2" color="text.secondary">{selectedUser.name}</Typography>
              )}
            </Box>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          {dialogType === 'view' && selectedUser && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Thông tin cơ bản</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Stack spacing={1}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <EmailIcon fontSize="small" />
                        <Typography variant="body2">{selectedUser.email}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <PhoneIcon fontSize="small" />
                        <Typography variant="body2">{selectedUser.phone}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <LocationOnIcon fontSize="small" />
                        <Typography variant="body2">{selectedUser.location}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CakeIcon fontSize="small" />
                        <Typography variant="body2">{selectedUser.age} tuổi</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <WorkIcon fontSize="small" />
                        <Typography variant="body2">{selectedUser.occupation}</Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  
                  {selectedUser.role === 'counselor' && (
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">Thông tin tư vấn viên</Typography>
                      <Divider sx={{ my: 1 }} />
                      <Stack spacing={1}>
                        <Typography variant="body2">Chuyên môn: {selectedUser.specialization}</Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <StarIcon fontSize="small" color="warning" />
                          <Typography variant="body2">Đánh giá: {selectedUser.rating}/5.0</Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Hoạt động</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Stack spacing={1}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <SchoolIcon fontSize="small" />
                        <Typography variant="body2">Khóa học hoàn thành: {selectedUser.coursesCompleted}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <AssessmentIcon fontSize="small" />
                        <Typography variant="body2">Đánh giá: {selectedUser.assessments}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <ScheduleIcon fontSize="small" />
                        <Typography variant="body2">Buổi tư vấn: {selectedUser.counselingSessions}</Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Ghi chú</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2">{selectedUser.notes || 'Không có ghi chú'}</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          )}
          
          {dialogType === 'delete' && selectedUser && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              Bạn có chắc chắn muốn xóa người dùng <strong>{selectedUser.name}</strong>? 
              Hành động này không thể hoàn tác.
            </Alert>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
          <Button onClick={handleDialogClose}>Hủy</Button>
          {dialogType === 'delete' && (
            <Button onClick={handleDeleteUser} color="error" variant="contained">Xóa</Button>
          )}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserManagement; 