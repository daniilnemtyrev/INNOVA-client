import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: height: calc(100vh - 120px);;
  grid-columns: 2/3;
  grid-row: 2/3;
  background: transparent;
`;

export const Main = () => {
  return <Container></Container>;
};
