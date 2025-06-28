import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Box, Stack, Paper, Grid, Card, CardContent,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, IconButton, Button, Chip, Avatar, TextField,
  InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions,
  FormControl, InputLabel, Select, MenuItem, Alert, Menu, ListItemIcon,
  ListItemText, Badge, LinearProgress, Tab, Tabs, List, ListItem,
  ListItemAvatar, Divider, Accordion, AccordionSummary, AccordionDetails,
  Rating, Tooltip, CircularProgress,
} from '@mui/material';
import {
  Psychology as PsychologyIcon, Search as SearchIcon, Edit as EditIcon,
  Delete as DeleteIcon, Visibility as VisibilityIcon, MoreVert as MoreVertIcon,
  Add as AddIcon, Download as DownloadIcon, Schedule as ScheduleIcon,
  Group as GroupIcon, Person as PersonIcon, Family as FamilyIcon,
  CheckCircle as CheckCircleIcon, Cancel as CancelIcon, Pending as PendingIcon,
  Star as StarIcon, TrendingUp as TrendingUpIcon, Analytics as AnalyticsIcon,
  Assignment as AssignmentIcon, Phone as PhoneIcon, VideoCall as VideoCallIcon,
  Chat as ChatIcon, Event as EventIcon, Today as TodayIcon, CalendarMonth as CalendarIcon,
  AccessTime as TimeIcon, Warning as WarningIcon, ExpandMore as ExpandMoreIcon,
  Email as EmailIcon, LocationOn as LocationOnIcon, Work as WorkIcon,
} from '@mui/icons-material';

const CounselingManagement = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Quản lý tư vấn
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Quản lý phiên tư vấn và tư vấn viên trong hệ thống
        </Typography>
      </Box>

      <Grid container spacing={3}>
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
                    156
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tổng phiên tư vấn
                  </Typography>
                </Box>
                <PsychologyIcon sx={{ fontSize: 48, opacity: 0.8 }} />
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
                    12
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tư vấn viên
                  </Typography>
                </Box>
                <PsychologyIcon sx={{ fontSize: 48, opacity: 0.8 }} />
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
                    89%
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tỷ lệ thành công
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
            color: 'white',
            '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    4.8
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Đánh giá trung bình
                  </Typography>
                </Box>
                <PsychologyIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Tính năng quản lý tư vấn
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Quản lý lịch hẹn tư vấn cá nhân, gia đình và nhóm<br/>
          • Theo dõi tiến trình và kết quả tư vấn<br/>
          • Quản lý hồ sơ tư vấn viên và đánh giá hiệu suất<br/>
          • Báo cáo thống kê hiệu quả can thiệp<br/>
          • Hệ thống thông báo và nhắc nhở tự động
        </Typography>
      </Paper>
    </Container>
  );
};

export default CounselingManagement; 