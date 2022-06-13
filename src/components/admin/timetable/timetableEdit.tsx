/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  DateTimeInput,
  Edit,
  EditProps,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const TimetableEdit = (props: EditProps) => (
  <Edit {...props} redirect="list" title="Редактирование события">
    <SimpleForm>
      <TextInput source="title" />
      <DateTimeInput source="start" label="Начало" />
      <DateTimeInput source="end" label="Конец" />
    </SimpleForm>
  </Edit>
);
