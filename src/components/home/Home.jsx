import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid, Stack, Chip } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import QuizIcon from '@mui/icons-material/Quiz';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';

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

const features = [
  {
    title: 'Khóa học phòng chống ma túy',
    description: 'Các khóa học trực tuyến về phòng chống ma túy và các chất gây nghiện.',
    image: '/images/courses.jpg',
    path: '/courses',
  },
  {
    title: 'Đánh giá nguy cơ',
    description: 'Công cụ đánh giá nguy cơ sử dụng ma túy và các chất gây nghiện.',
    image: '/images/assessment.jpg',
    path: '/assessment',
  },
  {
    title: 'Tư vấn trực tiếp',
    description: 'Dịch vụ tư vấn trực tiếp với các chuyên gia về phòng chống ma túy.',
    image: '/images/counseling.jpg',
    path: '/counseling',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>


      {/* Banner Hero */}
      <Box sx={{
        bgcolor: '#f5f7fa',
        borderRadius: 4,
        p: { xs: 3, md: 6 },
        mb: 6,
        textAlign: 'center',
        boxShadow: 2,
      }}>
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom color="primary">
          Hệ thống phòng chống ma túy
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          Chung tay xây dựng cộng đồng lành mạnh
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Nơi cung cấp kiến thức, kỹ năng và hỗ trợ toàn diện trong công tác phòng chống ma túy cho mọi người.
        </Typography>
      </Box>

      {/* Featured Actions */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, textAlign: 'center', minHeight: 220 }}>
            <LocalLibraryIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Khóa học miễn phí
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Học kiến thức về phòng chống ma túy, kỹ năng sống, kỹ năng từ chối, hoàn toàn miễn phí.
              </Typography>
              <Button component={RouterLink} to="/courses" variant="contained" size="small">
                Xem khóa học
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, textAlign: 'center', minHeight: 220 }}>
            <QuizIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Đánh giá nguy cơ
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Làm bài trắc nghiệm ASSIST, CRAFFT để nhận tư vấn phù hợp với bạn.
              </Typography>
              <Button component={RouterLink} to="/assessment" variant="contained" size="small">
                Đánh giá ngay
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, textAlign: 'center', minHeight: 220 }}>
            <VolunteerActivismIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Đặt lịch tư vấn
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Kết nối với chuyên gia, tư vấn viên để được hỗ trợ, giải đáp thắc mắc.
              </Typography>
              <Button component={RouterLink} to="/appointments" variant="contained" size="small">
                Đặt lịch ngay
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, textAlign: 'center', minHeight: 220 }}>
            <GroupsIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Chương trình cộng đồng
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Tham gia các hoạt động, sự kiện, chương trình giáo dục phòng chống ma túy.
              </Typography>
              <Button component={RouterLink} to="/programs" variant="contained" size="small">
                Xem chương trình
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Featured Posts / Articles */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Bài viết nổi bật
        </Typography>
        <Grid container spacing={3}>
          {featuredPosts.map((post, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ p: 2, minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  {post.icon}
                  <Chip label="Nổi bật" color="secondary" size="small" />
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
      </Box>

      <Typography variant="h4" component="h1" gutterBottom>
        Chào mừng đến với Hệ thống phòng chống ma túy
      </Typography>
      <Typography variant="body1" paragraph>
        Hệ thống cung cấp các công cụ và dịch vụ hỗ trợ phòng chống ma túy, bao gồm:
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={feature.image}
                alt={feature.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {feature.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(feature.path)}
                >
                  Tìm hiểu thêm
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home; 