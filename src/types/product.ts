// src/types/product.ts

/**
 * 백엔드 API 명세서()와 테이블 정의서에 기반하여
 * 상품 데이터의 타입을 정의합니다.
 */
export interface Product {
    id: number;           // 상품 고유 ID
    name: string;         // 상품명
    price: number;        // 가격
    imageUrl?: string;    // 대표 이미지 URL (옵셔널)
    producerName?: string;// 생산자 이름 (옵셔널)
  }