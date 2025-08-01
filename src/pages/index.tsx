// farmus_frontend/src/pages/index.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import Image from 'next/image';

// 컴포넌트 임포트
import { CartIcon, UserIcon, EditIcon, LogoIcon } from '../components/Icons';                                             
import ProductCard from '../components/ProductCard';
import StoryCard from '../components/StoryCard';
import Section from '../components/Section';
import { StatusBar } from '../components/StatusBar';

// 목 데이터 임포트
import {
  mainBannerData,
  categoryList,
  interestProducts,
  seasonalProducts,
  farmerStories,
} from '../data';

// ——— Styled-components 스타일 정의 ———
const PageWrapper = styled.div<{ theme?: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const MainContentContainer = styled.div<{ theme?: DefaultTheme }>`
  width: 100%;
  max-width: 375px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const StyledHeader = styled.header<{ theme?: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: sticky;
  top: 24px;
  z-index: 10;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const StyledNavigation = styled.nav<{ theme?: DefaultTheme }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: sticky;
  top: calc(24px + 56px);
  z-index: 10;
`;

// ✅ NavTab: $active 타입을 명확하게 선언
const NavTab = styled.button<{ $active: boolean; theme?: DefaultTheme }>`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  color: ${({ $active, theme }) =>
    $active ? theme!.colors.primary : theme!.colors.textSecondary};
  cursor: pointer;
  padding: 12px 16px;
  border-bottom: ${({ $active, theme }) =>
    $active ? `2px solid ${theme!.colors.primary}` : 'none'};
  transition: all 0.2s ease-in-out;
  flex: 1;
  text-align: center;
`;

const CategoryChipsWrapper = styled.div<{ theme?: DefaultTheme }>`
  display: flex;
  overflow-x: auto;
  padding: 8px 16px;
  gap: 8px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: sticky;
  top: calc(24px + 56px + 48px);
  z-index: 10;
`;

const Chip = styled.button<{ $active: boolean; theme?: DefaultTheme }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme!.colors.primary : theme!.colors.backgroundLight};
  color: ${({ $active, theme }) =>
    $active ? 'white' : theme!.colors.textSecondary};
  border: none;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover { opacity: 0.8; }
`;

const MainBannerContainer = styled.div<{ theme?: DefaultTheme }>`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const OverlayContent = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
`;

const BannerTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const BannerUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  .avatar {
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
  }
`;

const ProductsHorizontalScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 16px 16px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StoriesVerticalLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
`;

const FloatingButton = styled(Link)<{ theme?: DefaultTheme }>`
  position: fixed;
  bottom: 24px;
  right: calc(50% - 375px / 2 + 16px);
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 1000;
  &:hover { background-color: ${({ theme }) => theme.colors.primaryDark}; }
`;

// ——— Home 컴포넌트 본체 ———
const Home: React.FC = () => {
  const theme = useTheme() as DefaultTheme;
  const [activeTab, setActiveTab] = useState<string>('커머스');
  const [activeCategory, setActiveCategory] = useState<string>('베스트');

  return (
    <PageWrapper theme={theme}>
      <MainContentContainer theme={theme}>
        <StatusBar />

        <StyledHeader theme={theme}>
          <LogoIcon size={86} color={theme.colors.text} />
          <IconGroup>
            <CartIcon size={24} color={theme.colors.textSecondary} />
            <UserIcon size={24} color={theme.colors.textSecondary} />
          </IconGroup>
        </StyledHeader>

        <StyledNavigation theme={theme}>
          <NavTab $active={activeTab === '커머스'} onClick={() => setActiveTab('커머스')}>
            커머스
          </NavTab>
          <NavTab $active={activeTab === '커뮤니티'} onClick={() => setActiveTab('커뮤니티')}>
            커뮤니티
          </NavTab>
        </StyledNavigation>

        <CategoryChipsWrapper theme={theme}>
          {categoryList.map((category) => (
            <Chip
              key={category}
              $active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Chip>
          ))}
        </CategoryChipsWrapper>

        <MainBannerContainer theme={theme}>
          <Image
            src={mainBannerData.imageUrl}
            alt={mainBannerData.title}
            fill
            priority
          />
          <OverlayContent>
            <BannerTitle>{mainBannerData.title}</BannerTitle>
            <BannerUserInfo>
              <Image
                src={mainBannerData.userAvatarUrl}
                alt={mainBannerData.userName}
                width={32}
                height={32}
                className="avatar"
              />
              <span>{mainBannerData.userName}</span>
            </BannerUserInfo>
          </OverlayContent>
        </MainBannerContainer>

        <Section title="00님의 관심있는 상품" moreLink="/products/interest">
          <ProductsHorizontalScroll>
            {interestProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ProductsHorizontalScroll>
        </Section>

        <Section title="7월 인기 제철음식" moreLink="/products/seasonal">
          <ProductsHorizontalScroll>
            {seasonalProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ProductsHorizontalScroll>
        </Section>

        <Section title="농부의 이야기를 확인해보세요" moreLink="/stories">
          <StoriesVerticalLayout>
            {farmerStories.map((st) => (
              <StoryCard key={st.id} story={st} />
            ))}
          </StoriesVerticalLayout>
        </Section>

        <FloatingButton href="/register-product" theme={theme}>
          <EditIcon size={24} color="white" />
        </FloatingButton>
      </MainContentContainer>
    </PageWrapper>
  );
};

export default Home;
