import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
