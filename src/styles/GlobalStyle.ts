// farmus_frontend/src/styles/GlobalStyle.ts
import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset'; // styled-reset이 설치되어 있다면 임포트하여 사용

const GlobalStyle = createGlobalStyle`
  ${css`
    ${reset}
  `}

  html, body, #__next { // Next.js의 기본 root div는 #__next 입니다.
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;