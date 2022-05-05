import {TableSchema, TypeSchema, ColumnSchema, IndexSchema} from './types';

export const tables: Array<TableSchema> = [
  {name: "col1", columns: 48},
  {name: "key_value", columns: 2},
  {name: "users_by_city", columns: 4},
  {name: "videos", columns: 7},
];

export const types: Array<TypeSchema> = [
  {name: "type_name", fields: 3},
  {name: "type_human", fields: 2},
  {name: "type_animal", fields: 4},
  {name: "planet", fields: 1},
];

export const columns: Array<ColumnSchema> =[
  {name: "key", type: "text", static: false},
  {name: "value", type: "text", static: false},
  {name: "city", type: "text", static: false},
  {name: "lastname", type: "text", static: false},
  {name: "email", type: "text", static: false},
  {name: "firstname", type: "text", static: false},
  {name: "videoid", type: "uuid", static: false},
  {name: "email", type: "text", static: false},
  {name: "frames", type: "list<int>", static: false},
  {name: "tags", type: "set<text>", static: false},
  {name: "title", type: "text", static: false},
  {name: "upload", type: "timestamp", static: false},
  {name: "url", type: "text", static: false},
];

export const indices: Array<IndexSchema> = [
  {name: "fav_books_idx", kind: "COMPOSITES", options: ['bookId']},
  {name: "users_idx", kind: "CUSTOM", options: ['userid']}
];
