import React from 'react';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import { UserList } from '../components/admin/userList';
import { RequestList } from '../components/admin/requestList';

const AdminPage = () => {
  const dataProvider = crudProvider('http://localhost:4000');
  console.log('--------------------->', dataProvider);
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users/getAll" list={UserList} />
      <Resource name="users/getUserByQuery" list={RequestList} />
    </Admin>
  );
};
export default AdminPage;
