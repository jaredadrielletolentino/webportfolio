import { AppBar, Toolbar, Typography, Container, Box, IconButton, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Header = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: isLight ? theme.palette.primary.main : theme.palette.background.paper,
        color: isLight ? theme.palette.primary.contrastText : theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography 
            variant="h6" 
            component={NavLink} 
            to="/" 
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 700 }}
          >
            Jared Tolentino
          </Typography>
          <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <NavLink to="/" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>
              Projects
            </NavLink>
            <NavLink to="/contact" className="nav-link" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>
              Contact
            </NavLink>
            {/* New Certificates Button */}
            <NavLink to="/certifications" className="nav-link" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>
              Certificates
            </NavLink>
          </Box>
          <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
