// farmus_frontend/src/types/product.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  producerName: string;
  rating?: number;    // 추가: 별점 (선택 사항)
  reviews?: number;   // 추가: 리뷰 수 (선택 사항)
  discount?: string;  // 추가: 할인율 (선택 사항, 예: "13%")
  // 필요한 경우 다른 Product 관련 속성도 여기에 추가할 수 있습니다.
}