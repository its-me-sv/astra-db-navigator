import React, {createContext, ReactNode, useContext, useState} from 'react';

import {useConnectionContext} from './connection.context';

interface DatabaseContextInterface {
  databases: Array<string>;
  currDatabase: string;
  loading: boolean;
  setCurrDatabase?: (val: string) => void;
  setLoading?: (val: boolean) => void;
  fetchDatabases?: (tkn: string) => void;
  resetState?: () => void;
  setDatabase?: (val: string) => void;
}

const defaultState: DatabaseContextInterface = {
  databases: [],
  currDatabase: "",
  loading: false,
};

export const DatabaseContext = createContext<DatabaseContextInterface>(defaultState);

export const useDatabaseContext = () => useContext(DatabaseContext);

export const DatabaseContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const {setAppToken, setScreen} = useConnectionContext();

  const [databases, setDatabases] = useState<Array<string>>(defaultState.databases);
  const [currDatabase, setCurrDatabase] = useState<string>(defaultState.currDatabase);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchDatabases = (tkn: string) => {
    if (tkn.length < 1) return;
    setLoading(true);
    setTimeout(() => {
      setDatabases(['workshops', 'pirate-land', 'aneta']);
      setCurrDatabase('workshops');
      setAppToken!(tkn);
      setScreen!(1);
      setLoading(false);
    }, 500);
  };

  const resetState = () => {
    setDatabases([]);;
    setCurrDatabase('');
    setLoading(false);
  };

  const setDatabase = (dbName: string) => {
    setCurrDatabase(dbName);
    setScreen!(1);
  };

  return (
    <DatabaseContext.Provider
      value={{
        databases, currDatabase, loading,
        setLoading, fetchDatabases,
        resetState, setDatabase
      }}
    >{children}</DatabaseContext.Provider>
  );
};
