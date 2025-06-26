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
} from '@mui/material';
import {
  AccountCircle,
  Assessment as AssessmentIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Spa as SpaIcon,
  AddReaction as ProgramIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { text: 'Trang chủ', icon: <HomeIcon />, path: '/' },
  { text: 'Khóa học', icon: <SchoolIcon />, path: '/courses' },
  { text: 'Đánh giá', icon: <AssessmentIcon />, path: '/assessment' },
  { text: 'Tư vấn', icon: <SpaIcon />, path: '/counseling' },
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
    <AppBar position="static" sx={{ backgroundColor: '#42a5f5' }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 0,
            mr: 4,
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          Phòng chống ma túy
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              startIcon={item.icon}
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              {item.text}
            </Button>
          ))}
        </Stack>

        {user ? (
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>Hồ sơ</MenuItem>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button
            color="inherit"
            onClick={() => navigate('/login')}
            sx={{
              textTransform: 'none',
              fontSize: '1rem',
              border: '1px solid rgba(255,255,255,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Đăng nhập
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 