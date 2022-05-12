import React, { ReactElement, ReactNode } from 'react';
import { createContext } from 'react';

import { RootStore } from './root-store';

interface IRootStore {
  rootStore: RootStore;
}

interface IChildren {
  children: ReactElement<any, any>;
}

const rootStore = new RootStore();

export const RootStoreContext = createContext<IRootStore>({
  rootStore,
});

export const RootStoreProvider = ({ children }: IChildren) => {
  return (
    <RootStoreContext.Provider value={{ rootStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};
