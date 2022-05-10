export interface KeyspaceSchema {
  name: string;
  dataCenters?: number;
}

export interface TableSchema {
  name: string;
  columns: number;
}

export interface TypeSchema {
  name: string;
  fields: number;
}
