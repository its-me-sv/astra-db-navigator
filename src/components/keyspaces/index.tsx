import React, {useEffect, useState} from "react";

import {
  KeyspaceContainer, ContentContainer, Info,
  ItemHolder, ItemName, HrLine, ItemSubfield, Seperator,
  SeperatorTitle
} from './styles';
import {EmptyContent} from '../databases/styles';
import {keyspacesTranslations, general} from '../../utils/translations.utils';
import {tables as dt, types as dk} from './data';

import SearchField from "../search-field";
import Button from "../button";
import BlockLoader from "../block-loader";
import {useLanguageContext} from '../../contexts/language.context';
import {useConnectionContext} from '../../contexts/connection.context';

export interface TableSchema {
  name: string;
  columns: number;
}

export interface TypeSchema {
  name: string;
  fields: number;
}

interface KeyspacesProps {
  ksName: string;
}

const Keyspaces: React.FC<KeyspacesProps> = ({ksName}) => {
  const {language} = useLanguageContext();
  const {setTbl} = useConnectionContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [tables, setTables] = useState<Array<TableSchema>>([]);
  const [types, setTypes] = useState<Array<TypeSchema>>([]);
  const [tableKeyword, setTableKeyword] = useState<string>('');
  const [typeKeyword, setTypeKeyword] = useState<string>('');

  const applyTableFilter = (val: string) => setTableKeyword(val);
  const applyTypeFilter = (val: string) => setTypeKeyword(val);

  useEffect(() => {
    if (ksName.length < 1) return;
    setLoading(true);
    setTimeout(() => {
      setTables(dt);
      setTypes(dk);
      setLoading(false);
    }, 1500);
  }, [ksName]);

  const filteredTables: Array<TableSchema> = tables
  ?.filter(({name}) => name.toLocaleLowerCase().includes(tableKeyword.toLocaleLowerCase()));
  const filteredTypes: Array<TypeSchema> = types
  ?.filter(({name}) => name.toLocaleLowerCase().includes(typeKeyword.toLocaleLowerCase()));

  return (
    <KeyspaceContainer>
      {loading && <BlockLoader />}
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
          {[
            ...filteredTables,
            ...filteredTables,
            ...filteredTables,
            ...filteredTables,
            ...filteredTables,
          ].map((val, idx) => (
            <ItemHolder key={idx} onClick={() => setTbl!(val.name)}>
              <ItemName>
                {val.name}
                <Info />
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
          {[
            ...filteredTypes,
            ...filteredTypes,
            ...filteredTypes,
            ...filteredTypes,
            ...filteredTypes,
          ].map((val, idx) => (
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
