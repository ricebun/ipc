import styled from 'styled-components';

import { BaseContentContainer } from '../styles/GlobalStyle';
import theme from '../styles/ThemeConstants';

export const PageContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const ArticleContainer = styled(BaseContentContainer)`
  height: calc(100% - ${theme.headerHeight});
`;

export const ArticleContent = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    /* Safari and Chrome */
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const VideoWrapper = styled.div`
  // Responsive iframes: https://www.w3schools.com/howto/howto_css_responsive_iframes.asp

  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;
