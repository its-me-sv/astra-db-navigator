import React from "react";

import {
  SearchContainer, SearchIcon,
  SearchInput,
} from './styles';

interface SearchFieldProps {}

const SearchField: React.FC<SearchFieldProps> = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder="Keyspace name" />
    </SearchContainer>
  );
};

export default SearchField;
