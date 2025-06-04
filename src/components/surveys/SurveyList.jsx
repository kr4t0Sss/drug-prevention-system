import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const SurveyList = () => {
  // Mock data - replace with actual data fetching
  const surveys = [
    { id: 1, title: 'Initial Assessment Survey' },
    { id: 2, title: 'Progress Evaluation Survey' },
    { id: 3, title: 'Final Assessment Survey' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Surveys
      </Typography>
      <Paper elevation={3}>
        <List>
          {surveys.map((survey) => (
            <ListItem
              key={survey.id}
              component={Link}
              to={`/surveys/${survey.id}`}
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemText
                primary={survey.title}
                secondary={`Survey ID: ${survey.id}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default SurveyList; 