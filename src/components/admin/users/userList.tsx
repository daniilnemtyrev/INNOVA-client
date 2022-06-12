/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ListProps,
  useRecordContext,
  useRefresh,
} from 'react-admin';
import { API } from '../../../pages/Admin';
import { Button } from '../../UI/buttons/button-base';

const BanButton = () => {
  const record = useRecordContext();
  const refresh = useRefresh();

  const banned = 'Забанен';

  if (record.status === banned) return null;

  return (
    <Button
      style={{ backgroundColor: '#e05353' }}
      onClick={() => {
        fetch(`${API}/users/${record.id}`, {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...record, status: 'Забанен' }),
        }).then(() => refresh());
      }}
    >
      Забанить
    </Button>
  );
};

export const UserList = (props: ListProps) => {
  return (
    <List {...props} title="Пользователи">
      <Datagrid title="Пользователи">
        <TextField source="id" />
        <TextField source="email" />
        <TextField source="surname" />
        <TextField source="name" />
        <TextField source="patronymic" />
        <TextField source="birthdate" />
        <TextField source="status" />
        <BanButton />
      </Datagrid>
    </List>
  );
};
