import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Stack,
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccountCircle,
  Assessment as AssessmentIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Psychology as PsychologyIcon,
  AddReaction as ProgramIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Shield as ShieldIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { text: 'Trang chủ', icon: <HomeIcon />, path: '/' },
  { text: 'Khóa học', icon: <SchoolIcon />, path: '/courses' },
  { text: 'Đánh giá', icon: <AssessmentIcon />, path: '/assessment' },
  { text: 'Tư vấn', icon: <PsychologyIcon />, path: '/counseling' },
  { text: 'Chương trình', icon: <ProgramIcon />, path: '/programs' },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    navigate('/profile');
  };

  const handleLogout = () => {
    handleClose();
    logout();
    navigate('/login');
  };

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.02)',
            },
            transition: 'transform 0.2s ease',
          }} 
          onClick={() => navigate('/')}
        > 
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
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                color: 'white',
                fontSize: '1.25rem',
                lineHeight: 1.2,
              }}
            >
              Hệ thống Phòng chống Ma túy
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              Bảo vệ cộng đồng - Xây dựng tương lai
            </Typography>
          </Box>
        </Box>
        
        <Stack direction="row" spacing={0.5} sx={{ flexGrow: 1, ml: 6 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== '/' && location.pathname.startsWith(item.path));
            
            return (
              <Button
                key={item.text}
                color="inherit"
                startIcon={item.icon}
                onClick={() => navigate(item.path)}
                sx={{
                  color: 'white',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                  backdropFilter: isActive ? 'blur(10px)' : 'none',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
                  borderRadius: 2,
                  px: 2.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transform: 'translateY(-1px)',
                  },
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.2s ease',
                  '& .MuiButton-startIcon': {
                    mr: 1,
                  },
                }}
              >
                {item.text}
              </Button>
            );
          })}
        </Stack>

        {user ? (
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: 'primary.main',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 3,
                  boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  minWidth: 200,
                },
              }}
            >
              <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="subtitle2" fontWeight={600} color="text.primary">
                  {user?.displayName || 'Người dùng'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {user?.email}
                </Typography>
              </Box>
              <MenuItem 
                onClick={handleProfile}
                sx={{
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(21, 101, 192, 0.08)',
                  },
                }}
              >
                <ListItemIcon>
                  <PersonIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2" fontWeight={500}>
                    Hồ sơ cá nhân
                  </Typography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem 
                onClick={handleLogout}
                sx={{
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(229, 57, 53, 0.08)',
                  },
                }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" color="error" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2" fontWeight={500} color="error">
                    Đăng xuất
                  </Typography>
                </ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              onClick={() => navigate('/register')}
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Đăng ký
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/login')}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: 'primary.main',
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 2,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'translateY(-1px)',
                  boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Đăng nhập
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 