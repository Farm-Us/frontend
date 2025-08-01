// farmus_frontend/src/data.ts

import { Product } from './types/product'; // Product 타입 임포트
import { MainBannerData, Story } from './types'; // 타입 임포트

// public 폴더의 이미지는 .ts/.tsx 파일 내에서 import 문으로 가져오지 않고,
// Next.js Image 컴포넌트의 src prop에 직접 문자열 경로를 사용합니다.

// 메인 배너 데이터
export const mainBannerData: MainBannerData = {
  imageUrl: '/images/homecommerce.png', // 업로드된 'homecommerce.jpg' 파일을 사용
  title: '농부 이야기, 체험 후기 등에 관한 배너입니다',
  userName: 'OO농부',
  userAvatarUrl: '/images/user-profile.png', // 업로드된 'user-profile.png' 파일을 사용
};

// 카테고리 칩 데이터
export const categoryList: string[] = [
  '베스트', '과일', '채소', '축산', '수산', '김치', '쌀/잡곡',
];

// 00님의 관심있는 상품 데이터 (Product 타입 활용)
export const interestProducts: Product[] = [
  { id: 1, name: '고당도 하우스 수박', price: 21000, imageUrl: '/images/product-suvack.jpg', producerName: '싱싱수박농원' }, // 업로드된 'product-suvack.jpg' 사용
  { id: 2, name: '초당 옥수수 10개입', price: 15900, imageUrl: '/images/product-strawberry.jpg', producerName: '옥수수마을' }, // 업로드된 'product-strawberry.jpg' 사용
  { id: 3, name: '유기농 블루베리 500g', price: 18000, imageUrl: '/images/strawberry-.jpg', producerName: '블루베리농장' }, // 업로드된 'strawberry-.jpg' 사용
];

// 7월 인기 제철음식 데이터 (Product 타입 활용, 랭킹/리뷰 정보 포함)
export const seasonalProducts: Product[] = [
  { id: 7, name: 'GAP 인증 자두 (대과)', price: 25900, imageUrl: '/images/product-watermelon.jpg', producerName: '자두농가', rating: 5.0, reviews: 999, discount: '13%' }, // 업로드된 'product-watermelon.jpg' 사용
  { id: 8, name: '해남 미니 밤호박 3kg', price: 19900, imageUrl: '/images/placeholder-default.jpg', producerName: '밤호박농부', rating: 4.9, reviews: 999, discount: '15%' }, // Placeholder
  { id: 9, name: '성주 참외 로열과 2kg', price: 22000, imageUrl: '/images/placeholder-default.jpg', producerName: '참외농장', rating: 5.0, reviews: 999, discount: '10%' }, // Placeholder
  { id: 10, name: '무농약 데라웨어 포도', price: 28000, imageUrl: '/images/placeholder-default.jpg', producerName: '포도마을', rating: 4.9, reviews: 876, discount: '5%' }, // Placeholder
];

// 농부의 이야기를 확인해보세요 데이터 (Story 타입 활용)
export const farmerStories: Story[] = [
  { id: 101, title: '산골짜기에서 온 달콤한 선물', imageUrl: '/images/placeholder-default.jpg', farmerName: '복숭아 농부', time: '7시간 전', userAvatarUrl: '/images/user-avatar.png' }, // Placeholder
  { id: 102, title: '토마토가 익어가는 계절', imageUrl: '/images/placeholder-default.jpg', farmerName: '토마토 할머니', time: '1일 전', userAvatarUrl: '/images/user-avatar.png' }, // Placeholder
  { id: 103, title: '제주에서 귤농사 20년 노하우', imageUrl: '/images/placeholder-default.jpg', farmerName: '제주아저씨', time: '2일 전', userAvatarUrl: '/images/user-avatar.png' }, // Placeholder
];