// farmus_frontend/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // styled-components 설정을 여기에 추가합니다.
  compiler: {
    styledComponents: true, // styled-components를 활성화합니다.
  },
};

export default nextConfig;