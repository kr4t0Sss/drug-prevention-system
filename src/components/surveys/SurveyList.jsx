import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const SurveyList = () => {
  // Mock data - replace with actual data fetching
  const surveys = [
    { id: 1, title: 'Khảo sát nhận thức về ma túy' },
    { id: 2, title: 'Khảo sát mức độ hiểu biết' },
    { id: 3, title: 'Khảo sát đánh giá hiệu quả' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Khảo sát
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
                secondary={`Mã số: ${survey.id}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default SurveyList; 