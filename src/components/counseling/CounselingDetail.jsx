import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Chip,
  CircularProgress,
  Alert,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';

const CounselingDetail = () => {
  const { id } = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchSession = async () => {
      try {
        // Simulated API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            id,
            counselor: {
              name: 'Dr. Sarah Johnson',
              specialization: 'Substance Abuse Counseling',
              experience: '10 years',
            },
            date: new Date(),
            time: '14:00',
            duration: '60 minutes',
            location: 'Room 302, Counseling Center',
            status: 'Scheduled',
            type: 'Individual Session',
            notes: [
              'Initial assessment completed',
              'Client expressed concerns about peer pressure',
              'Discussed coping strategies',
            ],
            goals: [
              'Develop healthy coping mechanisms',
              'Address peer pressure situations',
              'Create a support network',
            ],
          }), 1000)
        );
        setSession(response);
        setLoading(false);
      } catch (err) {
        setError('Failed to load session details');
        setLoading(false);
      }
    };

    fetchSession();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!session) {
    return (
      <Box p={3}>
        <Alert severity="info">Session not found</Alert>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Counseling Session Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <PersonIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Counselor
                </Typography>
                <Typography variant="body1">
                  {session.counselor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {session.counselor.specialization}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <CalendarIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Date
                </Typography>
                <Typography variant="body1">
                  {format(new Date(session.date), 'PPP')}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <TimeIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Time & Duration
                </Typography>
                <Typography variant="body1">
                  {session.time} ({session.duration})
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  Location
                </Typography>
                <Typography variant="body1">
                  {session.location}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Chip 
              label={session.status}
              color={
                session.status === 'Completed' ? 'success' :
                session.status === 'Cancelled' ? 'error' : 'primary'
              }
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Session Type
            </Typography>
            <Typography variant="body1" paragraph>
              {session.type}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Session Notes
            </Typography>
            <List>
              {session.notes.map((note, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={note} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Treatment Goals
            </Typography>
            <List>
              {session.goals.map((goal, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={goal} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" gap={2} mt={2}>
              <Button variant="contained" color="primary">
                Reschedule
              </Button>
              <Button variant="outlined" color="error">
                Cancel Session
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CounselingDetail; 