import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

import { ProjectsMain } from '../components/MyProjects/projects-main';

import { Content } from '../styles/general';

const StyledContent = styled(Content)`
  flex-direction: column;
  align-items: flex-start;
`;

const MyProjects = () => {
  return (
    <StyledContent>
      <ProjectsMain />
    </StyledContent>
  );
};

export default observer(MyProjects);
