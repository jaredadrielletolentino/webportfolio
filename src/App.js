import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates'; // Import the new page
import { lightTheme, darkTheme } from './styles/theme';
import { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';

function App() {
  // Set default theme to dark mode
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add the new route for the certifications page */}
            <Route path="/certifications" element={<Certificates />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
