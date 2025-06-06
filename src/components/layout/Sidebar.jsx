import {
    Assessment as AssessmentIcon,
    Home as HomeIcon,
    People as PeopleIcon,
    School as SchoolIcon,
} from '@mui/icons-material';
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'Trang chủ', icon: <HomeIcon />, path: '/' },
  { text: 'Khóa học', icon: <SchoolIcon />, path: '/courses' },
  { text: 'Đánh giá', icon: <AssessmentIcon />, path: '/assessment' },
  { text: 'Tư vấn', icon: <PeopleIcon />, path: '/counseling' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{ cursor: 'pointer' }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar; 