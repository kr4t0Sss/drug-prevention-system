import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Register from './components/auth/Register';
import CounselingSchedule from './components/counseling/CounselingSchedule';
import CounselorDetail from './components/counselors/CounselorDetail';
import CounselorList from './components/counselors/CounselorList';
import CourseDetail from './components/courses/CourseDetail';
import CourseList from './components/courses/CourseList';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Profile from './components/profile/Profile';
import ProgramDetail from './components/programs/ProgramDetail';
import ProgramList from './components/programs/ProgramList';
import SurveyDetail from './components/surveys/SurveyDetail';
import SurveyList from './components/surveys/SurveyList';
import { AuthProvider } from './contexts/AuthContext';
import { CounselingProvider } from './contexts/CounselingContext';
import theme from './theme';

// Configure future flags for React Router v7
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CounselingProvider>
          <Router {...router}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                } />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/surveys" element={<SurveyList />} />
                <Route path="/surveys/:id" element={<SurveyDetail />} />
                <Route path="/counseling/schedule" element={
                  <PrivateRoute>
                    <CounselingSchedule />
                  </PrivateRoute>
                } />
                <Route path="/programs" element={<ProgramList />} />
                <Route path="/programs/:id" element={<ProgramDetail />} />
                <Route path="/counselors" element={<CounselorList />} />
                <Route path="/counselors/:id" element={<CounselorDetail />} />
              </Route>
            </Routes>
          </Router>
        </CounselingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 