// src/styles/styled.d.ts
import 'styled-components';

// styled-components의 DefaultTheme 타입을 확장하여 우리 프로젝트의 theme 타입을 선언합니다.
// 이 파일 덕분에 프로젝트 모든 곳에서 theme 객체의 타입을 정확히 알 수 있습니다.
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      error: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}