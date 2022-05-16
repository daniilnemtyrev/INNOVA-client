import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useStores } from '../../hooks/useStore';
import { colors } from '../../styles/colors/colors';
import { Button } from '../UI/buttons/button-base';
import { FormikInput } from '../UI/inputs/formik-input';
import { LoginInput } from './login-formik';

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
    const rootStore = useStores();
    const { authStore } = rootStore;
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
        <ButtonsGroup>
          <Button
            type="submit"
            disabled={!isValid}
            onClick={() => {
              handleSubmit();
            }}
          >
            Войти
          </Button>
        </ButtonsGroup>
      </Content>
    );
  },
);
