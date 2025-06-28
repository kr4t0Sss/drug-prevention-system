import React, { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate
} from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Chip,
  Stack,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert,
  Divider,
} from '@mui/material';
import {
  School as SchoolIcon,
  AccessTime as AccessTimeIcon,
  Group as GroupIcon,
  BarChart as BarChartIcon,
  PlayCircleFilled as PlayCircleFilledIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  MenuBook as MenuBookIcon,
} from '@mui/icons-material';

const mockCourses = [
  {
    id: '1',
    title: 'Kiến thức cơ bản về ma túy',
    description: 'Khóa học này cung cấp kiến thức nền tảng về các loại ma túy phổ biến, tác hại của chúng đối với sức khỏe thể chất và tinh thần, cũng như những ảnh hưởng tiêu cực đến gia đình và xã hội. Bạn sẽ học cách nhận biết các dấu hiệu sớm của việc sử dụng ma túy và hiểu rõ hơn về tầm quan trọng của việc phòng chống.',
    longDescription: 'Chi tiết hơn về khóa học này, bao gồm các chủ đề chuyên sâu, các trường hợp thực tế và những nghiên cứu mới nhất về tác động của ma túy. Khóa học được thiết kế để cung cấp một cái nhìn toàn diện, giúp học viên xây dựng nền tảng vững chắc để tự bảo vệ mình và những người xung quanh. Đặc biệt, khóa học cũng sẽ đề cập đến các phương pháp hỗ trợ ban đầu và cách tiếp cận những người cần giúp đỡ.',
    image: '/images/courses/course1.jpg',
    level: 'Cơ bản',
    target: 'Học sinh, Sinh viên',
    duration: '2 giờ',
    modules: [
      { id: 1, title: 'Giới thiệu về ma túy', completed: true },
      { id: 2, title: 'Các loại ma túy phổ biến', completed: false },
      { id: 3, title: 'Tác hại của ma túy đối với sức khỏe', completed: false },
      { id: 4, title: 'Ảnh hưởng của ma túy đến xã hội', completed: false },
    ],
  },
  {
    id: '2',
    title: 'Kỹ năng từ chối và đối phó',
    description: 'Khóa học giúp bạn phát triển các kỹ năng quan trọng để từ chối ma túy một cách tự tin, đối phó với áp lực bạn bè và xây dựng những mối quan hệ lành mạnh.',
    longDescription: 'Trong khóa học này, bạn sẽ được hướng dẫn qua các tình huống giả định thực tế, học cách giao tiếp hiệu quả và đưa ra quyết định đúng đắn khi đối mặt với những lời mời gọi nguy hiểm. Khóa học cũng nhấn mạnh việc xây dựng lòng tự trọng và khả năng tự chủ, giúp bạn vượt qua những thách thức trong cuộc sống mà không cần đến ma túy.',
    image: '/images/courses/course2.jpg',
    level: 'Trung cấp',
    target: 'Thanh thiếu niên, Người trẻ',
    duration: '3 giờ',
    modules: [
      { id: 1, title: 'Hiểu về áp lực bạn bè', completed: true },
      { id: 2, title: 'Các chiến lược từ chối hiệu quả', completed: true },
      { id: 3, title: 'Xây dựng sự tự tin và lòng tự trọng', completed: false },
      { id: 4, title: 'Tìm kiếm sự hỗ trợ', completed: false },
    ],
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        // Simulate API call
        const foundCourse = mockCourses.find((c) => c.id === id);
        if (foundCourse) {
          setCourse(foundCourse);
        } else {
          setError('Không tìm thấy khóa học.');
        }
      } catch (err) {
        setError('Đã xảy ra lỗi khi tải khóa học.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetail();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Alert severity="error">{error}</Alert>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/courses')}>
          Quay lại danh sách khóa học
        </Button>
      </Box>
    );
  }

  if (!course) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Alert severity="info">Không tìm thấy khóa học này.</Alert>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/courses')}>
          Quay lại danh sách khóa học
        </Button>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <SchoolIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          {course.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mx: 'auto', mb: 3 }}>
          {course.description}
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', overflow: 'hidden' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={course.image}
              alt={course.title}
              sx={{
                width: '100%',
                height: 300,
                borderRadius: 3,
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Thông tin khóa học
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
              <Chip label={`Trình độ: ${course.level}`} color="primary" icon={<BarChartIcon />} sx={{ fontWeight: 'bold' }} />
              <Chip label={`Đối tượng: ${course.target}`} color="secondary" icon={<GroupIcon />} sx={{ fontWeight: 'bold' }} />
              <Chip label={`Thời lượng: ${course.duration}`} color="info" icon={<AccessTimeIcon />} sx={{ fontWeight: 'bold' }} />
            </Stack>
            <Typography variant="body1" paragraph color="text.primary" sx={{ mb: 3 }}>
              {course.longDescription}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayCircleFilledIcon />}
              sx={{
                backgroundColor: '#4caf50',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
              onClick={() => navigate(`/courses/view/${course.id}`)} // Link to course view page
            >
              Bắt đầu học
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h5" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MenuBookIcon /> Nội dung khóa học
            </Typography>
            <List>
              {course.modules.map((moduleItem) => (
                <Paper key={moduleItem.id} elevation={1} sx={{ mb: 2, borderRadius: 1, overflow: 'hidden' }}>
                  <ListItem
                    secondaryAction={
                      moduleItem.completed ? (
                        <CheckCircleOutlineIcon color="success" />
                      ) : (
                        <PlayCircleFilledIcon color="action" />
                      )
                    }
                    sx={{
                      bgcolor: moduleItem.completed ? '#e8f5e9' : '#f5f5f5',
                      '&:hover': {
                        bgcolor: moduleItem.completed ? '#dcedc8' : '#eeeeee',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      {moduleItem.completed ? <CheckCircleOutlineIcon color="success" /> : <PlayCircleFilledIcon color="action" />}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight={500} color={moduleItem.completed ? 'success.dark' : 'text.primary'}>
                          {moduleItem.title}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Paper>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CourseDetail; 