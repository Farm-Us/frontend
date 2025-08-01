// farmus_frontend/src/components/StatusBar.tsx
import React from 'react';
import styled from 'styled-components';

const StatusBarContainer = styled.div`
  width: 100%;
  height: 24px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 14px;
  color: black;
  font-size: 12px;
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const StatusBar: React.FC = () => {
  return (
    <StatusBarContainer>
      <span>9:41</span>
    </StatusBarContainer>
  );
};