// src/hooks/useStore.ts
import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};
