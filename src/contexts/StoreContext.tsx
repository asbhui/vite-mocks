import { createContext, PropsWithChildren } from 'react';
import { rootStore } from '../stores/RootStore';

export const StoreContext = createContext<typeof rootStore | undefined>(undefined);

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
