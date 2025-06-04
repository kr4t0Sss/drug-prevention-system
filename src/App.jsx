import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import { CounselingProvider } from './contexts/CounselingContext';
import theme from './theme';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';
import CourseList from './components/courses/CourseList';
import CourseDetail from './components/courses/CourseDetail';
import SurveyList from './components/surveys/SurveyList';
import SurveyDetail from './components/surveys/SurveyDetail';
import CounselingSchedule from './components/counseling/CounselingSchedule';
import ProgramList from './components/programs/ProgramList';
import ProgramDetail from './components/programs/ProgramDetail';
import CounselorList from './components/counselors/CounselorList';
import CounselorDetail from './components/counselors/CounselorDetail';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CounselingProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/surveys" element={<SurveyList />} />
                <Route path="/surveys/:id" element={<SurveyDetail />} />
                <Route
                  path="/counseling/schedule"
                  element={
                    <PrivateRoute>
                      <CounselingSchedule />
                    </PrivateRoute>
                  }
                />
                <Route path="/programs" element={<ProgramList />} />
                <Route path="/programs/:id" element={<ProgramDetail />} />
                <Route path="/counselors" element={<CounselorList />} />
                <Route path="/counselors/:id" element={<CounselorDetail />} />
              </Routes>
            </Layout>
          </Router>
        </CounselingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 