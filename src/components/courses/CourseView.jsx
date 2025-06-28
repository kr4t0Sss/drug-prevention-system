import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  CircularProgress,
  Alert,
  IconButton,
  Tooltip,
  Chip,
  Stack,
} from '@mui/material';
import {
  useParams,
  useNavigate
} from 'react-router-dom';
import {
  PlayCircleFilledWhite as PlayCircleFilledWhiteIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  School as SchoolIcon,
  Home as HomeIcon,
  MenuBook as MenuBookIcon,
  DoneAll as DoneAllIcon,
  ListAlt as ListAltIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const mockCourses = [
  {
    id: '1',
    title: 'Kiến thức cơ bản về ma túy',
    description: 'Cung cấp kiến thức nền tảng về các loại ma túy, tác hại và cách phòng chống.',
    modules: [
      {
        id: '1.1',
        title: 'Giới thiệu tổng quan về ma túy',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Ma túy là gì?</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy là các chất gây nghiện, khi đưa vào cơ thể sẽ làm thay đổi chức năng sinh lý của cơ thể, gây ra trạng thái hưng phấn, ảo giác, hoặc suy nhược. Việc sử dụng ma túy kéo dài có thể dẫn đến nghiện, ảnh hưởng nghiêm trọng đến sức khỏe thể chất, tinh thần và cuộc sống cá nhân, gia đình, xã hội.</Typography>
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Lịch sử và sự phát triển của ma túy</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy đã tồn tại từ lâu trong lịch sử nhân loại, được sử dụng với nhiều mục đích khác nhau, từ y học đến nghi lễ. Tuy nhiên, cùng với sự phát triển của khoa học, các loại ma túy tổng hợp ngày càng đa dạng và có độc tính cao hơn, gây ra những thách thức lớn trong công tác phòng chống.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_1.jpg" alt="Giới thiệu ma túy" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: true,
      },
      {
        id: '1.2',
        title: 'Các loại ma túy phổ biến',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Heroin</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Heroin là một chất gây nghiện mạnh, có nguồn gốc từ cây thuốc phiện. Nó tác động trực tiếp đến hệ thần kinh trung ương, gây cảm giác hưng phấn tức thì nhưng sau đó là sự suy nhược và phụ thuộc nặng nề.</Typography>
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Methamphetamine (Ma túy đá)</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy đá là một chất kích thích mạnh, gây hưng phấn kéo dài, ảo giác, hoang tưởng. Việc sử dụng ma túy đá gây tổn thương nghiêm trọng đến não bộ và hệ tim mạch.</Typography>
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Cần sa</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Cần sa là một loại ma túy tự nhiên, có thể gây ra cảm giác thư giãn, thay đổi nhận thức. Tuy nhiên, việc sử dụng cần sa thường xuyên có thể dẫn đến các vấn đề về hô hấp và tâm lý.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_2.jpg" alt="Các loại ma túy" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
      {
        id: '1.3',
        title: 'Tác hại của ma túy đối với sức khỏe',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy gây ra hàng loạt các vấn đề sức khỏe nghiêm trọng, từ tổn thương não bộ, gan, thận, đến các bệnh lây nhiễm như HIV/AIDS, viêm gan B, C do dùng chung kim tiêm. Ngoài ra, nó còn ảnh hưởng đến hệ miễn dịch, khiến cơ thể dễ mắc bệnh hơn.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Nghiện ma túy còn dẫn đến các vấn đề xã hội như mất việc làm, tan vỡ gia đình, và hành vi phạm pháp để có tiền mua ma túy.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_3.jpg" alt="Tác hại ma túy" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
      {
        id: '1.4',
        title: 'Hệ lụy của ma túy đối với xã hội',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy không chỉ hủy hoại cá nhân mà còn gây ra những hệ lụy nặng nề cho xã hội. Nó làm tăng tỷ lệ tội phạm, gây mất trật tự an toàn xã hội, và là gánh nặng lớn cho hệ thống y tế và pháp luật.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Để bảo vệ cộng đồng, cần có sự chung tay của toàn xã hội trong công tác phòng chống ma túy, từ giáo dục, tuyên truyền đến các biện pháp can thiệp và hỗ trợ người nghiện tái hòa nhập cộng đồng.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_4.jpg" alt="Hệ lụy xã hội" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
    ],
  },
  {
    id: '2',
    title: 'Kỹ năng từ chối và đối phó',
    description: 'Học cách từ chối ma túy, đối phó với áp lực bạn bè và xây dựng lối sống lành mạnh.',
    modules: [
      {
        id: '2.1',
        title: 'Hiểu về áp lực bạn bè và môi trường xung quanh',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Áp lực bạn bè là một trong những yếu tố lớn dẫn đến việc sử dụng ma túy ở giới trẻ. Khóa học này giúp bạn nhận diện các loại áp lực và cách chúng tác động đến quyết định của bạn.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Việc nhận biết sớm các dấu hiệu và nguyên nhân của áp lực sẽ giúp bạn chủ động hơn trong việc đưa ra lựa chọn đúng đắn.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module2_1.jpg" alt="Áp lực bạn bè" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: true,
      },
      {
        id: '2.2',
        title: 'Các chiến lược từ chối hiệu quả',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Học các câu nói, hành động cụ thể để từ chối lời mời sử dụng ma túy một cách lịch sự nhưng kiên quyết. Bao gồm cả kỹ năng giao tiếp phi ngôn ngữ và cách giữ vững lập trường của mình.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Thực hành các kịch bản khác nhau để tự tin đối mặt với các tình huống thực tế.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module2_2.jpg" alt="Kỹ năng từ chối" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
      {
        id: '2.3',
        title: 'Xây dựng lối sống lành mạnh và tích cực',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Bên cạnh việc từ chối, việc xây dựng một lối sống lành mạnh với các hoạt động thể chất, sở thích cá nhân, và các mối quan hệ tích cực sẽ giúp bạn tránh xa ma túy và phát triển toàn diện.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Khóa học khuyến khích bạn tìm kiếm những niềm vui, mục tiêu mới trong cuộc sống để thay thế những thói quen tiêu cực.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module2_3.jpg" alt="Lối sống lành mạnh" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
    ],
  },
];

const CourseView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const foundCourse = mockCourses.find((c) => c.id === id);
        if (foundCourse) {
          setCourse(foundCourse);
          // Set the current module to the first incomplete module, or the last one if all are complete
          const firstIncompleteModule = foundCourse.modules.find(m => !m.completed);
          if (firstIncompleteModule) {
            setCurrentModuleId(firstIncompleteModule.id);
          } else if (foundCourse.modules.length > 0) {
            setCurrentModuleId(foundCourse.modules[foundCourse.modules.length - 1].id); // last module if all complete
          }
        } else {
          setError('Không tìm thấy khóa học.');
        }
      } catch (err) {
        setError('Đã xảy ra lỗi khi tải khóa học.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const currentModule = course ? course.modules.find(m => m.id === currentModuleId) : null;
  const currentModuleIndex = course ? course.modules.findIndex(m => m.id === currentModuleId) : -1;
  const isLastModule = course && currentModuleIndex === course.modules.length - 1;
  const isFirstModule = currentModuleIndex === 0;

  const handleNextModule = () => {
    if (course && currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleId(course.modules[currentModuleIndex + 1].id);
    }
  };

  const handlePreviousModule = () => {
    if (course && currentModuleIndex > 0) {
      setCurrentModuleId(course.modules[currentModuleIndex - 1].id);
    }
  };

  const handleMarkAsComplete = () => {
    if (course && currentModule) {
      // In a real application, you would send this update to a backend.
      // For now, we simulate by updating the mockCourses data in state.
      setCourse(prevCourse => {
        const updatedModules = prevCourse.modules.map(mod =>
          mod.id === currentModule.id ? { ...mod, completed: true } : mod
        );
        return { ...prevCourse, modules: updatedModules };
      });
      // Optionally move to the next module after marking as complete
      if (!isLastModule) {
        handleNextModule();
      } else {
        alert('Bạn đã hoàn thành tất cả các module của khóa học!');
      }
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress size={60} sx={{ color: 'primary.main' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ boxShadow: 3, borderRadius: 2 }}>{error}</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ListAltIcon />}
            onClick={() => navigate('/courses')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khóa học
          </Button>
        </Box>
      </Container>
    );
  }

  if (!course) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2 }}>Không tìm thấy khóa học này. Vui lòng kiểm tra lại đường dẫn hoặc ID khóa học.</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ListAltIcon />}
            onClick={() => navigate('/courses')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khóa học
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <SchoolIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          {course.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mx: 'auto' }}>
          {course.description}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Sidebar for modules */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 2, height: '100%', bgcolor: 'background.paper' }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <MenuBookIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>Nội dung khóa học</Typography>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <List component="nav">
              {course.modules.map((moduleItem) => (
                <ListItem
                  key={moduleItem.id}
                  button
                  selected={currentModuleId === moduleItem.id}
                  onClick={() => setCurrentModuleId(moduleItem.id)}
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    bgcolor: moduleItem.completed ? '#e8f5e9' : 'inherit',
                    '&:hover': {
                      bgcolor: moduleItem.completed ? '#dcedc8' : '#f0f0f0',
                    },
                    opacity: moduleItem.completed ? 0.7 : 1,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    {moduleItem.completed ? (
                      <CheckCircleOutlineIcon color="success" />
                    ) : (
                      <PlayCircleFilledWhiteIcon color="action" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2" fontWeight={500} sx={{ color: moduleItem.completed ? 'success.dark' : 'text.primary' }}>
                        {moduleItem.title}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Main content area */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, minHeight: '60vh', bgcolor: 'background.paper' }}>
            {currentModule ? (
              <>
                <Typography variant="h4" gutterBottom fontWeight={700} color="primary.dark" sx={{ mb: 3 }}>
                  {currentModule.title}
        </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ lineHeight: 1.8 }}>
                  {currentModule.content}
                </Box>
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 4, pt: 2, borderTop: '1px solid #eee' }}>
                  <Button
                    variant="outlined"
                    startIcon={<ChevronLeftIcon />}
                    onClick={handlePreviousModule}
                    disabled={isFirstModule}
                    sx={{ px: 3, py: 1.2 }}
                  >
                    Bài học trước
                  </Button>
                  {!currentModule.completed && (
                    <Button
                      variant="contained"
                      startIcon={<CheckCircleIcon />}
                      onClick={handleMarkAsComplete}
                      sx={{
                        backgroundColor: '#4caf50',
                        '&:hover': {
                          backgroundColor: '#388e3c',
                        },
                        px: 3,
                        py: 1.2,
                      }}
                    >
                      Đánh dấu đã hoàn thành
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightIcon />}
                    onClick={handleNextModule}
                    disabled={isLastModule}
                    sx={{
                      backgroundColor: '#2196f3',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                      },
                      px: 3,
                      py: 1.2,
                    }}
                  >
                    Bài học tiếp theo
        </Button>
                </Stack>
              </>
            ) : (
              <Box sx={{ textAlign: 'center', py: 5 }}>
                <Typography variant="h5" color="text.secondary">Vui lòng chọn một module để bắt đầu.</Typography>
              </Box>
            )}
      </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseView; 