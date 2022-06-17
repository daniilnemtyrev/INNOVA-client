/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ListProps,
  useRecordContext,
  useRefresh,
  downloadCSV,
} from 'react-admin';
import jsonExport from 'jsonexport/dist';
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

const exporter = users => {
  const usersForExport = users.map(post => {
    const { id, email, name, status } = post; // omit backlinks and author
    return { id, email, name, status };
  });
  jsonExport(
    usersForExport,
    {
      headers: ['id', 'email', 'name', 'status'], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, 'users'); // download as 'users.csv` file
    },
  );
};

export const UserList = (props: ListProps) => {
  return (
    <List {...props} title="Пользователи" exporter={exporter}>
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
