import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
          Get to Know Me
        </Typography>
        <Typography variant="h6" align="center" paragraph sx={{ fontWeight: 400 }}>
          I’m Jared Tolentino, a Full Stack Web Developer student at Zuitt with hands-on experience developing dynamic, responsive applications using the MERN stack. I bring professional experience as an IT Specialist, providing system support, troubleshooting technical issues, and implementing effective IT solutions. Committed to problem-solving and continuous learning, I strive to leverage my technical expertise to deliver impactful and efficient digital solutions.
        </Typography>
        <Typography variant="h6" align="center" sx={{ fontWeight: 400 }}>
          Connect with me on{' '}
          <MuiLink href="https://www.linkedin.com/in/jared-tolentino-0557a1216/" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 600 }}>
            LinkedIn
          </MuiLink>{' '}
          or explore my projects on{' '}
          <MuiLink href="https://github.com/jaredadrielletolentino" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 600 }}>
            GitHub 
          </MuiLink>
          &nbsp;—&nbsp; I look forward to collaborating with like-minded professionals.
        </Typography>
      </Container>
    </Box>
   );
};

export default About;
