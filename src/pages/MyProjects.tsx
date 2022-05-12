import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

import { Header } from '../components/general/header';
import { ProjectsList } from '../components/MyProjects/projects-list';

import { colors } from '../styles/colors/colors';

export const Container = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.blue[0]};
`;

const MyProjects = () => {
  return (
    <>
      <Header />
      <Container>
        <ProjectsList />
      </Container>
    </>
  );
};

export default observer(MyProjects);
