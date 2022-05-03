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
import BlockLoader from "../block-loader";
import DatabaseModal from "./modal";
import Button from "../button";

export interface KeyspaceSchema {
  name: string;
  dataCenters?: number;
}

interface DatabasesProps {
  dbName: string;
}

const Databases: React.FC<DatabasesProps> = ({dbName}) => {
  const {language} = useLanguageContext();
  const {setKs} = useConnectionContext();

  const [keyword, setKeyword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [keyspaces, setKeyspaces] = useState<Array<KeyspaceSchema>>([]);
  
  const applyFilter = (val: string) => setKeyword(val);
  const viewModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  useEffect(() => {
    if (dbName.length < 1) return;
    hideModal();
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
      {loading && <BlockLoader />}
      {showModal && <DatabaseModal onClose={hideModal} ls={setLoading} />}
      <SearchField
        cb={applyFilter}
        placeholder={databasesTranslations.searchPlaceholder[language]}
      />
      <KeyspacesContainer>
        {[
          ...filteredKeyspaces,
          ...filteredKeyspaces,
          ...filteredKeyspaces,
          ...filteredKeyspaces,
          ...filteredKeyspaces,
        ].map((val, idx) => (
          <KeyspaceHolder key={idx} onClick={() => setKs!(val.name)}>
            <KeyspaceName>{val.name}</KeyspaceName>
            <HrLine />
            <KeyspaceDc>
              {databasesTranslations.dc[language]}: {val.dataCenters || "-"}
            </KeyspaceDc>
          </KeyspaceHolder>
        ))}
        <Button
          variant={2}
          text={databasesTranslations.new[language]}
          onPress={viewModal}
          disabled={false}
        />
      </KeyspacesContainer>
    </DatabaseContainer>
  );
};

export default Databases;
