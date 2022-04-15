import Chat from '../pages/Chat';
import Home from '../pages/Home';

import Login from '../pages/Login';

import Regist from '../pages/Regist';
import EditProfile from '../pages/EditProfile';
import Profile from '../pages/Profile';

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
