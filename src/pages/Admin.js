import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import { UserList } from '../components/admin/userList';
import { RequestList } from '../components/admin/requestList';
import { TracksList, TrackCreate, TrackEdit } from '../components/admin/tracks';
import { CasesList } from '../components/admin/cases/casesList';
import { CaseEdit } from '../components/admin/cases/caseEdit';
import { CaseCreate } from '../components/admin/cases/caseCreate';

const AdminPage = () => {
  const dataProvider = crudProvider('http://localhost:4000');

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users/getAll" list={UserList} />
      <Resource name="users/getUserByQuery" list={RequestList} />
      <Resource
        name="tracks"
        options={{ label: 'Проектные треки' }}
        list={TracksList}
        edit={TrackEdit}
        create={TrackCreate}
      />
      <Resource
        name="cases"
        options={{ label: 'Кейс-задачи' }}
        list={CasesList}
        edit={CaseEdit}
        create={CaseCreate}
      />
    </Admin>
  );
};
export default AdminPage;
