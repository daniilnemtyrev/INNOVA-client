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
  const authStore = rootStore.authStore;
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
