/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Edit,
  EditProps,
  maxValue,
  minValue,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const TrackEdit = (props: EditProps) => (
  <Edit {...props} redirect="list">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput
        source="name"
        label="Название"
        validate={[required('Обязательное поле')]}
        multiline
        fullWidth
      />
      <TextInput
        multiline
        fullWidth
        validate={[required('Обязательное поле')]}
        label="Описание"
        source="description"
      />
    </SimpleForm>
  </Edit>
);
