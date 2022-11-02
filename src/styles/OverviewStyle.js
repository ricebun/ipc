import styled from 'styled-components';

import { BaseContentContainer } from '../styles/GlobalStyle';

export const OverviewContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const NavCards = styled(BaseContentContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
