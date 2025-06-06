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
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Kiến thức cơ bản về ma túy',
    description: 'Tìm hiểu về các loại ma túy và tác hại của chúng.',
    image: '/images/course1.jpg',
    level: 'Cơ bản',
    target: 'Học sinh THPT',
    duration: '2 giờ',
  },
  {
    id: 2,
    title: 'Kỹ năng từ chối ma túy',
    description: 'Học cách từ chối ma túy và xử lý các tình huống nguy hiểm.',
    image: '/images/course2.jpg',
    level: 'Trung cấp',
    target: 'Học sinh THCS',
    duration: '3 giờ',
  },
  {
    id: 3,
    title: 'Hỗ trợ con em phòng chống ma túy',
    description: 'Dành cho phụ huynh: Cách nhận biết và hỗ trợ con em phòng chống ma túy.',
    image: '/images/course3.jpg',
    level: 'Nâng cao',
    target: 'Phụ huynh',
    duration: '4 giờ',
  },
  {
    id: 4,
    title: 'Phương pháp giảng dạy phòng chống ma túy',
    description: 'Dành cho giáo viên: Phương pháp giảng dạy hiệu quả về phòng chống ma túy.',
    image: '/images/course4.jpg',
    level: 'Nâng cao',
    target: 'Giáo viên',
    duration: '5 giờ',
  },
];

const targetGroups = ['Tất cả', 'Học sinh THPT', 'Học sinh THCS', 'Phụ huynh', 'Giáo viên'];
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
    const matchesTarget = filters.target === 'Tất cả' || course.target === filters.target;
    const matchesLevel = filters.level === 'Tất cả' || course.level === filters.level;
    const matchesSearch = course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         course.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesTarget && matchesLevel && matchesSearch;
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Khóa học phòng chống ma túy
      </Typography>

      {/* Filters */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Đối tượng</InputLabel>
          <Select
            name="target"
            value={filters.target}
            label="Đối tượng"
            onChange={handleFilterChange}
          >
            {targetGroups.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Cấp độ</InputLabel>
          <Select
            name="level"
            value={filters.level}
            label="Cấp độ"
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
          label="Tìm kiếm"
          value={filters.search}
          onChange={handleFilterChange}
          sx={{ minWidth: 200 }}
        />
      </Stack>

      {/* Course List */}
      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip label={course.target} color="primary" size="small" />
                  <Chip label={course.level} color="secondary" size="small" />
                </Stack>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {course.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Thời lượng: {course.duration}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseList; 