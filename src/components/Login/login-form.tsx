import { FormikProps } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';
import LinkButton from '../UI/buttons/LinkButton';
import { FormikInput } from '../UI/inputs/formik-input';
import { LoginInput } from './login-formik';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background-color: ${colors.white[0]};
  padding: 25px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

export const LoginForm: FC<FormikProps<LoginInput>> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isValid,
  handleSubmit,
}) => {
  return (
    <Content>
      <FormikInput
        value={values?.email}
        name="email"
        type="text"
        placeholder="Email"
        error={errors?.email}
        touched={touched.email}
        handleChange={handleChange('email')}
        handleBlur={handleBlur}
      />
      <FormikInput
        value={values.password}
        name="password"
        type="password"
        placeholder="Password"
        error={errors.password}
        touched={touched.password}
        handleChange={handleChange('password')}
        handleBlur={handleBlur}
      />

      <LinkButton
        to="/chat"
        type={'submit'}
        disabled={!isValid}
        onClick={() => {
          handleSubmit();
        }}
      >
        Вход
      </LinkButton>
    </Content>
  );
};
