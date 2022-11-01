import styled from 'styled-components';

const headerHeightProp = (props) => props.theme.headerHeight;

export const OverviewContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const NavCards = styled.div`
  position: relative;
  top: ${headerHeightProp};
  left: 0;
  width: 100%;
  padding: 12px;
  padding-top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
