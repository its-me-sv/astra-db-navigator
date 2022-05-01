import React, {createContext, ReactNode, useContext, useState} from 'react';

interface ConnectionContextInterface {
  appToken: string;
  database: string;
  loading: boolean;
  fetchDatabase?: (appToken: string) => void;
  resetConnection?: () => void;
}

const defaultState: ConnectionContextInterface = {
  appToken: '',
  database: '',
  loading: false
};

export const ConnectionContext = createContext<ConnectionContextInterface>(defaultState);

export const useConnectionContext = () => useContext(ConnectionContext);

export const ConnectionContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [appToken, setAppToken] = useState<string>(defaultState.appToken);
  const [database, setDatabase] = useState<string>(defaultState.database);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchDatabase = (tkn: string) => {
    setLoading(true);
    setTimeout(() => {
      setAppToken(tkn);
      setDatabase('workshops');
      setLoading(false);
    });
  };

  const resetConnection = () => {
    setLoading(true);
    setTimeout(() => {
      setAppToken("");
      setDatabase("");
      setLoading(false);
    });
  };

  return (
    <ConnectionContext.Provider
      value={{
        appToken, database, loading,
        fetchDatabase, resetConnection
      }}
    >{children}</ConnectionContext.Provider>
  );
};
