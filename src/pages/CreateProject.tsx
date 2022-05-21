import { observer } from 'mobx-react-lite';
import React from 'react';

import styled from 'styled-components';

import { CreateProjectFormik } from '../components/CreateProject/form/create-project-formik';

import { useStores } from '../hooks/useStore';
import { colors } from '../styles/colors/colors';
import { Content } from '../styles/general';

const CreateProject = () => {
  const rootStore = useStores();
  const { projectStore } = rootStore;
  const { project } = projectStore;

  return (
    <Content>
      <CreateProjectFormik />
    </Content>
  );
};

export default observer(CreateProject);
