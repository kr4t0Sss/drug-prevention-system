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
  Paper,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Link as RouterLink,
  useNavigate
} from 'react-router-dom';
import {
  LocalLibrary as LocalLibraryIcon,
  Quiz as QuizIcon,
  Psychology as PsychologyIcon,
  Groups as GroupsIcon,
  Article as ArticleIcon,
  Shield as ShieldIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingUpIcon,
  Phone as PhoneIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const featuredPosts = [
  {
    title: 'Ma túy tồn tại bao lâu trong cơ thể?',
    description: 'Tìm hiểu về thời gian phát hiện và thời gian các loại ma túy khác nhau có thể được tìm thấy trong cơ thể bạn.',
    to: '/posts/1',
    icon: <SecurityIcon />,
    category: 'Kiến thức khoa học',
    readTime: '5 phút đọc',
  },
  {
    title: 'Sử dụng đa chất và rủi ro',
    description: 'Hiểu rõ rủi ro khi sử dụng nhiều loại ma túy cùng lúc và cách giữ an toàn cho bản thân.',
    to: '/posts/2',
    icon: <HealthAndSafetyIcon />,
    category: 'An toàn sức khỏe',
    readTime: '7 phút đọc',
  },
  {
    title: 'Tác động của rượu bia',
    description: 'Tác động, rủi ro và các mẹo phòng ngừa việc sử dụng rượu bia một cách có trách nhiệm.',
    to: '/posts/3',
    icon: <ShieldIcon />,
    category: 'Phòng ngừa',
    readTime: '6 phút đọc',
  },
  {
    title: 'Sử dụng thuốc an toàn',
    description: 'Hướng dẫn sử dụng thuốc kê đơn an toàn và cách tránh lạm dụng thuốc.',
    to: '/posts/4',
    icon: <LocalLibraryIcon />,
    category: 'Hướng dẫn',
    readTime: '4 phút đọc',
  },
];

const statisticsData = [
  { number: '10,000+', label: 'Người được hỗ trợ', icon: <GroupsIcon /> },
  { number: '95%', label: 'Tỷ lệ thành công', icon: <TrendingUpIcon /> },
  { number: '24/7', label: 'Hỗ trợ liên tục', icon: <PhoneIcon /> },
  { number: '50+', label: 'Chuyên gia tư vấn', icon: <PsychologyIcon /> },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.9) 0%, rgba(66, 165, 245, 0.9) 100%), url(/images/home-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          py: { xs: 10, md: 16 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                mr: 3,
              }}
            >
              <ShieldIcon sx={{ fontSize: 48, color: 'white' }} />
            </Avatar>
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant="h2"
                component="h1"
                fontWeight={800}
                sx={{ 
                  mb: 1, 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hệ thống Phòng chống Ma túy
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Bảo vệ cộng đồng - Xây dựng tương lai
              </Typography>
            </Box>
          </Box>
          
          <Typography
            variant="h5"
            component="p"
            sx={{ 
              mb: 6, 
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            Nơi cung cấp hỗ trợ chuyên nghiệp và đồng hành cùng bạn trên con đường 
            xây dựng cuộc sống khỏe mạnh, an toàn và không ma túy.
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #388e3c 0%, #1b5e20 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 8px 25px rgba(76, 175, 80, 0.4)',
                },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                boxShadow: '0px 4px 15px rgba(76, 175, 80, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onClick={() => navigate('/assessment')}
            >
              Bắt đầu đánh giá ngay
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.7)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'white',
                  transform: 'translateY(-2px)',
                },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                transition: 'all 0.3s ease',
              }}
              onClick={() => navigate('/counseling')}
            >
              Tư vấn miễn phí
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {statisticsData.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: 4,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'primary.main',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {React.cloneElement(stat.icon, { sx: { fontSize: 30, color: 'white' } })}
                </Avatar>
                <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
                  {stat.number}
                </Typography>
                <Typography variant="body1" color="text.secondary" fontWeight={500}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Services */}
      <Box sx={{ bgcolor: '#fafafa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" fontWeight={700} color="primary.dark" gutterBottom>
              Dịch vụ chuyên nghiệp
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Chúng tôi cung cấp các dịch vụ toàn diện để hỗ trợ bạn trong hành trình phòng chống ma túy
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              {
                icon: <LocalLibraryIcon />,
                title: 'Khóa học giáo dục',
                description: 'Các khóa học chuyên sâu về tác hại ma túy, kỹ năng sống và phòng ngừa hiệu quả.',
                link: '/courses',
                color: '#1976d2',
                features: ['Nội dung khoa học', 'Tương tác đa phương tiện', 'Chứng chỉ hoàn thành'],
              },
              {
                icon: <QuizIcon />,
                title: 'Đánh giá nguy cơ',
                description: 'Công cụ đánh giá chuyên nghiệp giúp xác định mức độ rủi ro và đưa ra lời khuyên phù hợp.',
                link: '/assessment',
                color: '#388e3c',
                features: ['Đánh giá ASSIST', 'Đánh giá CRAFFT', 'Kết quả chi tiết'],
              },
              {
                icon: <PsychologyIcon />,
                title: 'Tư vấn chuyên nghiệp',
                description: 'Kết nối với đội ngũ chuyên gia tâm lý và bác sĩ để nhận được sự hỗ trợ cá nhân hóa.',
                link: '/counseling',
                color: '#7b1fa2',
                features: ['Tư vấn 1-1', 'Hỗ trợ 24/7', 'Bảo mật tuyệt đối'],
              },
              {
                icon: <GroupsIcon />,
                title: 'Chương trình cộng đồng',
                description: 'Tham gia các hoạt động và chương trình hỗ trợ cộng đồng để cùng nhau xây dựng môi trường an toàn.',
                link: '/programs',
                color: '#f57c00',
                features: ['Hoạt động nhóm', 'Sự kiện định kỳ', 'Mạng lưới hỗ trợ'],
              },
            ].map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    borderRadius: 4,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.1)',
                      '& .service-icon': {
                        transform: 'scale(1.1)',
                        backgroundColor: service.color,
                      },
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Avatar
                      className="service-icon"
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: `${service.color}20`,
                        color: service.color,
                        mr: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {React.cloneElement(service.icon, { sx: { fontSize: 32 } })}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" fontWeight={700} gutterBottom color="text.primary">
                        {service.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Stack spacing={1} sx={{ mb: 3 }}>
                    {service.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ fontSize: 16, color: service.color, mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                  
                  <Button
                    component={RouterLink}
                    to={service.link}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 'auto',
                      backgroundColor: service.color,
                      '&:hover': {
                        backgroundColor: service.color,
                        filter: 'brightness(0.9)',
                      },
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    Khám phá ngay
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Articles */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" fontWeight={700} color="primary.dark" gutterBottom>
            Kiến thức hữu ích
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Cập nhật những thông tin mới nhất về phòng chống ma túy và chăm sóc sức khỏe
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {featuredPosts.map((post, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: 'primary.main',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(post.icon, { sx: { fontSize: 28, color: 'white' } })}
                  </Avatar>
                  <Chip 
                    label={post.category} 
                    size="small" 
                    sx={{ 
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                    }} 
                  />
                </Box>
                
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom sx={{ lineHeight: 1.3 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, flexGrow: 1 }}>
                    {post.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>
                  <Button 
                    component={RouterLink} 
                    to={post.to} 
                    variant="outlined" 
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 'auto',
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  >
                    Đọc thêm
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Emergency Contact Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <PhoneIcon sx={{ fontSize: 64, mb: 2, opacity: 0.9 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Cần hỗ trợ khẩn cấp?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7
          </Typography>
          <Typography variant="h3" fontWeight={800} sx={{ color: '#ffeb3b', mb: 3 }}>
            1900 1234
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Cuộc gọi hoàn toàn miễn phí và bảo mật
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;