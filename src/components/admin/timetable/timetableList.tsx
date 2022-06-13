/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteWithConfirmButton,
  ListProps,
  DateField,
} from 'react-admin';

export const TimetableList = (props: ListProps) => {
  return (
    <List {...props} title="Расписание">
      <Datagrid title="Расписание">
        <TextField source="id" />
        <TextField source="title" label="Название" />
        <DateField source="start" label="Начало" showTime />
        <DateField source="end" label="Конец" showTime />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};
