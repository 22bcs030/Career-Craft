// Theme configuration for CareerCraft with black, red, orange, yellow color scheme

export const theme = {
  // Primary colors
  colors: {
    // Main colors
    black: '#121212',        // Main background
    darkGray: '#1E1E1E',     // Cards, sections
    lightGray: '#2A2A2A',    // Secondary elements
    
    // Brand colors
    red: '#E53935',          // Primary accent
    darkRed: '#C62828',      // Secondary accent
    orange: '#FF9800',       // Call to action
    darkOrange: '#F57C00',   // Hover states
    yellow: '#FFD600',       // Highlights
    amber: '#FFC107',        // Secondary highlights
    
    // Text colors
    white: '#FFFFFF',        // Main text on dark backgrounds
    offWhite: '#F5F5F5',     // Secondary text on dark backgrounds
    lightText: '#E0E0E0',    // Tertiary text
    
    // Functional colors
    success: '#66BB6A',      // Success states
    error: '#F44336',        // Error states
    warning: '#FFCA28',      // Warning states
    info: '#29B6F6',         // Information states
  },
  
  // Gradients
  gradients: {
    hero: 'linear-gradient(135deg, #121212 0%, #1E1E1E 50%, #2A2A2A 100%)',
    heroAccent: 'linear-gradient(135deg, #E53935 0%, #FF9800 100%)',
    card: 'linear-gradient(135deg, #1E1E1E 0%, #2A2A2A 100%)',
    button: 'linear-gradient(135deg, #E53935 0%, #FF9800 100%)',
    buttonHover: 'linear-gradient(135deg, #C62828 0%, #F57C00 100%)',
  },
  
  // Shadows
  shadows: {
    small: '0 2px 5px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 10px rgba(0, 0, 0, 0.3)',
    large: '0 8px 30px rgba(0, 0, 0, 0.5)',
    glow: '0 0 15px rgba(255, 152, 0, 0.5)',
    redGlow: '0 0 15px rgba(229, 57, 53, 0.5)',
  },
  
  // Border radius
  radius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    pill: '9999px',
  }
};

export default theme;
