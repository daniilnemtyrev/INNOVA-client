/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { EditProfileForm } from './edit-profile-form';
import { useStores } from '../../../hooks/useStore';
import { profileValidSchema } from '../../../shared/schemas/profile-valid-schema';

export interface EditProfileInput {
  surname: string;
  name: string;
  patronymic: string;
  post_status: string;
  request_status?: string;
  place_of_work_stud: string;
  birthdate: string;
  phone: string;
  move_to: string;
  move_from: string;
}

export const EditProfileFormik = () => {
  const { rootStore } = useStores();
  const navigate = useNavigate();
  const { userStore } = rootStore;
  const initialValues: EditProfileInput = {
    surname: userStore.user.surname,
    name: userStore.user.name,
    patronymic: userStore.user.patronymic,
    birthdate: userStore.user.birthdate,
    place_of_work_stud: userStore.user.place_of_work_stud,
    request_status: userStore.user.request_status,
    post_status: userStore.user.post_status,
    phone: userStore.user.phone,
    move_to: userStore.user.move_to,
    move_from: userStore.user.move_from,
  };

  const editUserAsync = async (values: EditProfileInput) => {
    try {
      await userStore.editUser(values);
      navigate('/profile');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validateOnMount
      validateOnChange
      validationSchema={profileValidSchema}
      onSubmit={values => {
        editUserAsync(values);
      }}
      component={formikProps => <EditProfileForm {...formikProps} />}
    />
  );
};
