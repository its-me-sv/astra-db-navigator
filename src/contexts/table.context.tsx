import React, {createContext, ReactNode, useContext, useState} from 'react';

import {TableSchema} from '../utils/types';
import {dummyTables} from '../utils/dummy-data';

interface TableContextInterface {
  tables: Array<TableSchema>;
  currTable: TableSchema | null
  loading: boolean;
  setCurrTable?: (val: TableSchema | null) => void;
  setLoading?: (val: boolean) => void;
  fetchTables?: () => void;
  resetState?: () => void;
}

const defaultState: TableContextInterface = {
  tables: [],
  currTable: null,
  loading: false,
};

export const TableContext = createContext<TableContextInterface>(defaultState);

export const useTableContext = () => useContext(TableContext);

export const TableContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [tables, setTables] = useState<Array<TableSchema>>(defaultState.tables);
  const [currTable, setCurrTable] = useState<TableSchema | null>(defaultState.currTable);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchTables = () => {
    setLoading(true);
    setTimeout(() => {
      setTables(dummyTables);
      setLoading(false);
    }, 500);
  };

  const resetState = () => {
    setTables([]);
    setCurrTable(null);
    setLoading(false);
  };

  return (
    <TableContext.Provider
      value={{
        tables, currTable, loading,
        setCurrTable, setLoading, fetchTables,
        resetState
      }}
    >{children}</TableContext.Provider>
  );
};
