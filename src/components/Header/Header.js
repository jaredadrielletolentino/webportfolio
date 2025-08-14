import { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, IconButton, useTheme, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';

const Header = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerNavLinkStyle = {
    width: '100%',
    textDecoration: 'none',
    color: theme.palette.text.primary,
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: '100%',
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: 600 }}>
        Jared Tolentino
      </Typography>
      <Divider />
      <List>
        <ListItem button component={NavLink} to="/" sx={{ justifyContent: 'center' }} style={drawerNavLinkStyle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/projects" sx={{ justifyContent: 'center' }} style={drawerNavLinkStyle}>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={NavLink} to="/contact" sx={{ justifyContent: 'center' }} style={drawerNavLinkStyle}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={NavLink} to="/certifications" sx={{ justifyContent: 'center' }} style={drawerNavLinkStyle}>
          <ListItemText primary="Certificates" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
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
              <NavLink to="/" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>Home</NavLink>
              <NavLink to="/projects" className="nav-link" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>Projects</NavLink>
              <NavLink to="/contact" className="nav-link" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>Contact</NavLink>
              <NavLink to="/certifications" className="nav-link" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>Certificates</NavLink>
            </Box>
            {/* Theme Toggle Button */}
            <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
