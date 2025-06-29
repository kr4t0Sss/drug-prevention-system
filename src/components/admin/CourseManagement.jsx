import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Fab,
} from '@mui/material';
import {
  School as SchoolIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  People as PeopleIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Hiểu về tác hại của ma túy',
      description: 'Khóa học cơ bản về tác hại của các chất gây nghiện',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      status: 'active',
      enrollments: 156,
      completions: 142,
      duration: '2 tuần',
      lessons: 8,
    },
    {
      id: 2,
      title: 'Kỹ năng từ chối ma túy',
      description: 'Phát triển kỹ năng từ chối và đối phó với áp lực xã hội',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400',
      status: 'active',
      enrollments: 134,
      completions: 98,
      duration: '3 tuần',
      lessons: 12,
    },
    {
      id: 3,
      title: 'Tâm lý học về nghiện',
      description: 'Hiểu về cơ chế tâm lý của nghiện và cách phục hồi',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400',
      status: 'draft',
      enrollments: 0,
      completions: 0,
      duration: '4 tuần',
      lessons: 16,
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const totalStats = {
    totalCourses: courses.length,
    activeCourses: courses.filter(c => c.status === 'active').length,
    totalEnrollments: courses.reduce((sum, c) => sum + c.enrollments, 0),
    completionRate: Math.round(
      (courses.reduce((sum, c) => sum + c.completions, 0) / 
       courses.reduce((sum, c) => sum + c.enrollments, 0)) * 100
    ),
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'draft': return 'warning';
      case 'archived': return 'default';
      default: return 'default';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Đang hoạt động';
      case 'draft': return 'Bản nháp';
      case 'archived': return 'Đã lưu trữ';
      default: return status;
    }
  };

  const handleAddCourse = () => {
    setSelectedCourse(null);
    setIsEditing(false);
    setDialogOpen(true);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setIsEditing(true);
    setDialogOpen(true);
  };

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter(c => c.id !== courseId));
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.dark">
            Quản lý khóa học
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Quản lý nội dung và theo dõi hiệu quả các khóa học phòng chống tệ nạn xã hội
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
                    {totalStats.totalCourses}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tổng khóa học
                  </Typography>
                </Box>
                <SchoolIcon sx={{ fontSize: 48, opacity: 0.8 }} />
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
                    {totalStats.activeCourses}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Đang hoạt động
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
            color: 'white',
            '&:hover': { transform: 'translateY(-4px)' },
            transition: 'all 0.3s ease-in-out'
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {totalStats.totalEnrollments}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tổng đăng ký
                  </Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 48, opacity: 0.8 }} />
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
                    {totalStats.completionRate}%
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Tỷ lệ hoàn thành
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 48, opacity: 0.8 }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} md={6} lg={4} key={course.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': { 
                transform: 'translateY(-8px)',
                boxShadow: 6,
              },
              transition: 'all 0.3s ease-in-out',
            }}>
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {course.description}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip 
                      label={getStatusText(course.status)}
                      color={getStatusColor(course.status)}
                      size="small"
                    />
                    <Chip 
                      label={`${course.lessons} bài học`}
                      variant="outlined"
                      size="small"
                    />
                    <Chip 
                      label={course.duration}
                      variant="outlined"
                      size="small"
                    />
                  </Stack>

                  <Box sx={{ 
                    p: 2, 
                    bgcolor: 'grey.50', 
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.200'
                  }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Đăng ký
                        </Typography>
                        <Typography variant="h6" fontWeight={600} color="primary.main">
                          {course.enrollments}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Hoàn thành
                        </Typography>
                        <Typography variant="h6" fontWeight={600} color="success.main">
                          {course.completions}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <IconButton 
                      size="small" 
                      color="primary"
                      onClick={() => handleEditCourse(course)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      color="error"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        onClick={handleAddCourse}
      >
        <AddIcon />
      </Fab>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {isEditing ? 'Chỉnh sửa khóa học' : 'Thêm khóa học mới'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Tên khóa học"
                defaultValue={selectedCourse?.title || ''}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Mô tả"
                multiline
                rows={3}
                defaultValue={selectedCourse?.description || ''}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="URL hình ảnh"
                defaultValue={selectedCourse?.image || ''}
                variant="outlined"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Trạng thái</InputLabel>
                    <Select
                      defaultValue={selectedCourse?.status || 'draft'}
                      label="Trạng thái"
                    >
                      <MenuItem value="active">Đang hoạt động</MenuItem>
                      <MenuItem value="draft">Bản nháp</MenuItem>
                      <MenuItem value="archived">Đã lưu trữ</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Thời lượng"
                    defaultValue={selectedCourse?.duration || ''}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Số bài học"
                type="number"
                defaultValue={selectedCourse?.lessons || 0}
                variant="outlined"
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Hủy</Button>
          <Button variant="contained">
            {isEditing ? 'Cập nhật' : 'Thêm mới'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CourseManagement; 