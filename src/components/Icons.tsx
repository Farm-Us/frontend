// farmus_frontend/src/components/Icons.tsx
import React from 'react';
import styled from 'styled-components';
import { IconProps } from '../types'; // src/types/index.ts에서 IconProps 임포트

// StyledIcon 컴포넌트 정의
const StyledIcon = styled.svg.withConfig({
  // shouldForwardProp을 사용하여 'color', 'size', 'filled'와 같은 비표준 prop들이
  // 실제 <svg> DOM 요소로 전달되는 것을 방지합니다.
  shouldForwardProp: (prop) => !['color', 'size', 'filled'].includes(prop as string),
})<IconProps & { filled?: boolean }>`
  width: ${(props) => props.size || 24}px;
  height: ${(props) => props.size || 24}px;
  flex-shrink: 0; /* 아이콘이 줄어들지 않도록 */

  /* 아이콘의 색상은 fill 또는 stroke를 통해 제어합니다. */
  /* props.color가 제공되면 그 값을 사용하고, 아니면 currentColor (부모 텍스트 색상)를 사용합니다. */
  fill: ${(props) => props.color || 'currentColor'};
  stroke: ${(props) => props.color || 'currentColor'}; /* 기본적으로 선 색상도 color prop을 따르도록 */

  /* 단색 아이콘의 경우 stroke는 none으로, fill만 color prop을 따르도록 설정할 수 있습니다. */
  /* fill: ${(props) => props.color || 'currentColor'}; */
  /* stroke: none; */
`;

// --- 개별 아이콘 컴포넌트 정의 ---

// 로고 아이콘
export const LogoIcon: React.FC<IconProps> = ({ size = 100, color = '#191F28' }) => (
  // StyledIcon에 color prop을 전달하여 내부에서 fill/stroke를 제어
  <StyledIcon width={size} height={size * (50/ 100)} viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}>
    {/* text 요소의 fill은 currentColor로 설정하여 StyledIcon의 fill을 따르도록 */}
    <text 
    x="0" 
    y="20" 
    font-family="Arial, sans-serif" 
    font-size="50" 
    fill="#00AB55" 
    font-weight="bold" 
    textLength="100" 
    lengthAdjust="spacingAndGlyphs">
    Farm:Us
  </text>
  </StyledIcon>
);

// 장바구니 아이콘
export const CartIcon: React.FC<IconProps> = ({ size = 24, color = '#3B4149' }) => (
  <StyledIcon width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color} stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </StyledIcon>
);

// 사용자 아이콘
export const UserIcon: React.FC<IconProps> = ({ size = 24, color = '#3B4149' }) => (
  <StyledIcon width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color} stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
  </StyledIcon>
);

// 편집 아이콘 (플로팅 버튼용)
export const EditIcon: React.FC<IconProps> = ({ size = 24, color = 'white' }) => (
  <StyledIcon width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color} stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
  </StyledIcon>
);

// 더보기 아이콘
export const MoreIcon: React.FC<IconProps> = ({ size = 20, color = '#6B7684' }) => (
  <StyledIcon width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color} stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </StyledIcon>
);

// 좋아요/하트 아이콘
export const HeartIcon: React.FC<IconProps & { filled?: boolean }> = ({ size = 24, color = 'currentColor', filled = false }) => (
    <StyledIcon width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      fill={filled ? color : 'none'} /* filled가 true이면 color로 채우고 아니면 투명 */
      stroke={filled ? 'none' : color} /* filled가 false이면 color로 선 그리기 */
      color={color} // shouldForwardProp이 처리하므로 안전하게 전달
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
    </StyledIcon>
);