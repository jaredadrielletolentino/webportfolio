import { Box, Container, Typography, Grid, TextField, Button, Paper, Link as MuiLink, useTheme, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Email, Forum } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // form validation errors
  const [errors, setErrors] = useState({});

  // loading indicator 
  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Function to validate the form
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "This field is required.";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid.";
    tempErrors.message = formData.message ? "" : "This field is required.";
    
    setErrors(tempErrors);
    
    // Return true if the form is valid
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setLoading(true);

      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;

      emailjs.send(serviceID, templateID, formData, userID).then(
        (result) => {
          setNotification({ open: true, message: 'Message sent successfully!', severity: 'success' });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        },
        (error) => {
          setNotification({ open: true, message: 'Failed to send message. Please try again.', severity: 'error' });
        }
      ).finally(() => {
        setLoading(false);
      });
    }
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      id="contact"
      ref={ref}
      className={`fade-in-section ${inView ? 'visible' : ''}`}
      sx={{ py: 8 }}
    >
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
              sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    name="name" 
                    label="Name" 
                    variant="outlined" 
                    fullWidth 
                    required 
                    value={formData.name} 
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    name="email" 
                    label="Email" 
                    type="email" 
                    variant="outlined" 
                    fullWidth 
                    required 
                    value={formData.email} 
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
              </Grid>
              <TextField name="subject" label="Subject" variant="outlined" fullWidth value={formData.subject} onChange={handleChange} />

              <TextField 
                name="message" 
                label="Message" 
                variant="outlined" 
                multiline 
                rows={5} 
                fullWidth 
                required 
                value={formData.message} 
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />

              <Button 
                type="submit" 
                variant="contained" 
                size="large" 
                disabled={loading}
                sx={{ alignSelf: 'flex-start', mt: 1, position: 'relative' }}
              >
                {loading ? 'Sending...' : 'Send Message'}
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: 'primary.main',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%', boxShadow: 6 }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
