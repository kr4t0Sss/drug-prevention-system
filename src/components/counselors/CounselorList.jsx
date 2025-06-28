import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Box,
  Stack,
  Chip,
  Rating,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {
  Spa as SpaIcon,
  Psychology as PsychologyIcon,
  Star as StarIcon,
  CalendarToday as CalendarTodayIcon,
  Work as WorkIcon,
  ConnectWithoutContact as ConnectWithoutContactIcon,
  Person as PersonIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from '@mui/icons-material';

const counselors = [
  {
    id: 1,
    name: 'Tiến sĩ Nguyễn Thị Lan',
    specialization: 'Tư vấn lạm dụng chất gây nghiện',
    experience: 10,
    rating: 4.8,
    avatar: '/images/counselors/counselor1.jpg',
    description: 'Tiến sĩ Lan có hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn và hỗ trợ phục hồi cho người lạm dụng chất gây nghiện. Cô ấy áp dụng các phương pháp trị liệu nhận thức hành vi (CBT) và liệu pháp động lực (MI) để giúp bệnh nhân vượt qua khó khăn.',
  },
  {
    id: 2,
    name: 'Thạc sĩ Trần Văn Hùng',
    specialization: 'Tư vấn gia đình và hôn nhân',
    experience: 7,
    rating: 4.5,
    avatar: '/images/counselors/counselor2.jpg',
    description: 'Thạc sĩ Hùng chuyên về tư vấn gia đình, giúp các thành viên xây dựng lại mối quan hệ, cải thiện giao tiếp và cùng nhau vượt qua những thách thức liên quan đến vấn đề nghiện của người thân.',
  },
  {
    id: 3,
    name: 'Chuyên gia Lê Thị Mai',
    specialization: 'Liệu pháp nhóm và hỗ trợ tái hòa nhập cộng đồng',
    experience: 5,
    rating: 4.7,
    avatar: '/images/counselors/counselor3.jpg',
    description: 'Chuyên gia Mai tập trung vào liệu pháp nhóm, tạo môi trường an toàn để các cá nhân chia sẻ kinh nghiệm và hỗ trợ lẫn nhau. Cô cũng đồng hành cùng người đã cai nghiện trong quá trình tái hòa nhập xã hội.',
  },
  {
    id: 4,
    name: 'Bác sĩ Phan Trọng Nghĩa',
    specialization: 'Điều trị rối loạn tâm thần liên quan đến ma túy',
    experience: 12,
    rating: 4.9,
    avatar: '/images/counselors/counselor4.jpg',
    description: 'Bác sĩ Nghĩa là chuyên gia hàng đầu trong điều trị các rối loạn tâm thần đồng diễn ra với lạm dụng chất. Anh ấy cung cấp các phác đồ điều trị tích hợp, bao gồm cả y tế và tâm lý, để đạt hiệu quả tối ưu.',
  },
];

const CounselorList = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <PsychologyIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          Đội ngũ tư vấn viên của chúng tôi
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Các chuyên gia tâm lý và y tế hàng đầu, sẵn sàng lắng nghe và hỗ trợ bạn trên hành trình phục hồi và phòng chống ma túy.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {counselors.map((counselor) => (
          <Grid item xs={12} sm={6} md={4} key={counselor.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 6,
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 12,
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3, pb: 1 }}>
                <Avatar
                  alt={counselor.name}
                  src={counselor.avatar}
                  sx={{ width: 120, height: 120, border: '3px solid', borderColor: 'primary.main' }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={700} color="primary.dark">
                  {counselor.name}
                </Typography>
                <Chip
                  icon={<PsychologyIcon />}
                  label={counselor.specialization}
                  color="primary"
                  size="small"
                  sx={{ mb: 1, fontWeight: 'bold' }}
                />
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  <Rating name="read-only" value={counselor.rating} precision={0.1} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                  <Typography variant="body2" color="text.secondary">
                    ({counselor.rating})
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <WorkIcon color="action" sx={{ fontSize: 18 }} />
                  <Typography variant="body2" color="text.secondary">
                    Kinh nghiệm: <Typography component="span" fontWeight="bold">{counselor.experience} năm</Typography>
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, px: 1 }}>
                  {counselor.description.length > 120 ? `${counselor.description.substring(0, 120)}...` : counselor.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 3, pt: 0 }}>
                <Button
                  component={Link}
                  to={`/counselors/${counselor.id}`}
                  variant="contained"
                  size="medium"
                  startIcon={<ArrowForwardIosIcon />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    bgcolor: '#2196f3',
                    '&:hover': {
                      bgcolor: '#1976d2',
                    },
                    mr: 1,
                  }}
                >
                  Xem hồ sơ
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  startIcon={<CalendarTodayIcon />}
                  onClick={() => navigate('/counseling/schedule')}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    bgcolor: '#4caf50',
                    '&:hover': {
                      bgcolor: '#388e3c',
                    },
                  }}
                >
                  Đặt lịch tư vấn
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CounselorList; 