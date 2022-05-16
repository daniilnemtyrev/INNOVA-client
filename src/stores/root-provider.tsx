import React, { ReactElement, createContext, useMemo } from 'react';

import { RootStore } from './root-store';

interface IChildren {
  children: ReactElement<any, any>;
}
const rootStore = new RootStore();

export const RootStoreContext = createContext<RootStore>(rootStore);

export const RootStoreProvider = ({ children }: IChildren) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
