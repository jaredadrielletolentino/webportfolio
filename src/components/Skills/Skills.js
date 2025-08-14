import { Box, Container, Typography, Grid, Avatar, Tooltip, Paper } from '@mui/material';
import skills from '../../constants/skills';
import { useTheme } from '@mui/material/styles';

const Skills = () => {
  const theme = useTheme();
  
  const renderSkills = (skillList) => (
    <Grid container spacing={3} justifyContent="center">
      {skillList.map((skill) => (
        <Grid item key={skill.name} xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
          <Tooltip title={skill.name} arrow>
            <Avatar
              src={skill.icon}
              alt={skill.name}
              sx={{ 
                width: 64, 
                height: 64, 
                mx: 'auto', 
                mb: 1,
                backgroundColor: theme.palette.background.paper,
                padding: '8px',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                }
              }}
            />
          </Tooltip>
          <Typography variant="caption" display="block" sx={{ fontWeight: 500 }}>
            {skill.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box id="skills" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          My Skills
        </Typography>
        
        <Paper elevation={2} sx={{ p: 4, mb: 5 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
            Frontend
          </Typography>
          {renderSkills(skills.frontend)}
        </Paper>
        
        <Paper elevation={2} sx={{ p: 4, mb: 5 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
            Backend
          </Typography>
          {renderSkills(skills.backend)}
        </Paper>
        
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
            Tools
          </Typography>
          {renderSkills(skills.tools)}
        </Paper>
      </Container>
    </Box>
  );
};

export default Skills;
