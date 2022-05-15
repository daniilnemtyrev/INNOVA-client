/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Formik } from 'formik';
import { RegistForm } from './regist-form';
import { registValidSchema } from '../../shared/schemas/regist-valid-schema';
import { useStores } from '../../hooks/useStore';

export interface RegistInput {
  surname: string;
  name: string;
  patronymic: string;
  birthdate: string;
  email: string;
  password: string;
}

const initialValues: RegistInput = {
  surname: '',
  name: '',
  patronymic: '',
  birthdate: '',
  email: '',
  password: '',
};

export const RegistFormik = () => {
  const { rootStore } = useStores();
  const { authStore } = rootStore;
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validateOnMount
      validateOnChange
      validationSchema={registValidSchema}
      onSubmit={values => {
        authStore.registration(values);
      }}
      component={formikProps => <RegistForm {...formikProps} />}
    />
  );
};
