import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { ProjectsListLoader } from '../Loaders/projects-list-loader';
import { BackButton } from '../UI/buttons/back-button';
import { ListItem } from './list-item';

export const Content = styled.main`
  display: flex;
  width: 650px;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background: linear-gradient(127.44deg, #505050 0%, #383838 100%);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

export const ProjectsList = observer(() => {
  const rootStore = useStores();
  const { userStore } = rootStore;
  const { projectStore } = rootStore;
  const { myProjects } = projectStore;

  useEffect(() => {
    const getProjects = async () => {
      projectStore.setIsLoading(true);
      await projectStore.getProjectsByUserId(userStore.user.id);
      projectStore.setIsLoading(false);
    };

    getProjects();
  }, []);

  return (
    <Content>
      <BackButton to="/profile" />
      {projectStore.isLoading ? (
        <ProjectsListLoader />
      ) : (
        myProjects.map(project => <ListItem name={project.name} />)
      )}
    </Content>
  );
});
