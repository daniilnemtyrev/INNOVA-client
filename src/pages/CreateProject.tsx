import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CasesGrid } from '../components/CreateProject/cases-grid';
import { CreateProjectFormik } from '../components/CreateProject/form/create-project-formik';
import { TracksGrid } from '../components/CreateProject/tracks-grid';
import { Header } from '../components/general/header';
import { useStores } from '../hooks/useStore';
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

const CreateProject = () => {
  const { rootStore } = useStores();
  const projectStore = rootStore.projectStore;
  const project = projectStore.project;
  console.log(project.trackId);

  useEffect(() => {
    return () => {
      projectStore.project.trackId = null;
      projectStore.project.caseId = null;
    };
  }, []);

  return (
    <>
      <Header />
      <Container>
        {!project.trackId && <TracksGrid />}
        {!project.caseId && project.trackId && <CasesGrid />}
        {project.caseId && project.trackId && <CreateProjectFormik />}
      </Container>
    </>
  );
};

export default observer(CreateProject);
