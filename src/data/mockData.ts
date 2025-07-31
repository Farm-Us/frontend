// src/data/mockData.ts

import { Product } from '../types/product'; // 상품 타입을 가져옵니다.

// Product 타입의 규칙을 따르는 가짜 상품 데이터 배열입니다.
export const mockProducts: Product[] = [
  {
    id: 1,
    name: '[유기농] 신선한 당일 수확 딸기 1kg',
    price: 18900,
    imageUrl: '/images/product_strawberry.jpg', // public 폴더에 이미지가 있다고 가정
    producerName: '해맑은 농원',
  },
  {
    id: 2,
    name: 'GAP 인증 고당도 하우스 감귤 3kg',
    price: 24000,
    imageUrl: '/images/product_tangerine.jpg',
    producerName: '제주 감귤 농장',
  },
  {
    id: 3,
    name: '아삭아삭! 고랭지 양배추 1통',
    price: 4500,
    imageUrl: '/images/product_cabbage.jpg',
    producerName: '강원 평창 농부',
  },
  {
    id: 4,
    name: '무농약 인증 블루베리 500g',
    price: 15000,
    imageUrl: '/images/product_blueberry.jpg',
    producerName: '새콤달콤 농장',
  },
  {
    id: 5,
    name: '강원도 못난이 감자 5kg',
    price: 12000,
    imageUrl: '/images/product_potato.jpg',
    producerName: '감자밭 할아버지',
  },
  {
    id: 6,
    name: '친환경 대추방울토마토 1kg',
    price: 11900,
    imageUrl: '/images/product_tomato.jpg',
    producerName: '토마토 삼촌',
  },
];