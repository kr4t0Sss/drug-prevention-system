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
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const courses = [
  {
    id: 1,
    title: 'Kiến thức cơ bản về ma túy',
    description: 'Cung cấp kiến thức nền tảng về các loại ma túy, tác hại và cách phòng chống. Bao gồm 4 module với video bài học.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format',
    level: 'Cơ bản',
    target: 'Học sinh, Sinh viên',
    duration: '4 module',
    hasVideo: true,
  },
  {
    id: 2,
    title: 'Kỹ năng từ chối và đối phó',
    description: 'Học cách từ chối ma túy, đối phó với áp lực bạn bè và xây dựng lối sống lành mạnh. Có thực hành tình huống thực tế.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&auto=format',
    level: 'Trung cấp',
    target: 'Thanh thiếu niên, Người trẻ',
    duration: '4 module',
    hasVideo: true,
  },
  {
    id: 3,
    title: 'Hỗ trợ người nghiện và gia đình',
    description: 'Cung cấp kiến thức và kỹ năng hỗ trợ người nghiện ma túy và gia đình họ trong quá trình cai nghiện và tái hòa nhập.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop&auto=format',
    level: 'Nâng cao',
    target: 'Phụ huynh, Người chăm sóc',
    duration: '3 module',
    hasVideo: true,
  },
  {
    id: 4,
    title: 'Phòng chống ma túy trong cộng đồng',
    description: 'Xây dựng cộng đồng mạnh mẽ để phòng chống ma túy hiệu quả thông qua giáo dục, tuyên truyền và hỗ trợ.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&auto=format',
    level: 'Nâng cao',
    target: 'Chuyên gia, Cộng đồng',
    duration: '2 module',
    hasVideo: true,
  },
  {
    id: 5,
    title: 'Tâm lý học và nghiện chất',
    description: 'Hiểu sâu về cơ chế tâm lý của nghiện chất, các yếu tố nguy cơ và phương pháp can thiệp tâm lý hiệu quả.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&auto=format',
    level: 'Trung cấp',
    target: 'Chuyên gia, Cộng đồng',
    duration: '3.5 giờ',
    hasVideo: false,
  },
  {
    id: 6,
    title: 'Xây dựng cộng đồng an toàn',
    description: 'Các chiến lược xây dựng môi trường cộng đồng an toàn, không có ma túy thông qua sự tham gia của người dân.',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=250&fit=crop&auto=format',
    level: 'Cơ bản',
    target: 'Cộng đồng',
    duration: '2.5 giờ',
    hasVideo: false,
  },
];

const targetGroups = ['Tất cả', 'Học sinh, Sinh viên', 'Thanh thiếu niên, Người trẻ', 'Phụ huynh, Người chăm sóc', 'Chuyên gia, Cộng đồng', 'Cộng đồng'];
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
        sx={{ mb: 6, p: 3, borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}
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
      <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Grid item xs={12} md={6} lg={4} key={course.id} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': { 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)', 
                    transform: 'translateY(-8px)' 
                  },
                  transition: 'all 0.3s ease-in-out',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column' }}>
                  {/* Top Section */}
                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                      <Chip 
                        label={course.level} 
                        color="primary" 
                        size="small" 
                        sx={{ fontWeight: 'bold', fontSize: '0.75rem' }} 
                      />
                      <Chip 
                        label={course.target} 
                        color="secondary" 
                        size="small" 
                        sx={{ fontWeight: 'bold', fontSize: '0.75rem' }} 
                      />
                      {course.hasVideo && (
                        <Chip 
                          icon={<OndemandVideoIcon sx={{ fontSize: '16px !important' }} />}
                          label="Video" 
                          color="success" 
                          size="small" 
                          sx={{ fontWeight: 'bold', fontSize: '0.75rem' }} 
                        />
                      )}
                </Stack>
                    
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      fontWeight={700} 
                      sx={{ 
                        minHeight: 70, 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        lineHeight: 1.3,
                        color: 'primary.dark',
                        mb: 2
                      }}
                    >
                  {course.title}
                </Typography>
                  </Box>
                  
                  {/* Middle Section */}
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        minHeight: 75, 
                        overflow: 'hidden', 
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.5,
                        mb: 3
                      }}
                    >
                  {course.description}
                </Typography>
                    
                    {/* Bottom Section */}
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        Thời lượng: {course.duration}
                </Typography>
                    </Stack>
                  </Box>
                </CardContent>
                <Box sx={{ p: 4, pt: 0 }}>
                <Button
                  variant="contained"
                    size="large"
                    fullWidth
                  onClick={() => navigate(`/courses/view/${course.id}`)}
                    sx={{
                      background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1976d2 30%, #1cb5e0 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
                      },
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      transition: 'all 0.3s ease-in-out',
                      textTransform: 'none',
                      boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
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