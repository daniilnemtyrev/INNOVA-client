import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { LogoInnova } from '../../icons/logo-innova';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/Button';
import LinkButton from '../UI/buttons/LinkButton';

const Container = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  box-shadow: 0px 0px 5px 0px rgba(122, 122, 122, 0.2);
  background: linear-gradient(
    to right,
    ${colors.blue[0]} 0%,
    ${colors.blue[1]} 60%,
    ${colors.blue[0]} 100%
  );
`;

const SignContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

export const Header = observer(() => {
  const { rootStore } = useStores();
  const userStore = rootStore.userStore;
  const authStore = rootStore.authStore;
  console.log(toJS(userStore.user));
  console.log(Boolean(userStore.user));

  const logout = async () => {
    await authStore.logout();
  };

  return (
    <Container>
      <LogoInnova />
      <SignContainer>
        {userStore.user.name && authStore.IsAuth ? (
          <>
            <p>{userStore.user.name}</p>
            <Button onClick={logout}>Выйти</Button>
          </>
        ) : (
          <>
            <LinkButton to="/login">Логин</LinkButton>
            <LinkButton to="/registration">Регистрация</LinkButton>
          </>
        )}
      </SignContainer>
    </Container>
  );
});
