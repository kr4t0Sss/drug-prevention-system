import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Stack, 
  Link, 
  IconButton, 
  Divider,
  Grid,
  Button
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Shield as ShieldIcon,
  AccessTime as AccessTimeIcon,
  Security as SecurityIcon,
  HealthAndSafety as HealthAndSafetyIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)',
        color: 'white',
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  mr: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <ShieldIcon sx={{ fontSize: 28, color: 'white' }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Hệ thống Phòng chống Ma túy
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Bảo vệ cộng đồng - Xây dựng tương lai
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, mb: 3 }}>
              Chúng tôi cam kết xây dựng một cộng đồng khỏe mạnh, an toàn và không ma túy thông qua giáo dục, 
              tư vấn và hỗ trợ chuyên nghiệp.
            </Typography>
            
            {/* Emergency Hotline */}
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 3,
                p: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', display: 'block', mb: 1 }}>
                ĐƯỜNG DÂY NÓNG 24/7
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#ffeb3b' }}>
                1900 1234
              </Typography>
            </Box>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#bbdefb' }}>
              Dịch vụ
            </Typography>
            <Stack spacing={1.5}>
              {[
                { text: 'Đánh giá rủi ro', icon: <SecurityIcon sx={{ fontSize: 16 }} /> },
                { text: 'Tư vấn chuyên nghiệp', icon: <HealthAndSafetyIcon sx={{ fontSize: 16 }} /> },
                { text: 'Khóa học giáo dục', icon: <ShieldIcon sx={{ fontSize: 16 }} /> },
                { text: 'Chương trình cộng đồng', icon: <AccessTimeIcon sx={{ fontSize: 16 }} /> },
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                      color: '#bbdefb',
                      transform: 'translateX(4px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.icon}
                  <Typography variant="body2">{item.text}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#bbdefb' }}>
              Liên kết nhanh
            </Typography>
            <Stack spacing={1.5}>
              {[
                'Về chúng tôi',
                'Tin tức & Sự kiện',
                'Tài liệu tham khảo',
                'Liên hệ hỗ trợ',
              ].map((text, index) => (
                <Link
                  key={index}
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                      color: '#bbdefb',
                      transform: 'translateX(4px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Typography variant="body2">{text}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#bbdefb' }}>
              Thông tin liên hệ
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 20, color: '#90caf9', mt: 0.5 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
                    123 Đường Nguyễn Huệ, Quận 1<br />
                    Thành phố Hồ Chí Minh, Việt Nam
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 20, color: '#90caf9' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  (028) 3822 1234
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: 20, color: '#90caf9' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  info@phongchongmatuy.gov.vn
        </Typography>
              </Box>
            </Stack>

            {/* Social Media */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2, color: '#bbdefb' }}>
                Theo dõi chúng tôi
        </Typography>
              <Stack direction="row" spacing={1}>
                {[
                  { icon: <FacebookIcon />, color: '#1877f2' },
                  { icon: <TwitterIcon />, color: '#1da1f2' },
                  { icon: <LinkedInIcon />, color: '#0077b5' },
                  { icon: <InstagramIcon />, color: '#e4405f' },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: social.color,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            © {new Date().getFullYear()} Hệ thống Phòng chống Ma túy. Mọi quyền được bảo lưu.
        </Typography>
          
          <Stack direction="row" spacing={3}>
            {['Chính sách bảo mật', 'Điều khoản sử dụng', 'Sitemap'].map((text, index) => (
              <Link
                key={index}
                href="#"
                color="inherit"
                underline="none"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: '#bbdefb',
                  },
                  transition: 'color 0.2s ease',
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 