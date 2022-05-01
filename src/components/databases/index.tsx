import React, {useState} from "react";

import {DatabaseContainer} from './styles';
import {databasesTranslations} from '../../utils/translations.utils';

import {useLanguageContext} from '../../contexts/language.context';
import SearchField from '../search-field';

interface DatabasesProps {}

const Databases: React.FC<DatabasesProps> = () => {
  const {language} = useLanguageContext();

  const [keyword, setKeyword] = useState<string>('');
  const applyFilter = (val: string) => setKeyword(val);

  return (
    <DatabaseContainer>
      <SearchField 
        cb={applyFilter} 
        placeholder={databasesTranslations.searchPlaceholder[language]}
      />
      {keyword}
    </DatabaseContainer>
  );
};

export default Databases;
