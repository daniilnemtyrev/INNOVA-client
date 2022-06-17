/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Create,
  CreateProps,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const CaseCreate = (props: CreateProps) => (
  <Create {...props} title="Создание кейс-задачи" redirect="list">
    <SimpleForm>
      <TextInput fullWidth source="name" />
      <ReferenceInput source="trackId" reference="tracks">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput fullWidth multiline source="description" />
    </SimpleForm>
  </Create>
);
