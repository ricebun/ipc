import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

export const OverviewContainer = styled(Container)`
  &&& {
    width: 100%;
    // height: 100vh;
    box-sizing: border-box;
    // border: 1px solid red;
    padding: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
