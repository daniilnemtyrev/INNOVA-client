import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Context } from '../..';
import { RegistForm } from './regist-form';
import { registValidSchema } from '../../schemas/regist-valid-schema';

export interface RegistInput {
  name: string;
  email: string;
  password: string;
}

const initialValues: RegistInput = {
  name: '',
  email: '',
  password: '',
};

export const RegistFormik = () => {
  const { store } = useContext(Context);
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validateOnMount
      validateOnChange
      validationSchema={registValidSchema}
      onSubmit={values => {
        store.registration(values.email, values.name, values.password);
      }}
      component={formikProps => <RegistForm {...formikProps} />}
    />
  );
};
