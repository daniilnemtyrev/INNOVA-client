import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStores } from '../hooks/useStore';
import { publicRoutes, privateRoutes, adminRoutes } from '../routes';

const AppRouter: FC = () => {
  const { rootStore } = useStores();
  const authStore = rootStore.authStore;
  const userStore = rootStore.userStore;
  console.log(userStore.user.roles);

  const isAdmin = userStore.user.roles?.find(role => role.value === 'admin');
  console.log(isAdmin);

  return authStore.IsAuth ? (
    isAdmin ? (
      <Switch>
        {adminRoutes.map(route => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        ))}
        <Redirect to="/admin" />
      </Switch>
    ) : (
      <Switch>
        {privateRoutes.map(route => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        ))}
        <Redirect to="/home" />
      </Switch>
    )
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
