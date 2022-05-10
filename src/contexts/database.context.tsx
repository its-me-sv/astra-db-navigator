import React, {createContext, ReactNode, useContext, useState} from 'react';

interface DatabaseContextInterface {
  databases: Array<string>;
  currDatabase: string;
  loading: boolean;
  setCurrDatabase?: (val: string) => void;
  setLoading?: (val: boolean) => void;
  fetchDatabases?: (tkn: string) => void;
  resetState?: () => void;
}

const defaultState: DatabaseContextInterface = {
  databases: [],
  currDatabase: "",
  loading: false,
};

export const DatabaseContext = createContext<DatabaseContextInterface>(defaultState);

export const useDatabaseContext = () => useContext(DatabaseContext);

export const DatabaseContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [databases, setDatabases] = useState<Array<string>>(defaultState.databases);
  const [currDatabase, setCurrDatabase] = useState<string>(defaultState.currDatabase);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchDatabases = (tkn: string) => {
    if (tkn.length < 1) return;
    setLoading(true);
    setTimeout(() => {
      setDatabases(['workshops', 'pirate-land', 'aneta']);
      setCurrDatabase('workshops');
      setLoading(false);
    }, 500);
  };

  const resetState = () => {
    setDatabases([]);;
    setCurrDatabase('');
    setLoading(false);
  };

  return (
    <DatabaseContext.Provider
      value={{
        databases, currDatabase, loading,
        setCurrDatabase, setLoading, fetchDatabases,
        resetState
      }}
    >{children}</DatabaseContext.Provider>
  );
};
