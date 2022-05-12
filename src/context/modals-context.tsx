import { noop } from 'lodash';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

type StateSetter<T> = Dispatch<SetStateAction<T>>;

interface IContext {
  headerModalVisible: boolean;
  setHeaderModalVisible: StateSetter<boolean>;
}

const initialValues: IContext = {
  headerModalVisible: false,
  setHeaderModalVisible: noop,
};

type Props = { children: React.ReactNode };

const ModalsContext = createContext(initialValues);

export const ModalsContextProvider = ({ children }: Props) => {
  const [headerModalVisible, setHeaderModalVisible] = useState(false);

  const value = useMemo(
    () => ({
      headerModalVisible,
      setHeaderModalVisible,
    }),
    [headerModalVisible],
  );
  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};

export const useModalContext = (): IContext => useContext(ModalsContext);
