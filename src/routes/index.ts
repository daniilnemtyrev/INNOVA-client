import Chat from '../pages/Chat';
import Home from '../pages/Home';

import Login from '../pages/Login';
<<<<<<< HEAD
import Profile from '../pages/Profile';
import Regist from '../pages/Regist';
import AdminPage from '../pages/Admin';
=======

import Regist from '../pages/Regist';
import EditProfile from '../pages/EditProfile';
import Profile from '../pages/Profile';
>>>>>>> dfd21a707a99805bfca56d2695eb3324c5036a0b

export const privateRoutes = [
  { path: '/chat', component: Chat, exact: true },
  { path: '/home', component: Home, exact: true },
  { path: '/profile', component: Profile, exact: true },
  { path: '/profile/edit', component: EditProfile, exact: true },
];

export const publicRoutes = [
  { path: '/home', component: Home, exact: true },
  { path: '/login', component: Login, exact: true },
  { path: '/registration', component: Regist, exact: true },
];
export const adminRoutes = [
  { path: '/admin', component: AdminPage, exact: true },
];
