import styled from 'styled-components';

import theme from '../styles/ThemeConstants';

export const PageContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const BaseContentContainer = styled.div`
  position: relative;
  top: ${theme.headerHeight};
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px 16px;
`;
