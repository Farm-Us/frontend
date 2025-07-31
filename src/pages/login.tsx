// farmus_frontend/src/pages/login.tsx

// React와 Next.js의 핵심 기능들을 가져옵니다.
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
// 'isAxiosError'를 axios에서 추가로 import 합니다. 에러 타입을 확인하는 데 사용됩니다.
import { isAxiosError } from 'axios';

// 우리가 직접 만든 모듈들을 가져옵니다.
import apiClient from '../lib/apiClient';
import useUserStore from '../store/userStore';

// --- Styled-components UI 요소 정의 (이전과 동일) ---
const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 350px;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const LoginButton = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  height: 1rem;
`;

// --- 로그인 페이지 리액트 컴포넌트 ---

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  const { login } = useUserStore();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await apiClient.post('/api/user/login', {
        email,
        password,
      });

      const { accessToken, user } = response.data;
      login(accessToken, user || {});

      alert('로그인에 성공했습니다!');
      router.push('/commerce');

    } catch (err) { // 'err: any' 대신 'err'로만 받습니다. 타입은 아래에서 확인합니다.
      console.error('로그인 실패:', err);
      
      let errorMessage = '로그인 중 오류가 발생했습니다.'; // 기본 에러 메시지

      // isAxiosError 함수를 사용하여, 발생한 에러가 axios 에러가 맞는지 확인합니다.
      if (isAxiosError(err)) {
        // axios 에러가 맞다면, 서버에서 보낸 응답(response) 데이터에 접근하여 메시지를 설정합니다.
        // err.response.data.message가 존재하지 않을 경우를 대비하여 기본 메시지를 함께 사용합니다.
        errorMessage = err.response?.data?.message || '이메일 또는 비밀번호를 확인해주세요.';
      }
      
      setError(errorMessage);
    }
  };

  return (
    <LoginPageContainer>
      <Title>Farm-Us</Title>
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          required
        />
        <ErrorMessage>{error}</ErrorMessage>
        <LoginButton type="submit">로그인</LoginButton>
      </LoginForm>
    </LoginPageContainer>
  );
}