import React from 'react';
import { List, Datagrid, TextField, ListProps } from 'react-admin';
import { AcceptButton } from '../../UI/buttons/accept-button';
import { RejectButton } from '../../UI/buttons/reject-button';

export const RequestList = (props: ListProps) => (
  <List {...props} title="Подтверждение заявок">
    <Datagrid title="Подтверждение заявок">
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="surname" />
      <TextField source="name" />
      <TextField source="patronymic" />
      <TextField source="birthdate" />
      <AcceptButton />
      <RejectButton />
    </Datagrid>
  </List>
);
