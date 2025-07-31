// src/components/ProductCard.tsx

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Next.js의 최적화된 이미지 컴포넌트
import { Product } from '../types/product'; // 위에서 정의한 상품 타입

// --- 타입 정의 ---
// ProductCard 컴포넌트가 받을 props(속성)의 타입을 정의합니다.
interface ProductCardProps {
    product: Product;
}

// --- 스타일 정의 ---
const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* 이미지가 카드 밖으로 나가지 않도록 설정 */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px); /* 마우스를 올리면 살짝 위로 올라가는 효과 */
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 비율을 유지하기 위한 트릭 */
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  /* 텍스트가 두 줄을 넘어가면 ...으로 표시 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 2.5rem; /* 폰트 크기에 맞춰 두 줄 높이 지정 */
`;

const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0.5rem;
`;

// --- 컴포넌트 구현 ---
// React.FC는 이 함수가 React 함수형 컴포넌트임을 명시합니다.
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        {/* Next.js의 Image 컴포넌트는 이미지 최적화를 자동으로 해줍니다. */}
        <Image
          src={product.imageUrl || 'https://via.placeholder.com/300'} // 이미지가 없을 경우 임시 이미지 표시
          alt={product.name}
          layout="fill" // 부모 요소(ImageWrapper)에 꽉 차게 설정
          objectFit="cover" // 비율을 유지하면서 꽉 채움
        />
      </ImageWrapper>
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        {/* toLocaleString()은 숫자를 1,000원 처럼 쉼표를 넣어 표시해줍니다. */}
        <Price>{product.price.toLocaleString()}원</Price>
      </InfoContainer>
    </CardContainer>
  );
};

export default ProductCard;