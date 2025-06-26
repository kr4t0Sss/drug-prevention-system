import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Stack,
  Chip,
  Container,
} from '@mui/material';
import {
  Link as RouterLink,
  useNavigate
} from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import QuizIcon from '@mui/icons-material/Quiz';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';
import SpaIcon from '@mui/icons-material/Spa'; // For counseling
import AddReactionIcon from '@mui/icons-material/AddReaction'; // For programs

const featuredPosts = [
  {
    title: 'Ma túy tồn tại bao lâu trong cơ thể?',
    description: 'Tìm hiểu về thời gian phát hiện và thời gian các loại ma túy khác nhau có thể được tìm thấy trong cơ thể bạn.',
    to: '/posts/1',
    icon: <ArticleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Sử dụng đa chất',
    description: 'Hiểu rõ rủi ro khi sử dụng nhiều loại ma túy cùng lúc và cách giữ an toàn.',
    to: '/posts/2',
    icon: <ArticleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Rượu',
    description: 'Tác động, rủi ro và các mẹo phòng ngừa việc sử dụng rượu.',
    to: '/posts/3',
    icon: <ArticleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Thuốc tân dược',
    description: 'Sử dụng thuốc kê đơn an toàn và cách tránh lạm dụng.',
    to: '/posts/4',
    icon: <ArticleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/placeholder.txt)', // Placeholder for a meaningful image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={700}
            gutterBottom
            sx={{ mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
          >
            Phòng chống ma túy
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            Nơi hỗ trợ và đồng hành cùng bạn trên con đường xây dựng cuộc sống không ma túy.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#4caf50', // Green for positive action
              '&:hover': {
                backgroundColor: '#388e3c',
              },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
            }}
            onClick={() => navigate('/assessment')}
          >
            Bắt đầu đánh giá ngay
          </Button>
        </Container>
      </Box>

      {/* Featured Actions / Services */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" component="h2" align="center" fontWeight={700} sx={{ mb: 6 }}>
          Dịch vụ của chúng tôi
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card sx={{
              p: 3,
              textAlign: 'center',
              minHeight: 250,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 3,
              '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
              transition: 'all 0.3s ease-in-out',
            }}>
              <LocalLibraryIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Khóa học giáo dục
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Tiếp cận các khóa học chuyên sâu về tác hại ma túy và kỹ năng sống.
                </Typography>
                <Button component={RouterLink} to="/courses" variant="contained" color="primary" size="small">
                  Xem khóa học
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              p: 3,
              textAlign: 'center',
              minHeight: 250,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 3,
              '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
              transition: 'all 0.3s ease-in-out',
            }}>
              <QuizIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Đánh giá nguy cơ
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Thực hiện các bài đánh giá để hiểu rõ hơn về tình trạng của bạn.
                </Typography>
                <Button component={RouterLink} to="/assessment" variant="contained" color="primary" size="small">
                  Đánh giá ngay
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              p: 3,
              textAlign: 'center',
              minHeight: 250,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 3,
              '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
              transition: 'all 0.3s ease-in-out',
            }}>
              <SpaIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Tư vấn chuyên sâu
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Kết nối với các chuyên gia tư vấn để nhận được sự hỗ trợ cá nhân.
                </Typography>
                <Button component={RouterLink} to="/counseling" variant="contained" color="primary" size="small">
                  Đặt lịch tư vấn
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{
              p: 3,
              textAlign: 'center',
              minHeight: 250,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 3,
              '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
              transition: 'all 0.3s ease-in-out',
            }}>
              <AddReactionIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Chương trình cộng đồng
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Tham gia các hoạt động và chương trình hỗ trợ cộng đồng.
                </Typography>
                <Button component={RouterLink} to="/programs" variant="contained" color="primary" size="small">
                  Tìm hiểu chương trình
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Posts / Articles */}
      <Container maxWidth="lg" sx={{ py: 6, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h4" component="h2" align="center" fontWeight={700} sx={{ mb: 6 }}>
          Bài viết nổi bật
        </Typography>
        <Grid container spacing={3}>
          {featuredPosts.map((post, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ p: 2, minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  {post.icon}
                  <Chip label="Kiến thức" color="info" size="small" />
                </Stack>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.description}
                  </Typography>
                  <Button component={RouterLink} to={post.to} variant="outlined" size="small">
                    Xem chi tiết
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 