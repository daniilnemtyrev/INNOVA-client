/* eslint-disable react/jsx-no-useless-fragment */
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStore';
import { ICase } from '../../../models/ICase';
import { colors } from '../../../styles/colors/colors';
import { GridLoader } from '../../Loaders/grid-loader';
import { BackButton } from '../../UI/buttons/back-button';
import { GridCard } from '../../general/ui/grid-card';

export const Content = styled.main`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: transparent;
`;

const NoCases = styled.span`
  font-size: 26px;
  font-weight: 500;
  color: ${colors.white[0]};
  font-family: 'Montserrat', sans-serif;
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

  useEffect(() => {
    projectStore.setIsLoading(true);
    const getCases = async () => {
      projectStore.setIsLoading(true);
      await projectStore.getCasesByTrackId(projectStore.project.trackId);
      projectStore.setIsLoading(false);
    };
    getCases();
  }, []);

  return (
    <Content>
      {projectStore.isLoading ? (
        <GridLoader />
      ) : (
        <>
          {cases.length > 0 &&
            cases.map(casess => {
              const data = {
                id: casess.id,
                name: casess.name,
                description: casess.description,
              };
              return (
                <GridCard
                  to="/profile/tracks/cases/create"
                  onClick={() => chooseCase(data)}
                  name={casess.name}
                  description={casess.description}
                />
              );
            })}

          {cases.length === 0 && (
            <NoCases>Кейс задачи отсутсвуют \(o_o)/</NoCases>
          )}
        </>
      )}
    </Content>
  );
});
