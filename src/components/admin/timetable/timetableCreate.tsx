/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Create,
  CreateProps,
  DateTimeInput,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const TimetableCreate = (props: CreateProps) => (
  <Create {...props} title="Добавление события" redirect="list">
    <SimpleForm>
      <TextInput
        validate={[required('Обязательное поле')]}
        source="title"
        label="Название"
      />
      <DateTimeInput
        validate={[required('Обязательное поле')]}
        source="start"
        label="Начало"
      />
      <DateTimeInput source="end" label="Конец" />
    </SimpleForm>
  </Create>
);
