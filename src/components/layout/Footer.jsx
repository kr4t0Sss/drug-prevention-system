import React from 'react';
import { Box, Typography, Container, Stack, Link, IconButton } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: '#2196f3', // A slightly darker blue than the header
        color: 'white',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 8 }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Phòng chống ma túy
            </Typography>
            <Typography variant="body2">
              Cùng nhau xây dựng một cộng đồng khỏe mạnh, không ma túy.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Liên hệ
            </Typography>
            <Typography variant="body2">Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM</Typography>
            <Typography variant="body2">Tổng đài tư vấn: 1900 1234</Typography>
            <Typography variant="body2">Email: info@phongchongmatuy.org.vn</Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Điều hướng
            </Typography>
            <Stack direction="column" spacing={0.5}>
              <Link href="#" color="inherit" underline="hover" variant="body2">Chính sách bảo mật</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Điều khoản sử dụng</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Câu hỏi thường gặp (FAQ)</Link>
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Theo dõi chúng tôi
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" href="#"><FacebookIcon /></IconButton>
              <IconButton color="inherit" href="#"><TwitterIcon /></IconButton>
              <IconButton color="inherit" href="#"><LinkedInIcon /></IconButton>
              <IconButton color="inherit" href="#"><InstagramIcon /></IconButton>
            </Stack>
          </Box>
        </Stack>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Phòng chống ma túy. Mọi quyền được bảo lưu.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 