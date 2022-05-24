import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { CreateProjectMain } from '../components/CreateProject/create-project-main';
import { PageHeader } from '../components/general/ui/page-header';

import { Content } from '../styles/general';

const CreateProject = () => {
  return (
    <Content>
      <PageHeader label="Создайте Ваш проект" />
      <CreateProjectMain />
    </Content>
  );
};

export default observer(CreateProject);
