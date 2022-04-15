import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Header } from '../components/general/Header';
import styled from 'styled-components';
import { colors } from '../styles/colors/colors';
import { EditProfileFormik } from '../components/EditProfile/form/edit-profile-formik';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${colors.blue[0]};
`;

const EditProfile: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <EditProfileFormik />
      </Container>
    </>
  );
};

export default observer(EditProfile);
