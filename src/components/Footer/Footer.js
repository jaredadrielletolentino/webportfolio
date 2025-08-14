import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Facebook } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      component="footer"
      sx={{
        py: 2, 
        px: 2,
        backgroundColor: isLight ? theme.palette.primary.main : theme.palette.background.paper,
        color: isLight ? theme.palette.primary.contrastText : theme.palette.text.secondary,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton href="https://github.com/jaredadrielletolentino" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
              <GitHub />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/jared-tolentino-0557a1216/" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://www.instagram.com/jaredthepunkkid/" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
              <Instagram />
            </IconButton>
            <IconButton href="https://www.facebook.com/jared.tolentino.9" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
              <Facebook />
            </IconButton>
          </Box>
          <Typography variant="body2" color="inherit">
            © {new Date( ).getFullYear()} Jared Tolentino. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
