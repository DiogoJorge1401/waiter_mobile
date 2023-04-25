import { createContext, useContext, useEffect, useState } from 'react';
import { useCategory } from '../category';
import { IAppContext } from './types';
import { useProduct } from '../product';

const AppContext = createContext({} as IAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { isFetchingProducts } = useProduct();
  const { isFetchingCategories } = useCategory();
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    if (isFetchingCategories && isFetchingProducts) setIsAppLoading(true);
    if (!isFetchingCategories && !isFetchingProducts) setIsAppLoading(false);
  }, [isFetchingCategories, isFetchingProducts]);

  return (
    <AppContext.Provider
      value={{
        isAppLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
