import React, {createContext, ReactNode, useContext, useState} from "react";

import {dummyColumns} from '../utils/dummy-data';

import {useConnectionContext} from './connection.context';

interface RowsContextInterface {
  columns: Array<string>;
  resColumns: Array<string>;
  currColumn: string;
  fetchColumns?: (tblName: string) => void;
  setCurrColumn?: (val: string) => void;
  addColumn?: () => void;
  removeColumn?: (colName: string) => void;
}

const defaultState: RowsContextInterface = {
  columns: [],
  resColumns: [],
  currColumn: ''
};

export const RowsContext = createContext<RowsContextInterface>(defaultState);

export const useRowsContext = () => useContext(RowsContext);

export const RowsContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const {setLoading} = useConnectionContext();

  const [columns, setColumns] = useState<Array<string>>([]);
  const [resColumns, setResColumns] = useState<Array<string>>([]);
  const [currColumn, setCurrColumn] = useState<string>('');

  const fetchColumns = (tableName: string) => {
    if (tableName.length < 1) return;
    setLoading!(true);
    setTimeout(() => {
      const availColumns = dummyColumns.map(({ name }) => name);
      setColumns(availColumns);
      setCurrColumn(availColumns[0]);
      setLoading!(false);
    }, 500);
  };

  const addColumn = () => {
    if (columns.length < 1) return;
    setResColumns([...resColumns, currColumn]);
    const nc: Array<string> = columns.filter((val) => val !== currColumn);
    setColumns(nc);
    setCurrColumn(nc[0]);
  };

  const removeColumn = (colName: string) => {
    setResColumns(resColumns.filter((val) => val !== colName));
    setColumns([...columns, colName]);
  };

  return (
    <RowsContext.Provider value={{
      columns, resColumns, currColumn,
      fetchColumns, setCurrColumn, addColumn,
      removeColumn
    }}>{children}</RowsContext.Provider>
  );
};
