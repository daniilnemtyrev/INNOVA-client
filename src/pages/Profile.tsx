import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/general/header';
import { ProfileCard } from '../components/Profile/profile-card';
import { colors } from '../styles/colors/colors';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${colors.blue[0]};
`;

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <ProfileCard />
      </Container>
    </>
  );
};

export default observer(Profile);
