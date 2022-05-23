/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Edit,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const CaseEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <ReferenceInput source="trackId" reference="tracks">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
