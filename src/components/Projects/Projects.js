import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, CardActions } from '@mui/material';
import projects from '../../constants/projects';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  // Set up the observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="projects"
      ref={ref}
      className={`fade-in-section ${inView ? 'visible' : ''}`}
      sx={{ py: 8 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          My <span style={{ color: '#00abf0' }}>Projects</span>
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: (theme) => theme.shadows[10],
                }
              }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, mt: 'auto', display: 'flex', justifyContent: 'flex-start', gap: 1 }}>
                  <Button
                    href={project.link}
                    target="_blank"
                    variant="contained"
                    size="small"
                  >
                    View Project
                  </Button>
                  {project.docs && (
                    <Button
                      href={project.docs}
                      target="_blank"
                      variant="outlined"
                      size="small"
                    >
                      Documentation
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
