import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { CreateProjectMain } from '../components/CreateProject/create-project-main';
import { PageHeader } from '../components/general/ui/page-header';

import { Content } from '../styles/general';

const StyledContent = styled(Content)`
  flex-direction: column;
  align-items: flex-start;
`;

const CreateProject = () => {
  return (
    <StyledContent>
      <PageHeader label="Создайте Ваш проект" />
      <CreateProjectMain />
    </StyledContent>
  );
};

export default observer(CreateProject);
