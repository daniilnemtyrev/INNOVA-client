import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { moveOptions } from '../../UI/select/move-options';
import { colors } from '../../../styles/colors/colors';
import LinkButton from '../../UI/buttons/LinkButton';
import { FormikInput } from '../../UI/inputs/formik-input';
import { FormikSelect } from '../../UI/select/select-formik';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarIcon } from '../../../icons/calendar-icon';
import { format } from 'date-fns';
import { EditProfileInput } from './edit-profile-formik';
import { BackArrow } from '../../../icons/back-arrow';

type Option = {
  value: string;
  label: string;
};

export const Content = styled.div`
  position: relative;
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

const StyledCalendar = styled(Calendar)`
  position: absolute;
  width: 300px;
  top: 30px;
  right: -100px;
  z-index: 2;
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
    font-family: 'Exo 2', sans-serif;
  }
`;

const BackButton = styled(LinkButton)`
  position: absolute;
  top: 20px;
  left: 15px;
  min-width: 40px;
  height: 40px;
  border: none;
  background: none;
  &:hover {
    background-color: transparent;
  }
`;

export const EditProfileForm: FC<FormikProps<EditProfileInput>> = observer(
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

    const [calendarVisible, setCalendarVisible] = useState(false);

    const [calendarDate, setCalendarDate] = useState(new Date());

    const handleOptionChange = (
      selectedOption: any,
      setter: React.Dispatch<React.SetStateAction<string>>,
    ) => {
      setter(selectedOption);
    };

    return (
      <Content>
        <BackButton to="/profile">
          <BackArrow />
        </BackButton>

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
            setCalendarVisible={() => setCalendarVisible(prev => !prev)}
          >
            <CalendarIcon />
          </FormikInput>
          {calendarVisible && (
            <StyledCalendar
              onChange={(e: Date) => {
                values.birthdate = format(e, 'dd.MM.Y');
                setCalendarDate(e);
              }}
              value={calendarDate}
            />
          )}
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
            handleChange={(selectedOption: Option) => {
              handleChange('move_to')(selectedOption.value);
              handleOptionChange(selectedOption, setSelectedMoveTo);
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
            handleChange={(selectedOption: Option) => {
              handleChange('move_from')(selectedOption.value);
              handleOptionChange(selectedOption, setSelectedMoveFrom);
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
