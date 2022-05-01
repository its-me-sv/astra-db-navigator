import React from "react";

import {DatabaseContainer} from './styles';
import SearchField from '../search-field';

interface DatabasesProps {}

const Databases: React.FC<DatabasesProps> = () => {
  return (
    <DatabaseContainer>
      <SearchField />
    </DatabaseContainer>
  );
};

export default Databases;
