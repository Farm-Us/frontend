// farmus_frontend/src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'; // @emotion/is-prop-valid 임포트

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import '../styles/globals.css'; // Tailwind CSS 및 기타 전역 CSS 임포트

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // StyleSheetManager를 사용하여 styled-components의 프롭 전달 동작을 제어합니다.
    // 유효한 HTML/SVG 속성이면서 $로 시작하지 않는 프롭만 DOM으로 전달합니다.
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop) && prop[0] !== '$'}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default MyApp;