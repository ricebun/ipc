import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 18px 12px 12px;
  margin-bottom: 12px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff; // white
  text-align: center;
  border-bottom: 1px solid #eef2f5; // slate10
  background: #003d7c; // duke blue
  // box shadow TODO
`;

export const BackArrowWrapper = styled.div`
  position: absolute;
  left: 12px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;
