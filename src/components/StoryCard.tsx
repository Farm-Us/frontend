// farmus_frontend/src/components/StoryCard.tsx
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Story } from '../types'; // src/types/index.ts에서 Story 타입 임포트
import { HeartIcon } from './Icons'; // src/components/Icons.tsx에서 HeartIcon 임포트

interface StoryCardProps {
  story: Story;
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
  width: 228px; /* UI 디자인에 맞춘 고정 너비 */
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.66%; /* 3:2 비율 이미지 */
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const ContentWrapper = styled.div`
  padding: 12px 16px;
`;

const StoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FarmerInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  gap: 6px;
`;

const AvatarImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
`;

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <CardContainer>
      <ImageWrapper>
        <Image
          src={story.imageUrl || '/images/placeholder-story.jpg'}
          alt={story.title}
          fill={true} // layout="fill"과 objectFit="cover"를 대체
          sizes="(max-width: 768px) 100vw, 33vw" // 이미지 최적화 위한 sizes 속성 추가
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
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
      <ContentWrapper>
        <StoryTitle>{story.title}</StoryTitle>
        <FarmerInfo>
          <AvatarImage
            src={story.userAvatarUrl || '/images/user-profile.png'} // Story 타입에 userAvatarUrl 추가 필요
            alt={story.farmerName}
            width={22}
            height={22}
          />
          <span>{story.farmerName}</span>
          <span>·</span>
          <span>{story.time}</span>
        </FarmerInfo>
      </ContentWrapper>
    </CardContainer>
  );
};

export default StoryCard;