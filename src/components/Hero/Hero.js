import { Box, Container, Typography, Button, Stack, Grid, Avatar, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      py: { xs: 8, md: 10 },
      backgroundImage: `url(/images/hero-bg.svg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(18, 18, 18, 0.7)'
          : 'rgba(255, 255, 255, 0.3)',
        zIndex: 1,
      }
    }} className="fade-in">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column-reverse', lg: 'row' }}
        >
          <Grid item xs={12} lg={7}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.mode === 'light' ? '#fff' : 'text.primary'
                }}
              >
                Hi, I'm Jared Tolentino
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', minHeight: '80px' }}>
                <ReactTyped
                  strings={[
                    'Full Stack Developer',
                    'Frontend Developer',
                    'Backend Developer'
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  mb: 4,
                  maxWidth: { lg: '550px' },
                  mx: { xs: 'auto', lg: 0 },
                  color: theme.palette.mode === 'light' ? '#fff' : 'text.secondary'
                }}
              >
                BSIT graduate specializing in web development. Passionate about innovation and continuously honing skills to adapt to the evolving digital landscape.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', lg: 'flex-start' }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/projects"
                  size="large"
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="/resume/Jared_Tolentino_Resume.pdf"
                  download="Jared_Tolentino_Resume.pdf"
                >
                  Download Resume
                </Button>
              </Stack>
            </Box>
          </Grid>
          {/* Image */}
          <Grid item xs={12} lg={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              className="hero-avatar-animation"
              src="/images/profile.webp"
              alt="Jared Tolentino"
              sx={{
                width: { xs: 250, sm: 300, md: 350 },
                height: { xs: 250, sm: 300, md: 350 },
                border: '5px solid',
                borderColor: 'primary.main',
                boxShadow: 6,
                mb: { xs: 4, lg: 0 }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
