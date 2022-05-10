import {KeyspaceSchema, TableSchema, TypeSchema} from './types';

export const dummyKeyspaces: Array<KeyspaceSchema> = [
  {name: "todos", dataCenters: 1},
  {name: "system_schema"},
  {name: "drapetisca", dataCenters: 1},
  {name: "system_virtual_schema"},
  {name: "netflix", dataCenters: 1},
  {name: "datastax_sla"},
  {name: "system_traces"},
  {name: "system_views"},
  {name: "system_auth"},
  {name: "data_endpoint_auth"},
  {name: "tiktok_keyspace", dataCenters: 1},
  {name: "nosql1", dataCenters: 1},
  {name: "system"},
  {name: "tiktok", dataCenters: 1},
];

export const dummyTables: Array<TableSchema> = [
  { name: "col1", columns: 48 },
  { name: "key_value", columns: 2 },
  { name: "users_by_city", columns: 4 },
  { name: "videos", columns: 7 },
];

export const dummyTypes: Array<TypeSchema> = [
  { name: "type_name", fields: 3 },
  { name: "type_human", fields: 2 },
  { name: "type_animal", fields: 4 },
  { name: "planet", fields: 1 },
];
