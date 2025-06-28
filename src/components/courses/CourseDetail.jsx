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
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&auto=format',
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
  {
    id: '3',
    title: 'Vai trò của gia đình trong phòng chống ma túy',
    description: 'Dành cho phụ huynh: Cách nhận biết sớm các dấu hiệu, hỗ trợ con em và xây dựng môi trường gia đình lành mạnh.',
    longDescription: 'Khóa học chuyên sâu về vai trò quan trọng của gia đình trong việc phòng chống ma túy. Bạn sẽ học cách tạo ra môi trường gia đình an toàn, cách giao tiếp hiệu quả với con em và nhận biết các dấu hiệu cảnh báo sớm.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop&auto=format',
    level: 'Nâng cao',
    target: 'Phụ huynh, Người chăm sóc',
    duration: '4 giờ',
    modules: [
      { id: 1, title: 'Xây dựng môi trường gia đình an toàn', completed: false },
      { id: 2, title: 'Giao tiếp hiệu quả với con em', completed: false },
      { id: 3, title: 'Nhận biết dấu hiệu cảnh báo', completed: false },
      { id: 4, title: 'Hỗ trợ và can thiệp kịp thời', completed: false },
    ],
  },
  {
    id: '4',
    title: 'Chương trình phục hồi toàn diện',
    description: 'Tổng quan về các phương pháp phục hồi, hỗ trợ tâm lý và tái hòa nhập cộng đồng cho người đã từng sử dụng ma túy.',
    longDescription: 'Khóa học chuyên nghiệp về các phương pháp phục hồi và tái hòa nhập cho người đã từng sử dụng ma túy. Bao gồm các kỹ thuật tâm lý, hỗ trợ xã hội và xây dựng kế hoạch phục hồi dài hạn.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop&auto=format',
    level: 'Nâng cao',
    target: 'Chuyên gia, Cộng đồng',
    duration: '5 giờ',
    modules: [
      { id: 1, title: 'Các phương pháp phục hồi hiện đại', completed: false },
      { id: 2, title: 'Hỗ trợ tâm lý chuyên sâu', completed: false },
      { id: 3, title: 'Tái hòa nhập cộng đồng', completed: false },
      { id: 4, title: 'Xây dựng kế hoạch dài hạn', completed: false },
    ],
  },
  {
    id: '5',
    title: 'Tâm lý học và nghiện chất',
    description: 'Hiểu sâu về cơ chế tâm lý của nghiện chất, các yếu tố nguy cơ và phương pháp can thiệp tâm lý hiệu quả.',
    longDescription: 'Khóa học chuyên sâu về tâm lý học nghiện chất, giúp bạn hiểu rõ cơ chế não bộ, các yếu tố tâm lý dẫn đến nghiện và các phương pháp can thiệp hiệu quả. Khóa học cung cấp kiến thức khoa học về neuropsychology của nghiện chất, các mô hình lý thuyết và ứng dụng thực tiễn trong điều trị và phòng ngừa.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&auto=format',
    level: 'Trung cấp',
    target: 'Chuyên gia, Cộng đồng',
    duration: '3.5 giờ',
    modules: [
      { id: 1, title: 'Cơ chế não bộ và nghiện chất', completed: false },
      { id: 2, title: 'Các yếu tố tâm lý nguy cơ', completed: false },
      { id: 3, title: 'Phương pháp can thiệp tâm lý', completed: false },
      { id: 4, title: 'Đánh giá và theo dõi tiến trình', completed: false },
      { id: 5, title: 'Ứng dụng thực tiễn trong điều trị', completed: false },
    ],
  },
  {
    id: '6',
    title: 'Xây dựng cộng đồng an toàn',
    description: 'Các chiến lược xây dựng môi trường cộng đồng an toàn, không có ma túy thông qua sự tham gia của người dân.',
    longDescription: 'Khóa học hướng dẫn cách xây dựng và duy trì một cộng đồng an toàn, không có ma túy. Bạn sẽ học các chiến lược huy động cộng đồng, phát triển các chương trình phòng ngừa dựa vào cộng đồng, và cách tạo ra môi trường hỗ trợ lẫn nhau. Khóa học nhấn mạnh vai trò của mỗi cá nhân trong việc xây dựng cộng đồng lành mạnh.',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop&auto=format',
    level: 'Cơ bản',
    target: 'Cộng đồng',
    duration: '2.5 giờ',
    modules: [
      { id: 1, title: 'Hiểu về cộng đồng và vai trò cá nhân', completed: false },
      { id: 2, title: 'Xác định và giải quyết vấn đề cộng đồng', completed: false },
      { id: 3, title: 'Xây dựng mạng lưới hỗ trợ', completed: false },
      { id: 4, title: 'Tổ chức các hoạt động cộng đồng', completed: false },
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