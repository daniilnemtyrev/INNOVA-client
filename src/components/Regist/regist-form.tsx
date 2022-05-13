import { FormikProps } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';
import { FormikInput } from '../UI/inputs/formik-input';
import { RegistInput } from './regist-formik';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
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
        value={values.surname}
        name={'surname'}
        type={'text'}
        placeholder="Фамилия"
        error={errors.surname}
        touched={touched.surname}
        handleChange={handleChange('surname')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.name}
        name={'name'}
        type={'text'}
        placeholder="Имя"
        error={errors.name}
        touched={touched.name}
        handleChange={handleChange('name')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.patronymic}
        name={'patronymic'}
        type={'text'}
        placeholder="Отчество"
        error={errors.patronymic}
        touched={touched.patronymic}
        handleChange={handleChange('patronymic')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.birthdate}
        name={'birthdate'}
        type={'text'}
        placeholder="Дата рождения"
        error={errors.birthdate}
        touched={touched.birthdate}
        handleChange={handleChange('birthdate')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.email}
        name={'email'}
        type={'text'}
        placeholder="E-mail"
        error={errors.email}
        touched={touched.email}
        handleChange={handleChange('email')}
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

      {/* <LinkButton
        type={'submit'}
        disabled={!isValid}
        onClick={() => {
          handleSubmit();
        }}
      >
        Зарегестрироваться
      </LinkButton> */}
    </Content>
  );
};
function useStore(rootStore: any) {
  throw new Error('Function not implemented.');
}
