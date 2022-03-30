import Chat from '../pages/Chat';
import Home from '../pages/Home';

import Login from '../pages/Login';

import Regist from '../pages/Regist';

export const privateRoutes = [{ path: '/chat', component: Chat, exact: true }];

export const publicRoutes = [
  { path: '/home', component: Home, exact: true },
  { path: '/login', component: Login, exact: true },
  { path: '/registration', component: Regist, exact: true },
];
