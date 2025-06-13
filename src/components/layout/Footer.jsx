import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © 2024 Hệ thống phòng chống ma túy. Mọi quyền được bảo lưu.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Tổng đài tư vấn: 1900 1234
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 