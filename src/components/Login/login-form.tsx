import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
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

const ErrorText = styled.p`
  color: ${colors.red[0]};
  font-size: 12px;
`;

export const LoginForm: FC<FormikProps<LoginInput>> = observer(
  ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit,
  }) => {
    const { rootStore } = useStores();
    const authStore = rootStore.authStore;
    const loginError = authStore.errorMessage;

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

        <ErrorText>{loginError && loginError}</ErrorText>

        <LinkButton
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
  },
);
