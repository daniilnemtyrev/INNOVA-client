import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { SettingsIcon } from '../../icons/settings-icon';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-columns: 2/3;
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

const Status = styled.p`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white[0]};
`;

const Advice = styled.div``;

const Text = styled(Status)`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const ProfileInfoCard = observer(() => {
  const rootStore = useStores();
  const { userStore } = rootStore;
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

      {userStore.user.request_status === 'Не подтвержден' && (
        <Advice>
          {!userStore.profileIsFilled && (
            <Text>
              * для участия в форуме Вам нужно заполнить профиль и отправить
              заявку
            </Text>
          )}

          <Button
            disabled={!userStore.profileIsFilled}
            onClick={updateRequestStatus}
          >
            Отправить заявку
          </Button>
        </Advice>
      )}

      <Link to="/profile/tracks">
        <Button>Создать проект</Button>
      </Link>
    </Content>
  );
});
