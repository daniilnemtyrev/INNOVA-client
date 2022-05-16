import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useStores } from '../hooks/useStore';
import AdminPage from '../pages/Admin';
import Chat from '../pages/Chat';
import CreateProject from '../pages/CreateProject';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyProjects from '../pages/MyProjects';
import Profile from '../pages/Profile';
import Regist from '../pages/Regist';

// eslint-disable-next-line react/function-component-definition
const AppRouter: FC = () => {
  const rootStore = useStores();
  const { authStore } = rootStore;
  const { userStore } = rootStore;

  const isAdmin = userStore.user.roles?.find(role => role.value === 'admin');

  return (
    <>
      {authStore.IsAuth && isAdmin && (
        <Routes>
          <Route element={<AdminPage />} path="/admin" />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      )}
      {authStore.IsAuth && !isAdmin && (
        <Routes>
          <Route element={<Chat />} path="/chat" />
          <Route element={<Home />} path="/home" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<EditProfile />} path="/profile/edit" />
          <Route element={<CreateProject />} path="/profile/createProject" />
          <Route element={<MyProjects />} path="/profile/myProject" />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      )}

      {!authStore.IsAuth && (
        <Routes>
          <Route element={<Profile />} path="/profile" />
          <Route element={<EditProfile />} path="/profile/edit" />
          <Route element={<CreateProject />} path="/profile/createProject" />
          <Route element={<MyProjects />} path="/profile/myProject" />
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/login" />
          <Route element={<Regist />} path="/registration" />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      )}
    </>
  );
};

export default observer(AppRouter);
