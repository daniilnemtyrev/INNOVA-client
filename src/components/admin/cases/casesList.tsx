/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteWithConfirmButton,
  ListProps,
} from 'react-admin';

export const CasesList = (props: ListProps) => {
  return (
    <List {...props} title="Кейс-задачи">
      <Datagrid title="Кейс-задачи">
        <TextField source="id" />
        <TextField source="name" label="Название" />
        <TextField source="trackId" label="Проектный трек" textAlign="center" />
        <TextField source="description" label="Описание" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};
