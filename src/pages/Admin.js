import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from 'ra-data-nestjsx-crud';
import { UserList } from '../components/admin/users';
import { RequestList } from '../components/admin/requests';
import { TracksList, TrackCreate, TrackEdit } from '../components/admin/tracks';
import { CasesList, CaseCreate, CaseEdit } from '../components/admin/cases';
import { NewsCreate, NewsEdit, NewsList } from '../components/admin/news';
import { SponsorsCreate, SponsorsEdit, SponsorsList } from '../components/admin/sponsors';
import { TimetableCreate, TimetableEdit, TimetableList } from '../components/admin/timetable';

export const API = 'http://localhost:4000';
const AdminPage = () => {
  const dataProvider = crudProvider(API);
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        options={{ label: 'Пользователи' }}
        list={UserList}
      />
      <Resource
        name="users/requests"
        options={{ label: 'Подтверждение заявок' }}
        list={RequestList}
      />
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
      <Resource
        name="news"
        options={{ label: 'Новости' }}
        list={NewsList}
        create={NewsCreate}
        edit={NewsEdit}
      />
      <Resource
        name="sponsors"
        options={{ label: 'Спонсоры' }}
        list={SponsorsList}
        edit={SponsorsEdit}
        create={SponsorsCreate}
      />
      <Resource
        name="timetable"
        options={{ label: 'Расписание' }}
        list={TimetableList}
        edit={TimetableEdit}
        create={TimetableCreate}
      />
    </Admin>
  );
};
export default AdminPage;
