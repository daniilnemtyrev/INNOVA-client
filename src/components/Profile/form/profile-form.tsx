import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { moveOptions } from '../../UI/select/move-options';
import { colors } from '../../../styles/colors/colors';
import LinkButton from '../../UI/buttons/LinkButton';
import { FormikInput } from '../../UI/inputs/formik-input';
import { FormikSelect } from '../../UI/select/select-formik';
import { ProfileInput } from './profile-formik';

type Option = {
  value: string;
  label: string;
};

export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background-color: ${colors.grey[0]};
  padding: 25px 100px 25px 100px;
  border-radius: 10px;
  border: 1px solid ${colors.blue[1]};
  box-shadow: 0 0 2px rgba(194, 195, 197);
  align-items: center;
`;

const Row = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelInput = styled.div`
  position: absolute;
  top: 10px;
  left: -120px;
  min-height: 40px;
  &p {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Source Sans Pro', sans-serif;
  }
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
    const [selectedMoveTo, setSelectedMoveTo] = useState(
      values.move_to ? values.move_to : '',
    );
    const [selectedMoveFrom, setSelectedMoveFrom] = useState(
      values.move_from ? values.move_from : '',
    );
    const handleOptionChange = (
      selectedOption: any,
      value: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
    ) => {
      value = selectedOption.value;
      setter(selectedOption);
    };
    return (
      <Content>
        <Row>
          <LabelInput>Фамилия</LabelInput>
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
        </Row>

        <Row>
          <LabelInput>Имя</LabelInput>
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
        </Row>
        <Row>
          <LabelInput>Отчество</LabelInput>
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
        </Row>
        <Row>
          <LabelInput>Дата рождения</LabelInput>
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
        </Row>
        <Row>
          <LabelInput>Место работы / учебы</LabelInput>
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
        </Row>
        <Row>
          <LabelInput>Должность / Статус</LabelInput>
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
        </Row>

        <Row>
          <LabelInput>Способ приезда</LabelInput>
          <FormikSelect
            value={selectedMoveTo}
            name={'move_to'}
            error={errors.move_to}
            touched={touched.move_to}
            handleChange={(selectedOption: Option) => {
              handleChange('move_to')(selectedOption.value);
              handleOptionChange(
                selectedOption,
                values.move_to,
                setSelectedMoveTo,
              );
            }}
            placeholder={values.move_to ? values.move_to : 'Способ приезда'}
            options={moveOptions}
          />
        </Row>

        <Row>
          <LabelInput>Способ отъезда</LabelInput>
          <FormikSelect
            value={selectedMoveFrom}
            name={'move_from'}
            error={errors.move_from}
            touched={touched.move_from}
            handleChange={(selectedOption: Option) => {
              handleChange('move_from')(selectedOption.value);
              handleOptionChange(
                selectedOption,
                values.move_from,
                setSelectedMoveFrom,
              );
            }}
            options={moveOptions}
            placeholder={values.move_from ? values.move_from : 'Способ отъезда'}
          />
        </Row>

        <Row>
          <LabelInput>Номер телефона</LabelInput>
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
        </Row>

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
