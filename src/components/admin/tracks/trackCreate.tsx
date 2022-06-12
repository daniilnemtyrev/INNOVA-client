/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Create,
  CreateProps,
  maxValue,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const TrackCreate = (props: CreateProps) => (
  <Create {...props} title="Создание проектного трека">
    <SimpleForm>
      <TextInput
        source="name"
        label="Название"
        validate={[
          required('Обязательное поле'),
          maxValue(80, 'Не должно превышать 80 символов'),
        ]}
      />
      <TextInput
        multiline
        source="description"
        validate={[required('Обязательное поле')]}
        label="Описание"
        style={{ width: '50vw' }}
      />
    </SimpleForm>
  </Create>
);
