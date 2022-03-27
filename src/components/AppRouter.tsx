import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import { publicRoutes, privateRoutes } from '../routes';

const AppRouter: FC = () => {
  const { store } = useContext(Context);

  return store.IsAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/chat" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default observer(AppRouter);
