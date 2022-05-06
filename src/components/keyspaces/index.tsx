import React, {useEffect, useState} from "react";

import {
  KeyspaceContainer, ContentContainer, Info,
  ItemHolder, ItemName, HrLine, ItemSubfield, Seperator,
  SeperatorTitle
} from './styles';
import {EmptyContent} from '../databases/styles';
import {keyspacesTranslations, general} from '../../utils/translations.utils';
import {TableSchema, TypeSchema} from './types';
import {tables as dt, types as dk} from './data';

import SearchField from "../search-field";
import Button from "../button";
import BlockLoader from "../block-loader";
import TableModal from "./table-modal";
import {useLanguageContext} from '../../contexts/language.context';
import {useConnectionContext} from '../../contexts/connection.context';

interface KeyspacesProps {
  ksName: string;
}

const Keyspaces: React.FC<KeyspacesProps> = ({ksName}) => {
  const {language} = useLanguageContext();
  const {setTbl} = useConnectionContext();

  const [currTable, setCurrTable] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [tables, setTables] = useState<Array<TableSchema>>([]);
  const [types, setTypes] = useState<Array<TypeSchema>>([]);
  const [tableKeyword, setTableKeyword] = useState<string>('');
  const [typeKeyword, setTypeKeyword] = useState<string>('');

  const applyTableFilter = (val: string) => setTableKeyword(val);
  const applyTypeFilter = (val: string) => setTypeKeyword(val);
  const closeTableModal = () => setCurrTable('');

  useEffect(() => {
    if (ksName.length < 1) return;
    setLoading(true);
    setTimeout(() => {
      setTables(dt);
      setTypes(dk);
      setLoading(false);
    }, 500);
  }, [ksName]);

  const filteredTables: Array<TableSchema> = tables
  ?.filter(({name}) => name.toLocaleLowerCase().includes(tableKeyword.toLocaleLowerCase()));
  const filteredTypes: Array<TypeSchema> = types
  ?.filter(({name}) => name.toLocaleLowerCase().includes(typeKeyword.toLocaleLowerCase()));

  return (
    <KeyspaceContainer>
      {loading && <BlockLoader />}
      {currTable.length > 0 && (
        <TableModal 
          tableName={currTable} 
          onClose={closeTableModal} 
          ls={setLoading} 
          types={types.map(({name}) => name)}
        />
      )}
      <Seperator>
        <SeperatorTitle>{keyspacesTranslations.hd1[language]}</SeperatorTitle>
        <SearchField
          cb={applyTableFilter}
          placeholder={keyspacesTranslations.tableSearchPlaceholder[language]}
          live
        />
        {filteredTables.length === 0 && (
          <EmptyContent>{general.noData[language]}</EmptyContent>
        )}
        <ContentContainer>
          {filteredTables.map((val, idx) => (
            <ItemHolder key={idx} onClick={() => setTbl!(val.name)}>
              <ItemName>
                {val.name}
                <Info
                  onClick={(event) => {
                    event.stopPropagation();
                    setCurrTable(val.name);
                  }}
                  title={keyspacesTranslations.tblInf[language]}
                />
              </ItemName>
              <HrLine />
              <ItemSubfield>
                {keyspacesTranslations.col[language]}: {val.columns}
              </ItemSubfield>
            </ItemHolder>
          ))}
          <Button
            variant={2}
            text={keyspacesTranslations.newTable[language]}
            onPress={() => {}}
            disabled={false}
          />
        </ContentContainer>
      </Seperator>
      <Seperator>
        <SeperatorTitle>{keyspacesTranslations.hd2[language]}</SeperatorTitle>
        <SearchField
          cb={applyTypeFilter}
          placeholder={keyspacesTranslations.typeSearchPlaceholder[language]}
          live
        />
        {filteredTypes.length === 0 && (
          <EmptyContent>{general.noData[language]}</EmptyContent>
        )}
        <ContentContainer>
          {filteredTypes.map((val, idx) => (
            <ItemHolder key={idx}>
              <ItemName>{val.name}</ItemName>
              <HrLine />
              <ItemSubfield>
                {keyspacesTranslations.field[language]}: {val.fields}
              </ItemSubfield>
            </ItemHolder>
          ))}
          <Button
            variant={2}
            text={keyspacesTranslations.newType[language]}
            onPress={() => {}}
            disabled={false}
          />
        </ContentContainer>
      </Seperator>
    </KeyspaceContainer>
  );
};

export default Keyspaces;
