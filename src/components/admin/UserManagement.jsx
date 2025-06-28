import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Button,
  Chip,
  Avatar,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Tooltip,
  Menu,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  People as PeopleIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Block as BlockIcon,
  CheckCircle as CheckCircleIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  Download as DownloadIcon,
  FilterList as FilterListIcon,
  Visibility as VisibilityIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn An',
      email: 'nguyenvanan@email.com',
      phone: '0123456789',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-15',
      lastLogin: '2024-03-15 14:30',
      coursesCompleted: 3,
      riskLevel: 'low',
      avatar: null,
    },
    {
      id: 2,
      name: 'Trần Thị Bình',
      email: 'tranthibinh@email.com',
      phone: '0987654321',
      role: 'user',
      status: 'active',
      joinDate: '2024-02-10',
      lastLogin: '2024-03-14 09:15',
      coursesCompleted: 1,
      riskLevel: 'medium',
      avatar: null,
    },
    {
      id: 3,
      name: 'Lê Văn Cường',
      email: 'levancuong@email.com',
      phone: '0369852147',
      role: 'counselor',
      status: 'active',
      joinDate: '2024-01-20',
      lastLogin: '2024-03-15 16:45',
      coursesCompleted: 6,
      riskLevel: 'low',
      avatar: null,
    },
    {
      id: 4,
      name: 'Phạm Thị Dung',
      email: 'phamthidung@email.com',
      phone: '0147258369',
      role: 'user',
      status: 'inactive',
      joinDate: '2024-03-01',
      lastLogin: '2024-03-10 11:20',
      coursesCompleted: 0,
      riskLevel: 'high',
      avatar: null,
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
  const [dialogType, setDialogType] = useState(''); // 'view', 'edit', 'delete'
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuUserId, setMenuUserId] = useState(null);

  // Filter users based on search and filters
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
      case 'blocked': return 'Bị chặn';
      default: return status;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Quản lý người dùng
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Quản lý thông tin và hoạt động của người dùng trong hệ thống
        </Typography>
      </Box>

      {/* Filters and Search */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
          <TextField
            placeholder="Tìm kiếm theo tên, email hoặc số điện thoại..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, minWidth: 300 }}
          />
          
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Trạng thái</InputLabel>
            <Select
              value={statusFilter}
              label="Trạng thái"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value="active">Hoạt động</MenuItem>
              <MenuItem value="inactive">Không hoạt động</MenuItem>
              <MenuItem value="blocked">Bị chặn</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Vai trò</InputLabel>
            <Select
              value={roleFilter}
              label="Vai trò"
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value="user">Người dùng</MenuItem>
              <MenuItem value="counselor">Tư vấn viên</MenuItem>
              <MenuItem value="admin">Quản trị viên</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Mức rủi ro</InputLabel>
            <Select
              value={riskFilter}
              label="Mức rủi ro"
              onChange={(e) => setRiskFilter(e.target.value)}
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value="low">Thấp</MenuItem>
              <MenuItem value="medium">Trung bình</MenuItem>
              <MenuItem value="high">Cao</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleDialogOpen('add')}
          >
            Thêm người dùng
          </Button>

          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
          >
            Xuất Excel
          </Button>
        </Stack>
      </Paper>

      {/* Users Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Người dùng</TableCell>
                <TableCell>Liên hệ</TableCell>
                <TableCell>Vai trò</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Mức rủi ro</TableCell>
                <TableCell>Khóa học</TableCell>
                <TableCell>Ngày tham gia</TableCell>
                <TableCell>Đăng nhập cuối</TableCell>
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
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {user.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            {user.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            ID: {user.id}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack spacing={0.5}>
                        <Box display="flex" alignItems="center">
                          <EmailIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2">{user.email}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <PhoneIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2">{user.phone}</Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={getRoleText(user.role)} 
                        color={user.role === 'admin' ? 'error' : user.role === 'counselor' ? 'info' : 'default'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={getStatusText(user.status)}
                        color={user.status === 'active' ? 'success' : user.status === 'blocked' ? 'error' : 'default'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={getRiskLevelText(user.riskLevel)}
                        color={getRiskLevelColor(user.riskLevel)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>
                        {user.coursesCompleted}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        khóa học
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {new Date(user.joinDate).toLocaleDateString('vi-VN')}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {user.lastLogin}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={(e) => handleMenuOpen(e, user.id)}
                        size="small"
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          labelRowsPerPage="Số hàng mỗi trang:"
          labelDisplayedRows={({ from, to, count }) => 
            `${from}-${to} của ${count !== -1 ? count : `hơn ${to}`}`
          }
        />
      </Paper>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleDialogOpen('view', users.find(u => u.id === menuUserId))}>
          <ListItemIcon>
            <VisibilityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Xem chi tiết</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen('edit', users.find(u => u.id === menuUserId))}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Chỉnh sửa</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleStatusChange(menuUserId, 'blocked')}>
          <ListItemIcon>
            <BlockIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Chặn người dùng</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen('delete', users.find(u => u.id === menuUserId))}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText sx={{ color: 'error.main' }}>Xóa người dùng</ListItemText>
        </MenuItem>
      </Menu>

      {/* Dialogs */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {dialogType === 'view' && 'Chi tiết người dùng'}
          {dialogType === 'edit' && 'Chỉnh sửa người dùng'}
          {dialogType === 'add' && 'Thêm người dùng mới'}
          {dialogType === 'delete' && 'Xác nhận xóa'}
        </DialogTitle>
        
        <DialogContent>
          {dialogType === 'delete' ? (
            <Alert severity="warning">
              Bạn có chắc chắn muốn xóa người dùng <strong>{selectedUser?.name}</strong>? 
              Hành động này không thể hoàn tác.
            </Alert>
          ) : (
            <Box sx={{ pt: 2 }}>
              {selectedUser && (
                <Stack spacing={3}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80 }}>
                      {selectedUser.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" fontWeight={600}>
                        {selectedUser.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedUser.email}
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <Stack direction="row" spacing={2}>
                    <Chip label={getRoleText(selectedUser.role)} />
                    <Chip label={getStatusText(selectedUser.status)} />
                    <Chip label={getRiskLevelText(selectedUser.riskLevel)} />
                  </Stack>
                  
                  <Typography variant="body1">
                    <strong>Số điện thoại:</strong> {selectedUser.phone}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Ngày tham gia:</strong> {new Date(selectedUser.joinDate).toLocaleDateString('vi-VN')}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Đăng nhập cuối:</strong> {selectedUser.lastLogin}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Khóa học hoàn thành:</strong> {selectedUser.coursesCompleted}
                  </Typography>
                </Stack>
              )}
            </Box>
          )}
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleDialogClose}>
            {dialogType === 'delete' ? 'Hủy' : 'Đóng'}
          </Button>
          {dialogType === 'delete' && (
            <Button onClick={handleDeleteUser} color="error" variant="contained">
              Xóa
            </Button>
          )}
          {(dialogType === 'edit' || dialogType === 'add') && (
            <Button variant="contained">
              Lưu
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserManagement; 