// farmus_frontend/src/components/Section.tsx
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SectionProps } from '../types';
import { MoreIcon } from './Icons';

const SectionContainer = styled.section`
  padding: 16px;
  background-color: white;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledMoreLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Section: React.FC<SectionProps> = ({ title, moreLink, children }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {moreLink && (
          <StyledMoreLink href={moreLink}>
            <span>더보기</span>
            <MoreIcon size={16} color={({ theme }:{them:any}) => theme.colors.textSecondary} />
          </StyledMoreLink>
        )}
      </SectionHeader>
      {children}
    </SectionContainer>
  );
};

export default Section;