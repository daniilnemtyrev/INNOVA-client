import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useStores } from '../hooks/useStore';
import { Cases } from '../pages/Cases';
import Chat from '../pages/Chat';
import { CreateTeam } from '../pages/CreateTeam';
import CreateProject from '../pages/CreateProject';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyProjects from '../pages/MyProjects';
import Profile from '../pages/Profile';
import Regist from '../pages/Regist';
import { Tracks } from '../pages/Tracks';
import Team from '../pages/Team';
import { Users } from '../pages/Users';
import Notifications from '../pages/Notifications';
import { News } from './News/news';
import { SelectedNews } from './News/SelectedNews';

// eslint-disable-next-line react/function-component-definition
const AppRouter: FC = () => {
  const rootStore = useStores();
  const { authStore } = rootStore;

  return (
    <>
      {authStore.IsAuth && (
        <Routes>
          <Route element={<Chat />} path="/chat" />
          <Route element={<Home />} path="/home" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<EditProfile />} path="/profile/edit" />
          <Route element={<Tracks />} path="/profile/tracks" />
          <Route element={<Cases />} path="/profile/tracks/cases" />
          <Route
            element={<CreateProject />}
            path="/profile/tracks/cases/create"
          />
          <Route element={<Team />} path="/profile/team" />
          <Route element={<CreateTeam />} path="/profile/createTeam" />
          <Route element={<MyProjects />} path="/profile/myProject" />
          <Route element={<Users />} path="/users" />
          <Route element={<Notifications />} path="/notifications" />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      )}

      {!authStore.IsAuth && (
        <Routes>
          <Route element={<Profile />} path="/profile" />
          <Route element={<EditProfile />} path="/profile/edit" />

          <Route element={<Tracks />} path="/profile/tracks" />
          <Route element={<Cases />} path="/profile/tracks/cases" />
          <Route
            element={<CreateProject />}
            path="/profile/tracks/cases/create"
          />

          <Route element={<MyProjects />} path="/profile/myProject" />
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/login" />
          <Route element={<News />} path="/news" />
          <Route element={<SelectedNews />} path="/news/:id" />
          <Route element={<Regist />} path="/registration" />
          <Route element={<CreateTeam />} path="/profile/createTeam" />
          <Route element={<Team />} path="/profile/team" />
          <Route element={<Users />} path="/users" />
          <Route element={<Notifications />} path="/notifications" />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      )}
    </>
  );
};

export default observer(AppRouter);
