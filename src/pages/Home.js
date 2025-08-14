import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
// Certifications component is no longer needed here
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Skills />
    </Box>
  );
};

export default Home;
