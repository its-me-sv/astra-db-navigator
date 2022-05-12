import React, {createContext, ReactNode, useContext, useState} from 'react';

import {TableSchema} from '../utils/types';
import {dummyTables} from '../utils/dummy-data';

import {useConnectionContext} from './connection.context';

interface TableContextInterface {
  tables: Array<TableSchema>;
  currTable: TableSchema | null;
  loading: boolean;
  setCurrTable?: (val: TableSchema | null) => void;
  setLoading?: (val: boolean) => void;
  fetchTables?: (val: string) => void;
  resetState?: () => void;
  setTable?: (val: string) => void;
}

const defaultState: TableContextInterface = {
  tables: [],
  currTable: null,
  loading: false,
};

export const TableContext = createContext<TableContextInterface>(defaultState);

export const useTableContext = () => useContext(TableContext);

export const TableContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const {setScreen} = useConnectionContext();

  const [tables, setTables] = useState<Array<TableSchema>>(defaultState.tables);
  const [currTable, setCurrTable] = useState<TableSchema | null>(defaultState.currTable);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchTables = (ksName: string) => {
    if (ksName.length < 1) return;
    setLoading(true);
    setTimeout(() => {
      setTables(dummyTables);
      setLoading(false);
    }, 500);
  };

  const setTable = (tblName: string) => {
    if (tblName.length < 1) return;
    setCurrTable({name: tblName});
    setScreen!(3);
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
        resetState, setTable
      }}
    >{children}</TableContext.Provider>
  );
};
