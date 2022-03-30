import { FormikProps } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import LinkButton from '../UI/buttons/LinkButton';
import { FormikInput } from '../UI/inputs/formik-input';
import { RegistInput } from './regist-formik';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  max-width: 320px;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

export const RegistForm: FC<FormikProps<RegistInput>> = ({
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
        value={values.email}
        name={'email'}
        type={'text'}
        placeholder="Email"
        error={errors.email}
        touched={touched.email}
        handleChange={handleChange('email')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.name}
        name={'name'}
        type={'text'}
        placeholder="Name"
        error={errors.name}
        touched={touched.name}
        handleChange={handleChange('name')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.password}
        name={'password'}
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
        Зарегестрироваться
      </LinkButton>
    </Content>
  );
};
