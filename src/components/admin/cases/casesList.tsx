/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteWithConfirmButton,
  ListProps,
  ReferenceField,
} from 'react-admin';

export const CasesList = (props: ListProps) => {
  return (
    <List {...props} title="Кейс-задачи">
      <Datagrid title="Кейс-задачи">
        <TextField source="id" />
        <TextField source="name" label="Название" />
        <ReferenceField
          source="trackId"
          reference="tracks"
          label="Проектный трек"
        >
          <TextField source="name" />
        </ReferenceField>
        <TextField
          sx={{
            display: 'block',
            height: 100,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          source="description"
          label="Описание"
        />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};
