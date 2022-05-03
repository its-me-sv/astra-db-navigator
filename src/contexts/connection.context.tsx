import React, {createContext, ReactNode, useContext, useState} from 'react';

interface ConnectionContextInterface {
  appToken: string;
  database: string;
  keyspace: string;
  table: string;
  screen: number;
  loading: boolean;
  fetchDatabase?: (appToken: string) => void;
  setDb?: (dbName: string) => void;
  setKs?: (ksName: string) => void;
  setTbl?: (tblName: string) => void;
  resetConnection?: () => void;
  setLoading?: (val: boolean) => void;
}

const defaultState: ConnectionContextInterface = {
  appToken: '',
  database: '',
  keyspace: '',
  table: '',
  screen: 0,
  loading: false
};

export const ConnectionContext = createContext<ConnectionContextInterface>(defaultState);

export const useConnectionContext = () => useContext(ConnectionContext);

export const ConnectionContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [appToken, setAppToken] = useState<string>(defaultState.appToken);
  const [database, setDatabase] = useState<string>(defaultState.database);
  const [keyspace, setKeyspace] = useState<string>(defaultState.keyspace);
  const [table, setTable] = useState<string>(defaultState.table);
  const [screen, setScreen] = useState<number>(defaultState.screen);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchDatabase = (tkn: string) => {
    setLoading(true);
    setTimeout(() => {
      setAppToken(tkn);
      setDatabase('workshops');
      setScreen(1);
      setLoading(false);
    });
  };

  const resetConnection = () => {
    setLoading(true);
    setTimeout(() => {
      setAppToken("");
      setDatabase("");
      setKeyspace("");
      setTable("");
      setScreen(0);
      setLoading(false);
    });
  };

  const setDb = (dbName: string) => {
    setDatabase(dbName);
    setKeyspace('');
    setTable('');
    setScreen(1);
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
        appToken, database, loading, keyspace, table, screen,
        fetchDatabase, resetConnection, setDb, setLoading, setKs, setTbl
      }}
    >{children}</ConnectionContext.Provider>
  );
};
