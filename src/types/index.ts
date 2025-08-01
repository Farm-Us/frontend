// farmus_frontend/src/types/index.ts

// 메인 배너 데이터 타입
export interface MainBannerData {
  imageUrl: string;
  title: string;
  userName: string;
  userAvatarUrl: string;
}

// 스토리 데이터 타입 (StoryCardProps에 사용)
export interface Story {
  id: number;
  title: string;
  imageUrl: string;
  farmerName: string;
  time: string;
  userAvatarUrl?: string; // StoryCard에서 사용할 사용자 아바타 URL
}

// CategoryChips 컴포넌트의 props 타입
export interface CategoryChipsProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

// NavTab 컴포넌트의 props 타입 (Transient Prop $isactive 포함)
export interface NavTabProps {
  $isactive: boolean; // Transient Prop으로 사용
}

// Section 컴포넌트의 props 타입
export interface SectionProps {
  title: string;
  moreLink?: string; // '더보기' 링크는 선택 사항
  children: React.ReactNode;
}

// Icon 컴포넌트의 props 타입
export interface IconProps {
  size?: number;
  color?: string;
}