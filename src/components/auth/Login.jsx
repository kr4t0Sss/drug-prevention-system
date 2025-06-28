import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  Divider,
  Alert,
  InputAdornment,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';
import GoogleIcon from '@mui/icons-material/Google';
import {
  LockOpen as LockOpenIcon,
  Email as EmailIcon,
  Lock as LockIcon,
} from '@mui/icons-material';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState(''); // State for email validation error
  const [passwordError, setPasswordError] = useState(''); // State for password validation error

  const validateEmail = (email) => {
    if (!email) return 'Email không được để trống.';
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) return 'Email không hợp lệ.';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Mật khẩu không được để trống.';
    if (password.length < 6) return 'Mật khẩu phải có ít nhất 6 ký tự.';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific errors when user types
    if (name === 'email') setEmailError('');
    if (name === 'password') setPasswordError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const emailValidationMsg = validateEmail(formData.email);
    const passwordValidationMsg = validatePassword(formData.password);

    setEmailError(emailValidationMsg);
    setPasswordError(passwordValidationMsg);

    if (emailValidationMsg || passwordValidationMsg) {
      return; // Stop if there are validation errors
    }

    try {
      // This is a placeholder for actual login logic
      // In a real application, you would use firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
      console.log('Attempting login with:', formData.email, formData.password);
      login({ email: formData.email });
      navigate('/');
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Handle user info after successful login
      console.log('Đăng nhập Google thành công:', result.user);
      navigate('/');
    } catch (error) {
      console.error('Lỗi đăng nhập Google:', error);
      setError('Đăng nhập bằng Google thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(/images/auth-background.jpg)', // Placeholder for a background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 4,
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: '100%',
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
            backdropFilter: 'blur(5px)', // Blur effect for background content
          }}
        >
          <Typography component="h1" variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Chào mừng trở lại
          </Typography>
          <Typography variant="body2" align="center" sx={{ mb: 3, color: 'text.secondary' }}>
            Đăng nhập để tiếp tục hành trình của bạn
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              error={!!emailError} // Apply error state
              helperText={emailError} // Display error message
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              error={!!passwordError} // Apply error state
              helperText={passwordError} // Display error message
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#2196f3', // Blue for primary action
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
                py: 1.2,
                fontSize: '1.1rem',
              }}
            >
              Đăng nhập
            </Button>
            <Divider sx={{ my: 2 }}>hoặc</Divider>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              sx={{
                mb: 2,
                borderColor: '#42a5f5',
                color: '#42a5f5',
                '&:hover': {
                  backgroundColor: 'rgba(66, 165, 245, 0.04)',
                  borderColor: '#1976d2',
                },
                py: 1.2,
                fontSize: '1rem',
              }}
            >
              Đăng nhập bằng Google
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link href="/register" variant="body1" sx={{ color: '#1976d2', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Chưa có tài khoản? Đăng ký ngay
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login; 