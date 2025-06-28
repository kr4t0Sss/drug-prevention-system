import React, { useState } from 'react';
import {
  Container, Typography, Box, Stack, Paper, Grid, Card, CardContent,
  Tab, Tabs, Switch, FormControlLabel, TextField, Button, Select, MenuItem,
  FormControl, InputLabel, Divider, Alert, List, ListItem, ListItemText,
  ListItemIcon, Accordion, AccordionSummary, AccordionDetails, Chip, Avatar,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Tooltip,
} from '@mui/material';
import {
  Settings as SettingsIcon, Security as SecurityIcon, Backup as BackupIcon,
  Notifications as NotificationsIcon, Email as EmailIcon, Sms as SmsIcon,
  Cloud as CloudIcon, Storage as DatabaseIcon, Speed as SpeedIcon,
  Update as UpdateIcon, BugReport as BugReportIcon, Analytics as AnalyticsIcon,
  ExpandMore as ExpandMoreIcon, Save as SaveIcon, RestartAlt as RestartAltIcon,
  Download as DownloadIcon, Upload as UploadIcon, Delete as DeleteIcon,
  Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon,
  CheckCircle as CheckCircleIcon, Warning as WarningIcon, Error as ErrorIcon,
  Info as InfoIcon, Schedule as ScheduleIcon,
} from '@mui/icons-material';

const SystemSettings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [backupDialogOpen, setBackupDialogOpen] = useState(false);
  
  // System status data
  const systemStatus = {
    version: 'v2.1.0',
    uptime: '15 ngày 8 giờ',
    dbSize: '1.2 GB',
    serverStatus: 'Tốt',
    lastBackup: '2024-03-15 02:00',
    activeUsers: 234,
    memoryUsage: 68,
    cpuUsage: 45,
    diskUsage: 32,
  };

  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'Phòng chống ma túy',
    siteDescription: 'Hệ thống hỗ trợ phòng chống tệ nạn xã hội',
    maintenanceMode: false,
    debugMode: false,
    
    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordPolicy: 'strong',
    loginAttempts: 5,
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    adminAlerts: true,
    
    // Backup Settings
    autoBackup: true,
    backupFrequency: 'daily',
    backupRetention: 30,
    
    // Performance Settings
    cacheEnabled: true,
    compressionEnabled: true,
    cdnEnabled: false,
  });

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log('Saving settings:', settings);
    // Here you would save to backend
  };

  const TabPanel = ({ children, value, index, ...other }) => (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <SettingsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Cài đặt hệ thống
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Quản lý cấu hình, bảo mật và tối ưu hóa hiệu suất hệ thống
        </Typography>
      </Box>

      {/* System Status Cards */}
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
                    {systemStatus.version}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Phiên bản hệ thống
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Cập nhật mới nhất
                  </Typography>
                </Box>
                <UpdateIcon sx={{ fontSize: 48, opacity: 0.8 }} />
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
                    {systemStatus.uptime}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Thời gian hoạt động
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Ổn định và tin cậy
                  </Typography>
                </Box>
                <ScheduleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
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
                    {systemStatus.dbSize}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Dung lượng database
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Tăng 2% tháng này
                  </Typography>
                </Box>
                <DatabaseIcon sx={{ fontSize: 48, opacity: 0.8 }} />
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
                    {systemStatus.serverStatus}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Trạng thái server
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Tất cả dịch vụ hoạt động
                  </Typography>
                </Box>
                <CheckCircleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Performance Monitoring */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Giám sát hiệu suất hệ thống
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">Sử dụng CPU</Typography>
                <Typography variant="body2" fontWeight={600}>{systemStatus.cpuUsage}%</Typography>
              </Stack>
              <Box sx={{ width: '100%', backgroundColor: '#f0f0f0', borderRadius: 1 }}>
                <Box
                  sx={{
                    width: `${systemStatus.cpuUsage}%`,
                    height: 8,
                    backgroundColor: systemStatus.cpuUsage > 80 ? '#f44336' : systemStatus.cpuUsage > 60 ? '#ff9800' : '#4caf50',
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">Sử dụng Memory</Typography>
                <Typography variant="body2" fontWeight={600}>{systemStatus.memoryUsage}%</Typography>
              </Stack>
              <Box sx={{ width: '100%', backgroundColor: '#f0f0f0', borderRadius: 1 }}>
                <Box
                  sx={{
                    width: `${systemStatus.memoryUsage}%`,
                    height: 8,
                    backgroundColor: systemStatus.memoryUsage > 80 ? '#f44336' : systemStatus.memoryUsage > 60 ? '#ff9800' : '#4caf50',
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">Sử dụng Disk</Typography>
                <Typography variant="body2" fontWeight={600}>{systemStatus.diskUsage}%</Typography>
              </Stack>
              <Box sx={{ width: '100%', backgroundColor: '#f0f0f0', borderRadius: 1 }}>
                <Box
                  sx={{
                    width: `${systemStatus.diskUsage}%`,
                    height: 8,
                    backgroundColor: systemStatus.diskUsage > 80 ? '#f44336' : systemStatus.diskUsage > 60 ? '#ff9800' : '#4caf50',
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Main Settings Panel */}
      <Paper elevation={3} sx={{ borderRadius: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} variant="scrollable">
            <Tab label="Cài đặt chung" icon={<SettingsIcon />} />
            <Tab label="Bảo mật" icon={<SecurityIcon />} />
            <Tab label="Thông báo" icon={<NotificationsIcon />} />
            <Tab label="Sao lưu" icon={<BackupIcon />} />
            <Tab label="Hiệu suất" icon={<SpeedIcon />} />
            <Tab label="Bảo trì" icon={<BugReportIcon />} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Cài đặt chung hệ thống
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Tên website"
                    value={settings.siteName}
                    onChange={(e) => handleSettingChange('general', 'siteName', e.target.value)}
                  />
                  
                  <TextField
                    fullWidth
                    label="Mô tả website"
                    multiline
                    rows={3}
                    value={settings.siteDescription}
                    onChange={(e) => handleSettingChange('general', 'siteDescription', e.target.value)}
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.maintenanceMode}
                        onChange={(e) => handleSettingChange('general', 'maintenanceMode', e.target.checked)}
                      />
                    }
                    label="Chế độ bảo trì"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.debugMode}
                        onChange={(e) => handleSettingChange('general', 'debugMode', e.target.checked)}
                      />
                    }
                    label="Chế độ debug"
                  />
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Thông tin hệ thống
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phiên bản hiện tại
                      </Typography>
                      <Typography variant="h6">
                        {systemStatus.version}
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Người dùng đang hoạt động
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {systemStatus.activeUsers}
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Sao lưu cuối cùng
                      </Typography>
                      <Typography variant="body1">
                        {systemStatus.lastBackup}
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
              Cài đặt bảo mật
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.twoFactorAuth}
                        onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
                      />
                    }
                    label="Xác thực hai yếu tố (2FA)"
                  />
                  
                  <TextField
                    fullWidth
                    label="Thời gian hết hạn phiên (phút)"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                  />
                  
                  <FormControl fullWidth>
                    <InputLabel>Chính sách mật khẩu</InputLabel>
                    <Select
                      value={settings.passwordPolicy}
                      label="Chính sách mật khẩu"
                      onChange={(e) => handleSettingChange('security', 'passwordPolicy', e.target.value)}
                    >
                      <MenuItem value="weak">Yếu (6 ký tự)</MenuItem>
                      <MenuItem value="medium">Trung bình (8 ký tự + số)</MenuItem>
                      <MenuItem value="strong">Mạnh (8 ký tự + số + ký tự đặc biệt)</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <TextField
                    fullWidth
                    label="Số lần đăng nhập sai tối đa"
                    type="number"
                    value={settings.loginAttempts}
                    onChange={(e) => handleSettingChange('security', 'loginAttempts', parseInt(e.target.value))}
                  />
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Khuyến nghị bảo mật
                  </Typography>
                  <Typography variant="body2">
                    • Bật xác thực hai yếu tố cho tất cả admin<br/>
                    • Sử dụng chính sách mật khẩu mạnh<br/>
                    • Thường xuyên cập nhật hệ thống<br/>
                    • Giám sát log đăng nhập bất thường
                  </Typography>
                </Alert>
                
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Lịch sử bảo mật
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Cập nhật bảo mật"
                        secondary="15/03/2024 - Patch v2.1.0"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <WarningIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Phát hiện đăng nhập bất thường"
                        secondary="14/03/2024 - IP: 192.168.1.100"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Cài đặt thông báo
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.emailNotifications}
                        onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                      />
                    }
                    label="Thông báo qua Email"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.smsNotifications}
                        onChange={(e) => handleSettingChange('notifications', 'smsNotifications', e.target.checked)}
                      />
                    }
                    label="Thông báo qua SMS"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.pushNotifications}
                        onChange={(e) => handleSettingChange('notifications', 'pushNotifications', e.target.checked)}
                      />
                    }
                    label="Push Notifications"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.adminAlerts}
                        onChange={(e) => handleSettingChange('notifications', 'adminAlerts', e.target.checked)}
                      />
                    }
                    label="Cảnh báo cho Admin"
                  />
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Cấu hình SMTP
                  </Typography>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="SMTP Server"
                      placeholder="smtp.gmail.com"
                    />
                    <TextField
                      fullWidth
                      label="Port"
                      placeholder="587"
                      type="number"
                    />
                    <TextField
                      fullWidth
                      label="Username"
                      placeholder="your-email@gmail.com"
                    />
                    <TextField
                      fullWidth
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        ),
                      }}
                    />
                    <Button variant="outlined" startIcon={<EmailIcon />}>
                      Kiểm tra kết nối
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Sao lưu và khôi phục dữ liệu
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.autoBackup}
                        onChange={(e) => handleSettingChange('backup', 'autoBackup', e.target.checked)}
                      />
                    }
                    label="Tự động sao lưu"
                  />
                  
                  <FormControl fullWidth>
                    <InputLabel>Tần suất sao lưu</InputLabel>
                    <Select
                      value={settings.backupFrequency}
                      label="Tần suất sao lưu"
                      onChange={(e) => handleSettingChange('backup', 'backupFrequency', e.target.value)}
                    >
                      <MenuItem value="hourly">Mỗi giờ</MenuItem>
                      <MenuItem value="daily">Hàng ngày</MenuItem>
                      <MenuItem value="weekly">Hàng tuần</MenuItem>
                      <MenuItem value="monthly">Hàng tháng</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <TextField
                    fullWidth
                    label="Thời gian lưu trữ (ngày)"
                    type="number"
                    value={settings.backupRetention}
                    onChange={(e) => handleSettingChange('backup', 'backupRetention', parseInt(e.target.value))}
                  />
                  
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      startIcon={<BackupIcon />}
                      onClick={() => setBackupDialogOpen(true)}
                      sx={{ backgroundColor: '#4caf50' }}
                    >
                      Sao lưu ngay
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<UploadIcon />}
                      sx={{ borderColor: '#42a5f5', color: '#42a5f5' }}
                    >
                      Khôi phục
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Lịch sử sao lưu
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Sao lưu tự động"
                        secondary="15/03/2024 02:00 - 1.2GB"
                      />
                      <IconButton size="small">
                        <DownloadIcon />
                      </IconButton>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Sao lưu tự động"
                        secondary="14/03/2024 02:00 - 1.1GB"
                      />
                      <IconButton size="small">
                        <DownloadIcon />
                      </IconButton>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Sao lưu tự động"
                        secondary="13/03/2024 02:00 - 1.1GB"
                      />
                      <IconButton size="small">
                        <DownloadIcon />
                      </IconButton>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Tối ưu hóa hiệu suất
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.cacheEnabled}
                        onChange={(e) => handleSettingChange('performance', 'cacheEnabled', e.target.checked)}
                      />
                    }
                    label="Bật Cache hệ thống"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.compressionEnabled}
                        onChange={(e) => handleSettingChange('performance', 'compressionEnabled', e.target.checked)}
                      />
                    }
                    label="Nén dữ liệu (Gzip)"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.cdnEnabled}
                        onChange={(e) => handleSettingChange('performance', 'cdnEnabled', e.target.checked)}
                      />
                    }
                    label="Sử dụng CDN"
                  />
                  
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Xóa Cache
                    </Button>
                    <Button variant="outlined" startIcon={<AnalyticsIcon />}>
                      Phân tích hiệu suất
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Alert severity="success" sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Hiệu suất tốt
                  </Typography>
                  <Typography variant="body2">
                    Hệ thống đang hoạt động ổn định với hiệu suất cao.
                    Thời gian phản hồi trung bình: 250ms
                  </Typography>
                </Alert>
                
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Thống kê hiệu suất
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Thời gian phản hồi trung bình
                      </Typography>
                      <Typography variant="h6" color="success.main">
                        250ms
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Số request/phút
                      </Typography>
                      <Typography variant="h6" color="primary">
                        1,234
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Tỷ lệ cache hit
                      </Typography>
                      <Typography variant="h6" color="success.main">
                        89%
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={5}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Bảo trì và kiểm tra hệ thống
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Button
                    variant="contained"
                    startIcon={<RestartAltIcon />}
                    color="warning"
                    fullWidth
                  >
                    Khởi động lại hệ thống
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<BugReportIcon />}
                    fullWidth
                  >
                    Kiểm tra lỗi hệ thống
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<UpdateIcon />}
                    fullWidth
                  >
                    Kiểm tra cập nhật
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<DatabaseIcon />}
                    fullWidth
                  >
                    Tối ưu database
                  </Button>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Nhật ký hệ thống
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <InfoIcon color="info" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Hệ thống khởi động"
                        secondary="15/03/2024 08:00:00"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Sao lưu hoàn thành"
                        secondary="15/03/2024 02:00:00"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <WarningIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary="CPU sử dụng cao"
                        secondary="14/03/2024 15:30:00"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        {/* Save Button */}
        <Box sx={{ p: 3, borderTop: 1, borderColor: 'divider', backgroundColor: '#f5f5f5' }}>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button variant="outlined">
              Hủy thay đổi
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSaveSettings}
              sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#388e3c' } }}
            >
              Lưu cài đặt
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Backup Dialog */}
      <Dialog open={backupDialogOpen} onClose={() => setBackupDialogOpen(false)}>
        <DialogTitle>Xác nhận sao lưu</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn thực hiện sao lưu hệ thống ngay bây giờ?
            Quá trình này có thể mất vài phút.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBackupDialogOpen(false)}>Hủy</Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log('Starting backup...');
              setBackupDialogOpen(false);
            }}
            sx={{ backgroundColor: '#4caf50' }}
          >
            Bắt đầu sao lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SystemSettings; 