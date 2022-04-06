import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStores } from '../hooks/useStore';
import { publicRoutes, privateRoutes } from '../routes';

const AppRouter: FC = () => {
  const { rootStore } = useStores();
  const authStore = rootStore.authStore;

  return authStore.IsAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
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
      <Redirect to="/home" />
    </Switch>
  );
};

export default observer(AppRouter);
