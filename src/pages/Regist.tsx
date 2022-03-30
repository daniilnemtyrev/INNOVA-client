import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Container } from '../styles/auth.module.';
import { Input } from '../components/UI/inputs/Input';
import { Formik } from 'formik';
import LinkButton from '../components/UI/buttons/LinkButton';
import styled from 'styled-components';
import { RegistFormik } from '../components/Regist/regist-formik';

const Regist: FC = () => {
  return (
    <Container>
      <RegistFormik />
    </Container>
  );
};

export default observer(Regist);
