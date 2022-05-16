import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { ICase } from '../../models/ICase';
import { colors } from '../../styles/colors/colors';
import { GridLoader } from '../Loaders/grid-loader';
import { BackButton } from '../UI/buttons/back-button';
import { GridCard } from './grid-card';

export const Content = styled.main`
  position: relative;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${colors.grey[0]};
  padding: 25px 100px 25px 100px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

const NoCases = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  &:first-child {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Exo 2', sans-serif;
  }
`;

export const CasesGrid = observer(() => {
  const rootStore = useStores();
  const { projectStore } = rootStore;
  const { cases } = projectStore;

  const chooseCase = ({ id, name, description }: ICase) => {
    projectStore.project.caseId = id;
    projectStore.project.caseName = name;
    projectStore.project.caseDescription = description;
  };

  const onBack = () => {
    projectStore.project.trackId = null;
  };

  useEffect(() => {
    if (cases.length < 1) {
      projectStore.setIsLoading(true);
      const getCases = async () => {
        projectStore.setIsLoading(true);
        await projectStore.getCasesByTrackId(projectStore.project.trackId);
        projectStore.setIsLoading(false);
      };
      getCases();
    }
  }, []);

  return (
    <Content>
      {projectStore.isLoading ? (
        <>
          <BackButton onClick={onBack} />
          <GridLoader />
        </>
      ) : (
        <>
          <BackButton onClick={onBack} />
          {cases.length ? (
            cases.map(casess => {
              const data = {
                id: casess.id,
                name: casess.name,
                description: casess.description,
              };
              return (
                <GridCard onClick={() => chooseCase(data)} name={casess.name} />
              );
            })
          ) : (
            <NoCases>Кейс задачи отсутсвуют</NoCases>
          )}
        </>
      )}
    </Content>
  );
});
