import {KeyspaceSchema} from './types';

const keySpaces: Array<KeyspaceSchema> = [
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

export default keySpaces;
