import styled from 'styled-components';

import theme from './ThemeConstants';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 22px 12px;
  margin-bottom: 12px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 22px;
  line-height: 20px;
  color: ${theme.colors.white};
  text-align: center;
  border-bottom: 1px solid ${theme.colors.slate_10};
  background: ${theme.colors.duke_blue};
  // box shadow TODO
`;

export const BackArrowWrapper = styled.div`
  position: absolute;
  left: 12px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;
