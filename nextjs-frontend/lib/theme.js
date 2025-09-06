// theme.js - New CareerCraft theme configuration with black, red, orange, and yellow palette

export const theme = {
  colors: {
    // Base colors
    background: {
      primary: '#0F0F0F',
      secondary: '#121212',
      tertiary: '#1A1A1A',
    },
    foreground: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      tertiary: '#A0A0A0',
    },
    // Brand colors
    brand: {
      primary: '#C62828',    // Deep Red
      secondary: '#F57C00',  // Orange
      accent: '#FFC107',     // Yellow/Gold
      muted: '#282828',      // Soft Black
    },
    // Utility colors
    utility: {
      success: '#43A047',
      warning: '#FFB300',
      error: '#D32F2F',
      info: '#0288D1',
    }
  },
  gradients: {
    heroBackground: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
    primaryGradient: 'linear-gradient(135deg, #C62828 0%, #F57C00 100%)',
    accentGradient: 'linear-gradient(135deg, #F57C00 0%, #FFC107 100%)',
    cardHover: 'linear-gradient(135deg, rgba(198, 40, 40, 0.05) 0%, rgba(255, 193, 7, 0.05) 100%)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
    highlight: '0 0 15px rgba(255, 193, 7, 0.3)',
    glow: '0 0 20px rgba(198, 40, 40, 0.4)',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  }
};

export default theme;
