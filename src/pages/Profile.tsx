import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { LoginFormik } from '../components/Login/login-formik';
import { Header } from '../components/general/Header';
import styled from 'styled-components';
import { colors } from '../styles/colors/colors';
import { ProfileFormik } from '../components/Profile/form/profile-formik';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${colors.blue[0]};
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`;

const Profile: FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ProfileFormik />
      </Content>
    </Container>
  );
};

export default observer(Profile);
