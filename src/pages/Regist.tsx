import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { RegistFormik } from '../components/Regist/regist-formik';
import { Header } from '../components/general/Header';
import styled from 'styled-components';
import { colors } from '../styles/colors/colors';

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

const Regist: FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <RegistFormik />
      </Content>
    </Container>
  );
};

export default observer(Regist);
