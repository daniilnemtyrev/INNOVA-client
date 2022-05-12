import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const TrackCreate = (props: any) => (
  <Create {...props} resource="tracks/create">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);
