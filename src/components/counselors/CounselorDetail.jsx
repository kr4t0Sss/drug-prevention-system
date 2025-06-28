import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Button,
  Avatar,
  Stack,
  Chip,
  Rating,
  CircularProgress,
  Alert,
  Divider,
} from '@mui/material';
import {
  Psychology as PsychologyIcon,
  Star as StarIcon,
  Work as WorkIcon,
  CalendarToday as CalendarTodayIcon,
  Call as CallIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  ChevronLeft as ChevronLeftIcon,
  CalendarMonth as CalendarMonthIcon,
  EventAvailable as EventAvailableIcon,
} from '@mui/icons-material';

const mockCounselors = [
  {
    id: '1',
    name: 'Tiến sĩ Nguyễn Thị Lan',
    specialization: 'Tư vấn lạm dụng chất gây nghiện',
    experience: 10,
    rating: 4.8,
    avatar: '/images/counselors/counselor1.jpg',
    bio: 'Tiến sĩ Nguyễn Thị Lan là một nhà tâm lý học lâm sàng với hơn một thập kỷ kinh nghiệm trong lĩnh vực tư vấn và điều trị lạm dụng chất gây nghiện. Cô ấy tốt nghiệp với bằng tiến sĩ tâm lý học từ Đại học Y Hà Nội và đã dành phần lớn sự nghiệp của mình để giúp đỡ các cá nhân và gia đình bị ảnh hưởng bởi nghiện. Tiến sĩ Lan nổi tiếng với phương pháp tiếp cận nhân văn và khả năng tạo ra một môi trường an toàn, không phán xét, nơi bệnh nhân có thể thoải mái chia sẻ và tìm kiếm sự giúp đỡ. Cô ấy chuyên về liệu pháp nhận thức hành vi (CBT), liệu pháp động lực (MI), và trị liệu gia đình, tập trung vào việc phát triển các kỹ năng đối phó lành mạnh và xây dựng một lối sống không ma túy bền vững. Ngoài ra, cô còn tích cực tham gia các hoạt động cộng đồng nhằm nâng cao nhận thức về phòng chống ma túy.',
    contact: {
      phone: '0912345678',
      email: 'lan.nguyen@example.com',
    },
    availableSlots: [
      { date: '2024-06-10', time: '09:00', isBooked: false },
      { date: '2024-06-10', time: '14:00', isBooked: false },
      { date: '2024-06-11', time: '10:00', isBooked: false },
    ],
  },
  {
    id: '2',
    name: 'Thạc sĩ Trần Văn Hùng',
    specialization: 'Tư vấn gia đình và hôn nhân',
    experience: 7,
    rating: 4.5,
    avatar: '/images/counselors/counselor2.jpg',
    bio: 'Thạc sĩ Trần Văn Hùng là một nhà trị liệu gia đình có bằng thạc sĩ tâm lý học từ Đại học Khoa học Xã hội và Nhân văn. Anh ấy có 7 năm kinh nghiệm làm việc với các gia đình gặp phải xung đột, khó khăn trong giao tiếp, và đặc biệt là những gia đình có thành viên đang vật lộn với vấn đề lạm dụng chất. Thạc sĩ Hùng sử dụng cách tiếp cận hệ thống, giúp các thành viên gia đình hiểu rõ hơn về vai trò của mình trong hệ thống và cách hỗ trợ lẫn nhau. Anh ấy cam kết giúp các gia đình hàn gắn vết thương, xây dựng lại niềm tin và tạo dựng một môi trường gia đình vững mạnh, hỗ trợ cho quá trình phục hồi.',
    contact: {
      phone: '0901234567',
      email: 'hung.tran@example.com',
    },
    availableSlots: [
      { date: '2024-06-12', time: '11:00', isBooked: false },
      { date: '2024-06-12', time: '16:00', isBooked: false },
    ],
  },
  {
    id: '3',
    name: 'Chuyên gia Lê Thị Mai',
    specialization: 'Liệu pháp nhóm và hỗ trợ tái hòa nhập cộng đồng',
    experience: 5,
    rating: 4.7,
    avatar: '/images/counselors/counselor3.jpg',
    bio: 'Chuyên gia Lê Thị Mai là một nhà tâm lý xã hội năng động, chuyên sâu về liệu pháp nhóm và các chương trình hỗ trợ tái hòa nhập cộng đồng. Cô có bằng cử nhân tâm lý học và đã hoàn thành nhiều khóa đào tạo chuyên sâu về trị liệu nhóm. Với 5 năm kinh nghiệm, cô Mai đã giúp đỡ nhiều cá nhân vượt qua giai đoạn hậu cai nghiện, xây dựng lại cuộc sống, tìm kiếm việc làm và tái kết nối với xã hội. Cô ấy tạo ra một không gian nhóm an toàn và hỗ trợ, nơi các thành viên có thể chia sẻ kinh nghiệm, học hỏi lẫn nhau và phát triển các kỹ năng xã hội cần thiết để sống một cuộc sống ý nghĩa và không ma túy.',
    contact: {
      phone: '0987654321',
      email: 'mai.le@example.com',
    },
    availableSlots: [
      { date: '2024-06-13', time: '09:00', isBooked: false },
      { date: '2024-06-14', time: '10:00', isBooked: false },
    ],
  },
];

const CounselorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [counselor, setCounselor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounselor = async () => {
      try {
        // Simulate API call
        const foundCounselor = mockCounselors.find((c) => c.id === id);
        if (foundCounselor) {
          setCounselor(foundCounselor);
        } else {
          setError('Không tìm thấy tư vấn viên.');
        }
      } catch (err) {
        setError('Đã xảy ra lỗi khi tải thông tin tư vấn viên.');
      } finally {
        setLoading(false);
      }
    };
    fetchCounselor();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress size={60} sx={{ color: 'primary.main' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ boxShadow: 3, borderRadius: 2 }}>{error}</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ChevronLeftIcon />}
            onClick={() => navigate('/counselors')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách tư vấn viên
          </Button>
        </Box>
      </Container>
    );
  }

  if (!counselor) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2 }}>Không tìm thấy tư vấn viên này. Vui lòng kiểm tra lại đường dẫn hoặc ID tư vấn viên.</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ChevronLeftIcon />}
            onClick={() => navigate('/counselors')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách tư vấn viên
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <PersonIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Hồ sơ tư vấn viên
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Xem thông tin chi tiết về tư vấn viên của chúng tôi và đặt lịch hẹn.
        </Typography>
      </Box>

      <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              alt={counselor.name}
              src={counselor.avatar}
              sx={{ width: 180, height: 180, mb: 3, border: '4px solid', borderColor: 'primary.main' }}
            />
            <Typography variant="h5" component="h2" gutterBottom fontWeight={700} color="primary.dark">
              {counselor.name}
            </Typography>
            <Chip
              icon={<PsychologyIcon />}
              label={counselor.specialization}
              color="primary"
              sx={{ mb: 1.5, fontSize: '0.9rem', fontWeight: 'bold', py: '5px' }}
            />
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <Rating name="read-only" value={counselor.rating} precision={0.1} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
              <Typography variant="body1" color="text.secondary">
                ({counselor.rating})
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <WorkIcon color="action" sx={{ fontSize: 18 }} />
              <Typography variant="body2" color="text.secondary">
                Kinh nghiệm: <Typography component="span" fontWeight="bold">{counselor.experience} năm</Typography>
              </Typography>
            </Stack>
            <Box sx={{ mt: 2, textAlign: 'left', width: '100%' }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>Liên hệ:</Typography>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <CallIcon color="action" fontSize="small" />
                <Typography variant="body2" color="text.secondary">{counselor.contact.phone}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <EmailIcon color="action" fontSize="small" />
                <Typography variant="body2" color="text.secondary">{counselor.contact.email}</Typography>
              </Stack>
            </Box>
            <Button
              variant="contained"
              startIcon={<EventAvailableIcon />}
              onClick={() => navigate(`/counseling/schedule/${counselor.id}`)}
              sx={{
                mt: 3,
                backgroundColor: '#4caf50',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
                px: 4,
                py: 1.2,
                fontSize: '1rem',
              }}
            >
              Đặt lịch tư vấn
            </Button>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Thông tin tiểu sử
            </Typography>
            <Typography variant="body1" paragraph color="text.primary" sx={{ mb: 3, lineHeight: 1.8 }}>
              {counselor.bio}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarMonthIcon /> Lịch hẹn khả dụng
            </Typography>
            {counselor.availableSlots.length > 0 ? (
              <Stack spacing={1} sx={{ mt: 2 }}>
                {counselor.availableSlots.map((slot, index) => (
                  <Chip
                    key={index}
                    label={`${slot.time} - ${slot.date}`}
                    color="info"
                    variant="outlined"
                    sx={{ fontSize: '0.9rem', fontWeight: 'bold', py: '5px' }}
                  />
                ))}
              </Stack>
            ) : (
              <Alert severity="info" sx={{ mt: 2 }}>
                Hiện tại không có lịch hẹn khả dụng. Vui lòng liên hệ trực tiếp hoặc kiểm tra lại sau.
              </Alert>
            )}
            <Button
              variant="contained"
              startIcon={<EventAvailableIcon />}
              onClick={() => navigate(`/counseling/schedule/${counselor.id}`)}
              sx={{
                mt: 3,
                backgroundColor: '#2196f3',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
                px: 4,
                py: 1.2,
                fontSize: '1rem',
              }}
            >
              Đặt lịch tư vấn
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CounselorDetail; 