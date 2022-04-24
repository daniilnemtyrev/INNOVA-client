import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { ProjectsListLoader } from '../Loaders/projects-list-loader';
import { BackButton } from '../UI/buttons/back-button';
import { ListItem } from './list-item';

export const Content = styled.main`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  min-height: 190px;
  background-color: ${colors.grey[0]};
  padding: 25px 100px 25px 100px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

export const ProjectsList = observer(() => {
  const { rootStore } = useStores();
  const userStore = rootStore.userStore;
  const projectStore = rootStore.projectStore;
  const myProjects = projectStore.myProjects;

  useEffect(() => {
    const getProjects = async () => {
      projectStore.setIsLoading(true);
      await projectStore.getProjectsByUserId(userStore.user.userId);
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
