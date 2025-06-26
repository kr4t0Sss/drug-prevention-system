import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  CardMedia,
  Container,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School'; // Icon for courses
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';

const courses = [
  {
    id: 1,
    title: 'Kiến thức cơ bản về ma túy',
    description: 'Tìm hiểu về các loại ma túy phổ biến, tác hại của chúng đối với sức khỏe và xã hội, cũng như các dấu hiệu nhận biết cơ bản.',
    image: '/images/courses/course1.jpg',
    level: 'Cơ bản',
    target: 'Học sinh, Sinh viên',
    duration: '2 giờ',
  },
  {
    id: 2,
    title: 'Kỹ năng từ chối và đối phó',
    description: 'Học các kỹ năng cần thiết để từ chối ma túy một cách tự tin, đối phó với áp lực bạn bè và xây dựng môi trường an toàn.',
    image: '/images/courses/course2.jpg',
    level: 'Trung cấp',
    target: 'Thanh thiếu niên, Người trẻ',
    duration: '3 giờ',
  },
  {
    id: 3,
    title: 'Vai trò của gia đình trong phòng chống ma túy',
    description: 'Dành cho phụ huynh: Cách nhận biết sớm các dấu hiệu, hỗ trợ con em và xây dựng môi trường gia đình lành mạnh.',
    image: '/images/courses/course3.jpg',
    level: 'Nâng cao',
    target: 'Phụ huynh, Người chăm sóc',
    duration: '4 giờ',
  },
  {
    id: 4,
    title: 'Chương trình phục hồi toàn diện',
    description: 'Tổng quan về các phương pháp phục hồi, hỗ trợ tâm lý và tái hòa nhập cộng đồng cho người đã từng sử dụng ma túy.',
    image: '/images/courses/course4.jpg',
    level: 'Nâng cao',
    target: 'Chuyên gia, Cộng đồng',
    duration: '5 giờ',
  },
];

const targetGroups = ['Tất cả', 'Học sinh, Sinh viên', 'Thanh thiếu niên, Người trẻ', 'Phụ huynh, Người chăm sóc', 'Chuyên gia, Cộng đồng'];
const levels = ['Tất cả', 'Cơ bản', 'Trung cấp', 'Nâng cao'];

const CourseList = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    target: 'Tất cả',
    level: 'Tất cả',
    search: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredCourses = courses.filter((course) => {
    const matchesTarget = filters.target === 'Tất cả' || course.target.includes(filters.target);
    const matchesLevel = filters.level === 'Tất cả' || course.level === filters.level;
    const matchesSearch = course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         course.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesTarget && matchesLevel && matchesSearch;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <SchoolIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Khóa học phòng chống ma túy
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
          Nâng cao kiến thức và kỹ năng của bạn về phòng chống ma túy với các khóa học đa dạng, phù hợp với mọi đối tượng.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Khám phá thư viện khóa học của chúng tôi để tìm hiểu sâu hơn về các vấn đề liên quan đến ma túy và cách xây dựng một lối sống lành mạnh.
        </Typography>
      </Box>

      {/* Filters */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ mb: 6, p: 3, bgcolor: '#e3f2fd', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}
      >
        <FormControl sx={{ minWidth: 200 }} variant="outlined">
          <InputLabel>Đối tượng học</InputLabel>
          <Select
            name="target"
            value={filters.target}
            label="Đối tượng học"
            onChange={handleFilterChange}
          >
            {targetGroups.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }} variant="outlined">
          <InputLabel>Trình độ</InputLabel>
          <Select
            name="level"
            value={filters.level}
            label="Trình độ"
            onChange={handleFilterChange}
          >
            {levels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          name="search"
          label="Tìm kiếm khóa học..."
          value={filters.search}
          onChange={handleFilterChange}
          variant="outlined"
          sx={{ minWidth: 250 }}
        />
      </Stack>

      {/* Course List */}
      <Grid container spacing={4}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Grid item xs={12} md={6} lg={4} key={course.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                  '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
                  transition: 'all 0.3s ease-in-out',
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                    <Chip label={course.level} color="primary" size="small" sx={{ fontWeight: 'bold' }} />
                    <Chip label={course.target} color="secondary" size="small" sx={{ fontWeight: 'bold' }} />
                  </Stack>
                  <Typography variant="h5" component="h2" gutterBottom fontWeight={600} sx={{ minHeight: 60 }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 70, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {course.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <AccessTimeIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      Thời lượng: {course.duration}
                    </Typography>
                  </Stack>
                </CardContent>
                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => navigate(`/courses/${course.id}`)}
                    sx={{
                      backgroundColor: '#2196f3',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                      },
                      py: 1,
                      fontSize: '1rem',
                    }}
                  >
                    Xem nội dung
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="h5" color="text.secondary">
                Không tìm thấy khóa học nào phù hợp với tiêu chí tìm kiếm của bạn.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 3 }}
                onClick={() => setFilters({ target: 'Tất cả', level: 'Tất cả', search: '' })}
              >
                Đặt lại bộ lọc
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default CourseList; 