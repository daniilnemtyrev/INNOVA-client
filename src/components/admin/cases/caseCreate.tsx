import React from 'react';
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const CaseCreate = (props: any) => (
  <Create {...props} resource="cases/create">
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="trackId" reference="tracks">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);
