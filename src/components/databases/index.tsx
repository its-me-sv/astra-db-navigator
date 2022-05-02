import React, {useState, useEffect} from "react";

import {
  DatabaseContainer,
  KeyspacesContainer,
  KeyspaceHolder, KeyspaceName,
  HrLine, KeyspaceDc
} from "./styles";
import {databasesTranslations} from '../../utils/translations.utils';
import dummmyKeySpaces from "./data";

import {useLanguageContext} from '../../contexts/language.context';
import {useConnectionContext} from '../../contexts/connection.context';
import SearchField from '../search-field';

export interface KeyspaceSchema {
  name: string;
  dataCenters?: number;
}

interface DatabasesProps {
  dbName: string;
}

const Databases: React.FC<DatabasesProps> = ({dbName}) => {
  const {language} = useLanguageContext();
  const {setLoading, setKs} = useConnectionContext();

  const [keyword, setKeyword] = useState<string>('');
  const [keyspaces, setKeyspaces] = useState<Array<KeyspaceSchema>>([]);
  
  const applyFilter = (val: string) => setKeyword(val);

  useEffect(() => {
    if (dbName.length < 1) return;
    setLoading!(true);
    setTimeout(() => {
      setKeyspaces(dummmyKeySpaces);
      setLoading!(false);
    }, 1500);
  }, [dbName, setLoading]);

  const filteredKeyspaces: Array<KeyspaceSchema> = keyspaces
  ?.filter(({name}) => name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));

  return (
    <DatabaseContainer>
      <SearchField
        cb={applyFilter}
        placeholder={databasesTranslations.searchPlaceholder[language]}
      />
      <KeyspacesContainer>
        {[...filteredKeyspaces, ...filteredKeyspaces, ...filteredKeyspaces].map(
          (val, idx) => (
            <KeyspaceHolder key={idx} onClick={() => setKs!(val.name)}>
              <KeyspaceName>{val.name}</KeyspaceName>
              <HrLine />
              <KeyspaceDc>
                {databasesTranslations.dc[language]}: {val.dataCenters || "-"}
              </KeyspaceDc>
            </KeyspaceHolder>
          )
        )}
        <KeyspaceHolder>
          <KeyspaceName>{databasesTranslations.new[language]}</KeyspaceName>
        </KeyspaceHolder>
      </KeyspacesContainer>
    </DatabaseContainer>
  );
};

export default Databases;
