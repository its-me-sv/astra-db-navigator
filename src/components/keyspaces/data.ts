import {TableSchema, TypeSchema} from './index';

export const tables: Array<TableSchema> = [
  {name: "col1", columns: 48},
  {name: "key_value", columns: 2},
  {name: "users_by_city", columns: 4},
  {name: "videos", columns: 7},
];

export const types: Array<TypeSchema> = [
  {name: "type_name", fields: 3},
];
