import React, {createContext, ReactNode, useContext, useState} from 'react';

import {KeyspaceSchema} from './types';
import {dummyKeyspaces} from './data';

interface KeyspaceContextInterface {
  keyspaces: Array<KeyspaceSchema>;
  currKeyspace: KeyspaceSchema | null
  loading: boolean;
  setCurrKeyspace?: (val: KeyspaceSchema | null) => void;
  setLoading?: (val: boolean) => void;
  fetchKeyspaces?: () => void;
  resetState?: () => void;
}

const defaultState: KeyspaceContextInterface = {
  keyspaces: [],
  currKeyspace: null,
  loading: false,
};

export const KeyspaceContext = createContext<KeyspaceContextInterface>(defaultState);

export const useKeyspaceContext = () => useContext(KeyspaceContext);

export const KeyspaceContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [keyspaces, setKeyspaces] = useState<Array<KeyspaceSchema>>(defaultState.keyspaces);
  const [currKeyspace, setCurrKeyspace] = useState<KeyspaceSchema | null>(defaultState.currKeyspace);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchKeyspaces = () => {
    setLoading(true);
    setTimeout(() => {
      setKeyspaces(dummyKeyspaces);
      setLoading(false);
    }, 500);
  };

  const resetState = () => {
    setKeyspaces([]);
    setCurrKeyspace(null);
    setLoading(false);
  };

  return (
    <KeyspaceContext.Provider
      value={{
        keyspaces, currKeyspace, loading,
        setCurrKeyspace, setLoading, fetchKeyspaces,
        resetState
      }}
    >{children}</KeyspaceContext.Provider>
  );
};
