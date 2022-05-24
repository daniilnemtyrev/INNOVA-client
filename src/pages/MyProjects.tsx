import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

import { ProjectsMain } from '../components/MyProjects/projects-main';

import { Content } from '../styles/general';

const MyProjects = () => {
  return (
    <Content>
      <ProjectsMain />
    </Content>
  );
};

export default observer(MyProjects);
