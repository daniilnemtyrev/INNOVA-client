import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteWithConfirmButton,
} from 'react-admin';

export const TracksList = (props: any) => {
  return (
    <List {...props} title="Проектные треки">
      <Datagrid title="Проектные треки">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};
