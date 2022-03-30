import React, { useContext } from 'react';
import { Formik } from 'formik';
import { LoginForm } from './login-form';
import { Context } from '../..';
import { loginValidSchema } from '../../schemas/login-valid-schema';

export interface LoginInput {
  email: string;
  password: string;
}

const initialValues: LoginInput = {
  email: '',
  password: '',
};

export const LoginFormik = () => {
  const { store } = useContext(Context);
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validateOnMount
      validateOnChange
      validationSchema={loginValidSchema}
      onSubmit={values => {
        store.login(values.email, values.password);
      }}
      component={formikProps => <LoginForm {...formikProps} />}
    />
  );
};
