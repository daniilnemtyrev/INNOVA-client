/* eslint-disable no-param-reassign */
import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { moveOptions } from '../../UI/select/move-options';

import { FormikInput } from '../../UI/inputs/formik-input';

import 'react-calendar/dist/Calendar.css';
import { CalendarIcon } from '../../../icons/calendar-icon';
import { EditProfileInput } from './edit-profile-formik';
import { BackButton } from '../../UI/buttons/back-button';
import { Button } from '../../UI/buttons/button-base';
import { SelectBase } from '../../UI/select/select-basic';

type Option = {
  value: string;
  label: string;
};

export const Content = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
  background: linear-gradient(127.44deg, #505050 0%, #383838 100%);
  padding: 25px;
  border-radius: 10px;
`;

const StyledCalendar = styled(Calendar)`
  position: absolute;
  width: 300px;
  top: 30px;
  right: -100px;
  z-index: 2;
`;

const Row = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditProfileForm: FC<FormikProps<EditProfileInput>> = ({
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
      <FormikInput
        value={values.surname}
        name="surname"
        type="text"
        placeholder="Фамилия"
        error={errors.surname}
        touched={touched.surname}
        handleChange={handleChange('surname')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.name}
        name="name"
        type="text"
        placeholder="Имя"
        error={errors.name}
        touched={touched.name}
        handleChange={handleChange('name')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.patronymic}
        name="patronymic"
        type="text"
        placeholder="Отчество"
        error={errors.patronymic}
        touched={touched.patronymic}
        handleChange={handleChange('patronymic')}
        handleBlur={handleBlur}
      />

      <Row>
        <FormikInput
          value={values.birthdate}
          name="birthdate"
          type="text"
          placeholder="Дата рождения"
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

      <FormikInput
        value={values.place_of_work_stud}
        name="place_of_work_stud"
        type="text"
        placeholder="Место работы / учебы"
        error={errors.place_of_work_stud}
        touched={touched.place_of_work_stud}
        handleChange={handleChange('place_of_work_stud')}
        handleBlur={handleBlur}
      />

      <FormikInput
        value={values.post_status}
        name="post_status"
        type="text"
        placeholder="Должность / Статус"
        error={errors.post_status}
        touched={touched.post_status}
        handleChange={handleChange('post_status')}
        handleBlur={handleBlur}
      />

      <SelectBase
        value={selectedMoveTo}
        name="move_to"
        error={errors.move_to}
        onChange={(selectedOption: Option) => {
          handleChange('move_to')(selectedOption.value);
          handleOptionChange(selectedOption, setSelectedMoveTo);
        }}
        placeholder={values.move_to ? values.move_to : 'Способ приезда'}
        options={moveOptions}
      />

      <SelectBase
        value={selectedMoveFrom}
        name="move_from"
        error={errors.move_from}
        onChange={(selectedOption: Option) => {
          handleChange('move_from')(selectedOption.value);
          handleOptionChange(selectedOption, setSelectedMoveFrom);
        }}
        options={moveOptions}
        placeholder={values.move_from ? values.move_from : 'Способ отъезда'}
      />

      <FormikInput
        value={values.phone}
        name="phone"
        type="text"
        placeholder="Номер телефона"
        error={errors.phone}
        touched={touched.phone}
        handleChange={handleChange('phone')}
        handleBlur={handleBlur}
      />

      <Link to="/profile">
        <Button
          type="submit"
          disabled={!isValid}
          onClick={() => {
            handleSubmit();
          }}
        >
          Сохранить
        </Button>
      </Link>
    </Content>
  );
};
