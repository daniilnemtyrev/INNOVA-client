import React from 'react';
import styled from 'styled-components';
import { Main } from '../../styles/general';
import { ProjectsList } from './projects-list';
import { TaskList } from './tasksList';

export const ProjectsMain = () => {
  return (
    <Main>
      <Container>
        <ProjectsList />
        <TaskList />
      </Container>
    </Main>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
