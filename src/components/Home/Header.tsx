import React from 'react';
import styled from 'styled-components';
import { LogoInnova } from '../../icons/logo-innova';
import { colors } from '../../styles/colors/colors';
import LinkButton from '../UI/buttons/LinkButton';

const Container = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: ${colors.purple[0]};
`;

const SignContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const Header = () => {
  return (
    <Container>
      <LogoInnova />
      <SignContainer>
        <LinkButton to="/login">Логин</LinkButton>
        <LinkButton to="/registration">Регистрация</LinkButton>
      </SignContainer>
    </Container>
  );
};
