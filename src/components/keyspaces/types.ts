export interface TableSchema {
  name: string;
  columns: number;
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

export interface StandardAnalyzerOptions {
  tokenization_enable_stemming: boolean;
  tokenization_skip_stop_words: string;
  tokenization_locale: string;
  tokenization_normalize_lowercase: boolean;
  tokenization_normalize_uppercase: boolean;
}

export interface NonTokenizingAnalyzerOptions {
  normalize_lowercase: boolean;
  normalize_uppercase: boolean;
  case_sensitive: boolean;
}
