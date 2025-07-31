// src/pages/index.tsx

import { useState, useEffect } from 'react';
import styled from 'styled-components';

// --- 필요한 모든 모듈과 컴포넌트를 가져옵니다 ---
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockData'; // 백엔드 대신 사용할 가짜 데이터를 가져옵니다.

// --- 스타일 정의 ---
const MainPageContainer = styled.main`
  /* 페이지 전체를 감싸는 컨테이너 스타일 */
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  /* '팜어스 인기 상품' 제목 스타일 */
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProductGrid = styled.div`
  /* 상품 카드들을 감싸는 그리드 레이아웃 스타일 */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Message = styled.p`
  /* '로딩 중...' 또는 '상품 없음' 메시지 스타일 */
  text-align: center;
  padding: 5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

// --- 메인 페이지 컴포넌트 ---
export default function MainPage() {
  // 컴포넌트에서 사용할 상태(State)들을 정의합니다.
  const [products, setProducts] = useState<Product[]>([]); // 상품 목록을 저장할 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 중인지 여부를 나타낼 상태

  // useEffect: 컴포넌트가 처음 화면에 그려질 때(마운트될 때) 단 한 번만 실행됩니다.
  useEffect(() => {
    // 실제 API를 호출하는 대신, 1초 뒤에 가짜 데이터를 불러온 것처럼 처리합니다.
    const timer = setTimeout(() => {
      // API 응답 대신, 우리가 만든 mockProducts(가짜 데이터)를 상태에 저장합니다.
      setProducts(mockProducts);
      // 로딩 상태를 종료합니다.
      setLoading(false);
    }, 1000); // 1000ms = 1초

    // 컴포넌트가 화면에서 사라질 때, 불필요한 타이머 작동을 멈추기 위한 정리(cleanup) 함수입니다.
    return () => clearTimeout(timer);

  }, []); // 빈 배열[]은 이 useEffect가 최초 1회만 실행되도록 보장하는 중요한 부분입니다.

  // 로딩 중일 때 보여줄 화면
  if (loading) {
    return <Message>상품 목록을 불러오는 중...</Message>;
  }

  return (
    <MainPageContainer>
      <Title>팜어스 인기 상품</Title>
      <ProductGrid>
        {/*
          products 배열에 있는 각 상품(product)에 대해 ProductCard 컴포넌트를 하나씩 만들어줍니다.
        */}
        {products.map((product) => (
          <ProductCard
            key={product.id} // React가 각 카드를 구별하기 위한 고유한 키
            product={product} // ProductCard에 상품 데이터 전체를 전달
          />
        ))}
      </ProductGrid>
    </MainPageContainer>
  );
}