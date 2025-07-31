// src/lib/apiClient.ts

import axios from 'axios';

// 백엔드 서버의 주소를 baseURL로 설정한 axios 인스턴스를 생성합니다.
const apiClient = axios.create({
  // API 명세서에 따라 백엔드 서버의 기본 URL을 설정합니다.
  baseURL: 'http://localhost:8080', // 백엔드 서버 주소
});

// 앞으로 모든 요청에 토큰을 담아 보내는 등의 공통 로직을 여기에 추가할 수 있습니다.

export default apiClient;