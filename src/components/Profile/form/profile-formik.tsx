import React from 'react';
import { Formik } from 'formik';
import { ProfileForm } from './profile-form';
import { useStores } from '../../../hooks/useStore';
import { profileValidSchema } from '../../../shared/schemas/profile-valid-schema';

export interface ProfileInput {
  surname: string;
  name: string;
  patronymic: string;
  post_status: string;
  place_of_work_stud: string;
  birthdate: string;
  phone: string;
  move_to: string;
  move_from: string;
}

export const ProfileFormik = () => {
  const { rootStore } = useStores();
  const userStore = rootStore.userStore;
  const initialValues: ProfileInput = {
    surname: userStore.user.surname,
    name: userStore.user.name,
    patronymic: userStore.user.patronymic,
    birthdate: userStore.user.birthdate,
    place_of_work_stud: userStore.user.place_of_work_stud,
    post_status: userStore.user.post_status,
    phone: userStore.user.phone,
    move_to: userStore.user.move_to,
    move_from: userStore.user.move_from,
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validateOnMount
      validateOnChange
      validationSchema={profileValidSchema}
      onSubmit={values => {
        console.log(1);

        userStore.editUser(values);
      }}
      component={formikProps => <ProfileForm {...formikProps} />}
    />
  );
};
