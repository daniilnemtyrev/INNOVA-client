import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { OptionsModal } from '../Home/options-modal';
import { ButtonWithoutStyles } from '../UI/buttons/button-without-styles';
import LinkButton from '../UI/buttons/link-button';
import logo from '../../icons/logo_innova_2.png';

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
    ${colors.blue[4]} 0%,
    ${colors.blue[3]} 100%
  );
`;

const SignContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

const UserText = styled.p`
  font-family: 'Source Sans Pro' sans-serif;
  font-size: 25px;
  color: ${colors.grey[2]};
`;

const LogoInnova2 = styled.img`
  width: 100px;
  height: 90px;
`;

export const Header = observer(() => {
  const [visibleOptions, setVisibleOptions] = useState(false);
  const { rootStore } = useStores();
  const userStore = rootStore.userStore;
  const authStore = rootStore.authStore;

  return (
    <Container>
      <LogoInnova2 src={logo} />
      <SignContainer>
        {userStore.user.name && authStore.IsAuth ? (
          <>
            <ButtonWithoutStyles
              color={colors.white[0]}
              onClick={() => setVisibleOptions(prev => !prev)}
            >{`${userStore.user.name}  ${userStore.user.surname}`}</ButtonWithoutStyles>
          </>
        ) : (
          <>
            <LinkButton to="/login">Логин</LinkButton>
            <LinkButton to="/registration">Регистрация</LinkButton>
          </>
        )}
        <OptionsModal
          visible={visibleOptions}
          setVisibleOptions={setVisibleOptions}
        />
      </SignContainer>
    </Container>
  );
});
