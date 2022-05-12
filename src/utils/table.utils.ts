import {TableSchema} from './types';

export const addColumn = (tables: Array<TableSchema>, tblName: string) => {
  const newTables: Array<TableSchema> = [];
  for (let table of tables) {
    if (table.name !== tblName) 
      newTables.push(table);
    else
      newTables.push({name: tblName, columns: (table.columns||0) + 1});
  }
  return newTables;
};

export const removeColumn = (tables: Array<TableSchema>, tblName: string) => {
  const newTables: Array<TableSchema> = [];
  for (let table of tables) {
    if (table.name !== tblName) 
      newTables.push(table);
    else
      newTables.push({name: tblName, columns: (table.columns||0) - 1});
  }
  return newTables;
};
