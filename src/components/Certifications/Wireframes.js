import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  IconButton,
  Tooltip
} from '@mui/material';
import { Image, Palette, CalendarToday, Visibility } from '@mui/icons-material';
import wireframes from '../../constants/wireframes.js';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';

const WireframesComponent = () => {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleViewImage = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <Box
      id="wireframes"
      ref={ref}
      className={`fade-in-section ${inView ? 'visible' : ''}`}
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            mb: 2,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Wireframes Library
        </Typography>
        
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
        >
          Download high-quality wireframe files for your projects.
        </Typography>

        {/* Solution 1: CSS Grid with fixed row height */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 3,
          '& > *': {
            height: '100%', // Force all grid items to take full height
          }
        }}>
          {wireframes.map((wireframe, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%', // Card takes full height of grid cell
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 24px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                }
              }}
            >
              {/* Image Section - Fixed Height */}
              <Box 
                sx={{ 
                  height: 160,
                  bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  cursor: 'pointer',
                  flexShrink: 0 // Prevent shrinking
                }} 
                onClick={() => handleViewImage(wireframe.image)}
              >
                <CardMedia
                  component="img"
                  image={wireframe.image}
                  alt={wireframe.title}
                  sx={{
                    maxHeight: '90%',
                    maxWidth: '90%',
                    objectFit: 'contain'
                  }}
                />
                <Tooltip title="View Full Size">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewImage(wireframe.image);
                    }}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      bgcolor: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                    }}
                    size="small"
                  >
                    <Visibility fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Content Section - Takes remaining space */}
              <CardContent sx={{ 
                flex: 1, // Takes all available space
                p: 2.5,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden' // Prevent content from expanding
              }}>
                {/* Title */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: 1.5,
                    minHeight: '2.6em',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {wireframe.title}
                </Typography>
                
                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.4,
                    mb: 2,
                    fontSize: '0.8125rem',
                    flex: 1, // Takes available space
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {wireframe.description}
                </Typography>

                {/* Metadata & Tags */}
                <Box sx={{ flexShrink: 0, mb: 2 }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <CalendarToday sx={{ fontSize: 14, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      {wireframe.date}
                    </Typography>
                  </Stack>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {wireframe.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          fontSize: '0.625rem',
                          height: '20px',
                          '& .MuiChip-label': { px: 1 }
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* File Types */}
                <Box sx={{ 
                  flexShrink: 0,
                  pt: 1.5,
                  borderTop: `1px solid ${theme.palette.divider}`
                }}>
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    Files included:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<Image sx={{ fontSize: 14 }} />}
                      label="JPG"
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                    <Chip
                      icon={<Palette sx={{ fontSize: 14 }} />}
                      label="PSD"
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CSS Grid Fallback - This is what makes all cards same height */}
        <style jsx global>{`
          /* Force CSS Grid to create equal height rows */
          .wireframes-grid-container {
            display: grid;
            grid-auto-rows: 1fr; /* Key: all rows have same height */
          }
          
          /* Alternative: Use flexbox with flex-grow */
          .equal-height-cards {
            display: flex;
            flex-wrap: wrap;
          }
          
          .equal-height-cards .MuiCard-root {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
        `}</style>
      </Container>
    </Box>
  );
};

export default WireframesComponent;