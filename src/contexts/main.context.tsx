import React, {createContext, ReactNode, useContext, useState} from 'react';

interface MainContextInterface {
  appToken: string;
  database: string;
  loading: boolean;
}

const defaultState: MainContextInterface = {
  appToken: '',
  database: '',
  loading: false
};

export const MainContext = createContext<MainContextInterface>(defaultState);

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [appToken, setAppToken] = useState<string>(defaultState.appToken);
  const [database, setDatabase] = useState<string>(defaultState.database);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  return (
    <MainContext.Provider
      value={{
        appToken, database, loading
      }}
    >{children}</MainContext.Provider>
  );
};
