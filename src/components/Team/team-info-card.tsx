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
  justify-content: space-around;
  grid-column: 2/3;
  grid-row: 1/2;
  background-color: ${colors.grey[6]};
  margin-bottom: 20px;
  padding: 0px 10px;
`;

const NameContainer = styled.div`
  display: flex;

  align-items: center;
  margin-bottom: 15px;
`;

const Name = styled.p`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
  margin-right: 10px;
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
  const { teamStore } = rootStore;

  // const updateRequestStatus = async () => {
  //   const data = {
  //     id: userStore.user.id,
  //     reqStatus: 'Ожидается подтверждение',
  //   };
  //   await userStore.updateRequestStatus(data);
  // };

  return (
    <Content>
      <NameContainer>
        <Name>Код команды:</Name>
        <Name>{teamStore.team.name}</Name>
      </NameContainer>

      <ButtonsGroup>
        <Link to="/profile/tracks">
          <Button>Создать проект</Button>
        </Link>
      </ButtonsGroup>
    </Content>
  );
});
