/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Edit,
  EditProps,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const CaseEdit = (props: EditProps) => (
  <Edit {...props} redirect="list">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput fullWidth source="name" />
      <ReferenceInput source="trackId" reference="tracks">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput multiline fullWidth source="description" />
    </SimpleForm>
  </Edit>
);
