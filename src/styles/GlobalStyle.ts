// src/styles/GlobalStyle.ts
import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

// 앱 전체에 적용될 공통 스타일을 정의합니다.
const GlobalStyle = createGlobalStyle`
  /* css 헬퍼 함수로 reset 스타일을 감싸 타입스크립트 호환성 문제를 해결합니다. */
  ${css`
    ${reset}
  `}

  * { box-sizing: border-box; }
  body {
    /* Pretendard 폰트가 없다면 시스템 기본 폰트를 사용합니다. */
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
  a { color: inherit; text-decoration: none; }
  button, input { font-family: inherit; }
`;

export default GlobalStyle;