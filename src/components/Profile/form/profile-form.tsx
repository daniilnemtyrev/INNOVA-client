import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors/colors';
import LinkButton from '../../UI/buttons/LinkButton';
import { FormikInput } from '../../UI/inputs/formik-input';
import { ProfileInput } from './profile-formik';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
`;

export const ProfileForm: FC<FormikProps<ProfileInput>> = observer(
  ({
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
          placeholder={'Фамилия'}
          error={errors.surname}
          touched={touched.surname}
          handleChange={handleChange('surname')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.name}
          name={'name'}
          type={'text'}
          placeholder={'Имя'}
          error={errors.name}
          touched={touched.name}
          handleChange={handleChange('name')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.patronymic}
          name={'patronymic'}
          type={'text'}
          placeholder={'Отчество'}
          error={errors.patronymic}
          touched={touched.patronymic}
          handleChange={handleChange('patronymic')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.birthdate}
          name={'birthdate'}
          type={'text'}
          placeholder={'Дата рождения'}
          error={errors.birthdate}
          touched={touched.birthdate}
          handleChange={handleChange('birthdate')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.place_of_work_stud}
          name={'place_of_work_stud'}
          type={'text'}
          placeholder={'Место работы / учебы'}
          error={errors.place_of_work_stud}
          touched={touched.place_of_work_stud}
          handleChange={handleChange('place_of_work_stud')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.post_status}
          name={'post_status'}
          type={'text'}
          placeholder={'Должность / Статус'}
          error={errors.post_status}
          touched={touched.post_status}
          handleChange={handleChange('post_status')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.move_to}
          name={'move_to'}
          type={'text'}
          placeholder={'Способ приезда'}
          error={errors.move_to}
          touched={touched.move_to}
          handleChange={handleChange('move_to')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.move_from}
          name={'move_from'}
          type={'text'}
          placeholder={'Способ приезда'}
          error={errors.move_from}
          touched={touched.move_from}
          handleChange={handleChange('move_from')}
          handleBlur={handleBlur}
        />

        <FormikInput
          value={values.phone}
          name={'phone'}
          type={'text'}
          placeholder={'Номер телефона'}
          error={errors.phone}
          touched={touched.phone}
          handleChange={handleChange('phone')}
          handleBlur={handleBlur}
        />

        <LinkButton
          type={'submit'}
          disabled={!isValid}
          onClick={() => {
            handleSubmit();
          }}
        >
          Сохранить
        </LinkButton>
      </Content>
    );
  },
);
