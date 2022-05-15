import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { SettingsIcon } from '../../icons/settings-icon';
import { UserIcon } from '../../icons/user-icon';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';

export const Content = styled.main`
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

const UserInfo = styled.div`
  display: flex;
`;

const GeneralInfo = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  margin-right: 10px;
`;

const Email = styled.p`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`;

const Advice = styled.div`
  width: 75%;
  background-color: ${colors.white[0]};
  border-radius: 2px;
  padding: 10px 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
  margin-bottom: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

// const SettingsButton = styled(LinkButton)`
//   min-width: 20px;
//   margin: 0;
//   height: 20px;
//   border: none;
//   background: none;
// `;

const LabelText = styled(Email)``;

export const ProfileCard = observer(() => {
  const { rootStore } = useStores();
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
      <UserInfo>
        <UserIcon />
        <GeneralInfo>
          <NameContainer>
            <Name>{fioStr}</Name>
            {/* <SettingsButton to="/profile/edit">
              <SettingsIcon />
            </SettingsButton> */}
          </NameContainer>

          <Email>{`e-mail: ${userStore.user.email}`}</Email>
          <LabelText>{`Статус пользователя: ${userStore.user.request_status}`}</LabelText>
        </GeneralInfo>
      </UserInfo>
      {userStore.user.request_status === 'Не подтвержден' && (
        <>
          <Advice>
            <LabelText>
              Для участия в форуме Вам нужно заполнить профиль и отправить
              заявку
            </LabelText>
          </Advice>
          <Button
            disabled={!userStore.profileIsFilled}
            onClick={updateRequestStatus}
          >
            Отправить заявку
          </Button>
        </>
      )}
      {/* {userStore.user.request_status === 'Подтвержден' && (
        <LinkButton to="/profile/myProject">Мои проекты</LinkButton>
      )}

      {userStore.user.request_status === 'Подтвержден' && (
        <LinkButton to="/profile/createProject">Создать проект</LinkButton>
      )} */}
    </Content>
  );
});
