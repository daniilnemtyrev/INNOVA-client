import Chat from '../pages/Chat';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Regist from '../pages/Regist';

export const privateRoutes = [{ path: '/chat', component: Chat, exact: true }];

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
  { path: '/menu', component: Menu, exact: true },
  { path: '/registration', component: Regist, exact: true },
];
