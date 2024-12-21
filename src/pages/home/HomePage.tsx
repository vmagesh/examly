import React from 'react';
import { Container, Grid, Typography, Box, Button, Card, CardContent, CardMedia } from '@mui/material';
import { AccessAlarm, School, Assignment } from '@mui/icons-material';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: '#1976d2',
          color: '#fff',
          padding: 3,
          borderRadius: 2,
          textAlign: 'center',
          marginBottom: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the Examly!
        </Typography>
        <Typography variant="h6">
          Prepare for your exams with personalized practice sessions. Start today!
        </Typography>
        <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#f50057', color: '#fff', '&:hover': { backgroundColor: '#c51162' } }}>
          Explore Offers
        </Button>
      </Box>

      {/* Exam Categories or Features Section */}
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 3 }}>
        Available Exam Categories
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQwMjV8MHx8c2VhcmNofDJ8fGJvb2t8ZW58MHx8fHwxNjg2NTQwMTY3&ixlib=rb-1.2.1&q=80&w=1080"
              title="Subject 1"
            />
            <CardContent>
              <Typography variant="h6">Mathematics</Typography>
              <Button size="small" color="primary" startIcon={<School />}>
                Start Exam
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQwMjV8MHx8c2VhcmNofDF8fHNjaWVuY2V8ZW58MHx8fHwxNjg2NTQwMjMw&ixlib=rb-1.2.1&q=80&w=1080"
              title="Subject 2"
            />
            <CardContent>
              <Typography variant="h6">Science</Typography>
              <Button size="small" color="primary" startIcon={<Assignment />}>
                Start Exam
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQwMjV8MHx8c2VhcmNofDJ8fGJvb2t8ZW58MHx8fHwxNjg2NTQwMTY3&ixlib=rb-1.2.1&q=80&w=1080"
              title="English Literature"
            />
            <CardContent>
              <Typography variant="h6">English Literature</Typography>
              <Button size="small" color="primary" startIcon={<AccessAlarm />}>
                Start Exam
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Upcoming Exams Section */}
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Upcoming Exams
        </Typography>
        <Typography variant="h6" paragraph>
          Stay updated with upcoming exam dates and notifications. Don't miss any important deadlines!
        </Typography>
        <Button variant="contained" color="primary" size="large">
          View All Exams
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
