import { Box, Container, Typography, Grid, TextField, Button, Paper, Link as MuiLink, useTheme, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Email, Forum } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for Snackbar notification
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    // EmailJS logic with success/error handling 
    emailjs.send(serviceID, templateID, formData, userID).then(
      (result) => {
        // On success, show success message
        setNotification({ open: true, message: 'Message sent successfully!', severity: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        // On failure, show error message
        setNotification({ open: true, message: 'Failed to send message. Please try again.', severity: 'error' });
      }
    );
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  return (
    <Box id="contact" sx={{ py: 8 }} className="fade-in">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          Contact <span style={{ color: theme.palette.primary.main }}>Me</span>
        </Typography>
        
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 5, md: 0 } }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                Have a Project in Mind?
              </Typography>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 3, color: 'text.secondary' }}>
                <Forum sx={{ mr: 1 }} />
                Let's Build Something Together
              </Typography>
              
              <Typography variant="overline" display="block" color="text.secondary">
                Direct Contact
              </Typography>
              <MuiLink 
                href="mailto:jaredadrielletolentino@gmail.com" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  fontSize: '1.1rem', 
                  fontWeight: 500,
                  color: 'primary.main',
                  textDecoration: 'none'
                }}
              >
                <Email sx={{ mr: 1 }} />
                jaredadrielletolentino@gmail.com
              </MuiLink>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField name="name" label="Name" variant="outlined" fullWidth required value={formData.name} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="email" label="Email" type="email" variant="outlined" fullWidth required value={formData.email} onChange={handleChange} />
                </Grid>
              </Grid>
              <TextField name="subject" label="Subject" variant="outlined" fullWidth value={formData.subject} onChange={handleChange} />
              <TextField name="message" label="Message" variant="outlined" multiline rows={5} fullWidth required value={formData.message} onChange={handleChange} />
              <Button type="submit" variant="contained" size="large" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                Send Message
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
