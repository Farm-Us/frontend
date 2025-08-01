// farmus_frontend/src/components/ProductCard.tsx

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Product } from '../types/product'; // src/types/product.ts에서 Product 타입 임포트
import { HeartIcon } from './Icons'; // src/components/Icons.tsx에서 HeartIcon 임포트

interface ProductCardProps {
    product: Product & { // Product 타입 확장
        rating?: number;
        reviews?: number;
        discount?: string;
    };
}

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
  width: 150px;
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 비율 */
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const InfoContainer = styled.div`
  padding: 8px 12px;
`;

const ProductName = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 40px;
  margin-bottom: 4px;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Discount = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.error};
`;

const Price = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
`;

const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 4px;
`;
const StarIconSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: #FFD700;
    margin-right: 2px;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isLiked, setIsLiked] = React.useState(false);

    return (
        <CardContainer>
            <ImageWrapper>
                <Image
                    src={product.imageUrl || '/images/placeholder.jpg'}
                    alt={product.name}
                    fill={true} // layout="fill"과 objectFit="cover"를 대체
                    sizes="(max-width: 768px) 100vw, 33vw" // 이미지 최적화 위한 sizes 속성 추가
                />
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: '50%',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 1,
                    }}
                >
                    <HeartIcon size={16} color={isLiked ? '#FF6B6B' : 'white'} filled={isLiked} />
                </button>
            </ImageWrapper>
            <InfoContainer>
                <ProductName>{product.name}</ProductName>
                <PriceWrapper>
                    {product.discount && <Discount>{product.discount}</Discount>}
                    <Price>{product.price.toLocaleString()}원</Price>
                </PriceWrapper>
                {product.rating !== undefined && product.reviews !== undefined && (
                    <RatingWrapper>
                        <StarIconSvg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </StarIconSvg>
                        <span>{product.rating} ({product.reviews}+)</span>
                    </RatingWrapper>
                )}
            </InfoContainer>
        </CardContainer>
    );
};

export default ProductCard;