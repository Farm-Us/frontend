// src/styles/theme.ts
import { DefaultTheme } from 'styled-components';

// 앱 전체에서 사용할 디자인 값(색상, 글꼴 크기 등)을 정의합니다.
const theme: DefaultTheme = {
  colors: {
    primary: '#588157',
    secondary: '#3a5a40',
    background: '#f7f6f2',
    text: '#343a40',
    error: '#d90429',
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
  },
};

export default theme;