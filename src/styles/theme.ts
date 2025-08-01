// farmus_frontend/src/styles/theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#00AB55', // FarmUs 메인 그린
    primaryDark: '#008F47',
    secondary: '#FFC107',
    text: '#191F28',
    textSecondary: '#6B7684',
    background: '#F8F9FA',
    backgroundLight: '#F3F4F6',
    border: '#E0E0E0',
    borderLight: '#F0F1F3',
    white: '#FFFFFF',
    black: '#000000',
    error: '#D32F2F',
    success: '#4CAF50',
    warning: '#FF9800',
    info: '#2196F3',
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xl: '1.5rem',
  },
};

export default theme;