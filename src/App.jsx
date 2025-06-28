import React from 'react';
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
import AssessmentList from './components/assessment/AssessmentList';
import AssistAssessment from './components/assessment/AssistAssessment';
import CrafftAssessment from './components/assessment/CrafftAssessment';
import CounselingList from './components/counseling/CounselingList';
import CounselingDetail from './components/counseling/CounselingDetail';
import Appointments from './components/Appointments';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import CourseManagement from './components/admin/CourseManagement';
import AssessmentManagement from './components/admin/AssessmentManagement';

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
              <Route element={<Layout />}>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes */}
                <Route path="/profile" element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                } />
                <Route path="/appointments" element={
                  <PrivateRoute>
                    <Appointments />
                  </PrivateRoute>
                } />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/surveys" element={<SurveyList />} />
                <Route path="/surveys/:id" element={<SurveyDetail />} />
                <Route path="/counseling" element={
                  <PrivateRoute>
                    <CounselingList />
                  </PrivateRoute>
                } />
                <Route path="/counseling/:id" element={
                  <PrivateRoute>
                    <CounselingDetail />
                  </PrivateRoute>
                } />
                <Route path="/counseling/schedule" element={
                  <PrivateRoute>
                    <CounselingSchedule />
                  </PrivateRoute>
                } />
                <Route path="/assessment" element={
                  <PrivateRoute>
                    <AssessmentList />
                  </PrivateRoute>
                } />
                <Route path="/assessment/assist" element={
                  <PrivateRoute>
                    <AssistAssessment />
                  </PrivateRoute>
                } />
                <Route path="/assessment/crafft" element={
                  <PrivateRoute>
                    <CrafftAssessment />
                  </PrivateRoute>
                } />
                <Route path="/programs" element={<ProgramList />} />
                <Route path="/programs/:id" element={<ProgramDetail />} />
                <Route path="/counselors" element={<CounselorList />} />
                <Route path="/counselors/:id" element={<CounselorDetail />} />
              </Route>
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                } />
                <Route path="users" element={
                  <PrivateRoute>
                    <UserManagement />
                  </PrivateRoute>
                } />
                <Route path="courses" element={
                  <PrivateRoute>
                    <CourseManagement />
                  </PrivateRoute>
                } />
                <Route path="assessments" element={
                  <PrivateRoute>
                    <AssessmentManagement />
                  </PrivateRoute>
                } />
              </Route>
            </Routes>
          </Router>
        </CounselingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 