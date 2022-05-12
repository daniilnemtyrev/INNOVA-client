import React from 'react';
import { Formik } from 'formik';
import { LoginForm } from './login-form';

import { loginValidSchema } from '../../shared/schemas/login-valid-schema';
import { useStores } from '../../hooks/useStore';

export interface LoginInput {
  email: string;
  password: string;
}

const initialValues: LoginInput = {
  email: '',
  password: '',
};

export const LoginFormik = () => {
  const { rootStore } = useStores();
  const authStore = rootStore.authStore;
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validateOnMount
      validateOnChange
      validationSchema={loginValidSchema}
      onSubmit={values => {
        authStore.login(values.email, values.password);
      }}
      component={formikProps => <LoginForm {...formikProps} />}
    />
  );
};
