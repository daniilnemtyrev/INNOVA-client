import { FormikProps } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';
import { FormikInput } from '../UI/inputs/formik-input';
import { RegistInput } from './regist-formik';

export const Content = styled.div`
  display: flex;
  width: 650px;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background: linear-gradient(127.44deg, #505050 0%, #383838 100%);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

const ButtonsGroup = styled.div`
  display: flex;
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

      <ButtonsGroup>
        <Button
          type={'submit'}
          disabled={!isValid}
          onClick={() => {
            handleSubmit();
          }}
        >
          Зарегистрироваться
        </Button>
      </ButtonsGroup>
    </Content>
  );
};
function useStore(rootStore: any) {
  throw new Error('Function not implemented.');
}
