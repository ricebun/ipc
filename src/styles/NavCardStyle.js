import styled from 'styled-components';

import theme from './ThemeConstants';

export const NavCardWrapper = styled.div`
  width: 50%;
  height: 100px;
  box-sizing: border-box;
  padding: 4px;
`;

export const NavCard = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
  color: ${theme.colors.slate_110};
  font-size: 18px;
  font-weight: 500;
  border: 1px solid ${theme.colors.slate_70};
  border-radius: 4px;
  background: ${theme.colors.white};
`;
