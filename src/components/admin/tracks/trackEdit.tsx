/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const TrackEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
