import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Link as MuiLink } from '@mui/material';
import certifications from '../../constants/certifications';
import { useTheme } from '@mui/material/styles';

const Certifications = () => {
  const theme = useTheme();

  return (
    <Box id="certifications" sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          My Certifications
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {certifications.map((cert, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: theme.shadows[10],
                }
              }}>
                <MuiLink href={cert.link} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    image={cert.image}
                    alt={cert.title}
                    sx={{ height: 220, objectFit: 'contain', p: 2 }} // Use contain to show the whole image
                  />
                </MuiLink>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Issued by: {cert.issuer}
                  </Typography>
                  <Button
                    href={cert.link}
                    target="_blank"
                    variant="text"
                    size="small"
                    sx={{ mt: 2 }}
                  >
                    Verify Credential
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;
