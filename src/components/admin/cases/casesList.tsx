/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteWithConfirmButton,
} from 'react-admin';

export const CasesList = (props: any) => {
  return (
    <List {...props} title="Кейс-задачи">
      <Datagrid title="Кейс-задачи">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="trackId" />
        <TextField source="description" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};
