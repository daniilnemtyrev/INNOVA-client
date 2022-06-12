import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { SettingsIcon } from '../../icons/settings-icon';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';
import { SendRequestButton } from './ui/send-request-button';

const Content = styled.div`
  display: flex;
  flex-direction: column;

  grid-column: 2/3;
  grid-row: 1/2;
  background-color: ${colors.grey[6]};
  margin-bottom: 20px;
  padding: 10px 10px;
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
  margin-bottom: 10px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProfileInfoCard = observer(() => {
  const rootStore = useStores();
  const { userStore, teamStore } = rootStore;
  console.log(toJS(userStore.user));

  const fioStr = `${userStore.user.surname}  ${userStore.user.name}  ${userStore.user.patronymic}`;

  const updateRequestStatus = async () => {
    const data = {
      id: userStore.user.id,
      reqStatus: 'Ожидается подтверждение',
    };
    await userStore.updateRequestStatus(data);
  };

  return (
    <Content>
      <NameContainer>
        <Name>{fioStr}</Name>
        <Link to="/profile/edit">
          <SettingsIcon />
        </Link>
      </NameContainer>

      <Status>{`Статус пользователя: ${userStore.user.request_status}`}</Status>

      <SendRequestButton
        status={userStore.user.request_status}
        profileFilled={userStore.profileIsFilled}
        onClick={updateRequestStatus}
      />

      {userStore.user.request_status === 'Подтвержден' && (
        <ButtonsGroup>
          {!userStore.user.team && userStore.user.teamId && (
            <Status>Команда: {teamStore.team.name}</Status>
          )}

          {userStore.user.team && (
            <Status>Команда: {userStore.user.team.name}</Status>
          )}
          {!userStore.user.teamId && (
            <>
              <Status>Без команды</Status>
              <Link to="/profile/createTeam">
                <Button>Создать команду</Button>
              </Link>
            </>
          )}
        </ButtonsGroup>
      )}
    </Content>
  );
});
