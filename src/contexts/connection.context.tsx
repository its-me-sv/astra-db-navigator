import React, {createContext, ReactNode, useContext, useState} from 'react';

interface ConnectionContextInterface {
  appToken: string;
  keyspace: string;
  table: string;
  screen: number;
  loading: boolean;
  setKs?: (ksName: string) => void;
  setTbl?: (tblName: string) => void;
  resetConnection?: () => void;
  setLoading?: (val: boolean) => void;
  setScreen?: (val: number) => void;
  setAppToken?: (val: string) => void;
}

const defaultState: ConnectionContextInterface = {
  appToken: '',
  keyspace: '',
  table: '',
  screen: 0,
  loading: false
};

export const ConnectionContext = createContext<ConnectionContextInterface>(defaultState);

export const useConnectionContext = () => useContext(ConnectionContext);

export const ConnectionContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [appToken, setAppToken] = useState<string>(defaultState.appToken);
  const [keyspace, setKeyspace] = useState<string>(defaultState.keyspace);
  const [table, setTable] = useState<string>(defaultState.table);
  const [screen, setScreen] = useState<number>(defaultState.screen);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const resetConnection = () => {
    setLoading(true);
    setTimeout(() => {
      setAppToken("");
      setKeyspace("");
      setTable("");
      setScreen(0);
      setLoading(false);
    }, 500);
  };

  const setKs = (ksName: string) => {
    setKeyspace(ksName);
    setTable('');
    setScreen(2);
  };

  const setTbl = (tblName: string) => {
    setTable(tblName);
    setScreen(3);
  };

  return (
    <ConnectionContext.Provider
      value={{
        appToken, loading, keyspace, table, screen,
        resetConnection, setLoading, setKs, setTbl,
        setScreen, setAppToken
      }}
    >{children}</ConnectionContext.Provider>
  );
};
