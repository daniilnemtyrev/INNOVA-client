import React from 'react';
import styled from 'styled-components';
import { News } from '../News/news';
import { Sponsors } from './Sponsors';
import { Organizator } from './Organizator';

const Main = styled.main`
  width: 100%;
  background: transparent;
`;

export const HomeMain = () => {
  return (
    <Main>
      <News />
      <Organizator />
      <Sponsors />
    </Main>
  );
};
