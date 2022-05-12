import { useContext } from 'react';
import { RootStoreContext } from '../stores/root-provider';

export const useStores = () => useContext(RootStoreContext);
