export interface KeyspaceSchema {
  name: string;
  dataCenters?: number;
}

export interface TableSchema {
  name: string;
  columns?: number;
}

export interface TypeSchema {
  name: string;
  fields: number;
}

export interface ColumnSchema {
  name: string;
  type: string;
  static: boolean;
}

export interface IndexSchema {
  name: string;
  kind: string;
  options: Array<string>
}
