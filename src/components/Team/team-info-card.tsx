import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/3;
  grid-row: 1/2;
  background-color: ${colors.grey[6]};
  margin-bottom: 20px;
  padding: 10px 10px;
`;

const Name = styled.span`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  margin-bottom: 15px;
`;

const Status = styled.span`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
`;

const ButtonsGroup = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const TeamInfoCard = observer(() => {
  const rootStore = useStores();
  const { teamStore, projectStore, userStore } = rootStore;

  // const updateRequestStatus = async () => {
  //   const data = {
  //     id: userStore.user.id,
  //     reqStatus: 'Ожидается подтверждение',
  //   };
  //   await userStore.updateRequestStatus(data);
  // };

  return (
    <Content>
      <Name>Код команды: {teamStore.team.name}</Name>

      <ButtonsGroup>
        {!teamStore.team.project && projectStore.project.name && (
          <Status>Проект: {projectStore.project.name}</Status>
        )}

        {teamStore.team.project && (
          <Status>Проект: {teamStore.team.project.name}</Status>
        )}

        {!userStore.user.projectId && (
          <Link to="/profile/tracks">
            <Button>Создать проект</Button>
          </Link>
        )}
      </ButtonsGroup>
    </Content>
  );
});
