import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 120px);
  grid-column: 2/3;
  grid-row: 2/3;
  background: transparent;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 120px);
  background: transparent;
`;
