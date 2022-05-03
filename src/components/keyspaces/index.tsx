import React from "react";

import {
  KeyspaceContainer, ContentContainer,
  ItemHolder, ItemName, HrLine, ItemSubfield, Seperator,
} from './styles';
import {keyspacesTranslations} from '../../utils/translations.utils';
import {tables, types} from './data';

import SearchField from "../search-field";
import Button from "../button";
import {useLanguageContext} from '../../contexts/language.context';

export interface TableSchema {
  name: string;
  columns: number;
}

export interface TypeSchema {
  name: string;
  fields: number;
}

interface KeyspacesProps {}

const Keyspaces: React.FC<KeyspacesProps> = () => {
  const {language} = useLanguageContext();

  return (
    <KeyspaceContainer>
      <Seperator>
        <SearchField cb={() => {}} placeholder={keyspacesTranslations.tableSearchPlaceholder[language]} />
        <ContentContainer>
          {tables.map((val, idx) => (
            <ItemHolder key={idx}>
              <ItemName>{val.name}</ItemName>
              <HrLine />
              <ItemSubfield>{keyspacesTranslations.col[language]}: {val.columns}</ItemSubfield>
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
        <SearchField cb={() => {}} placeholder={keyspacesTranslations.typeSearchPlaceholder[language]} />
        <ContentContainer>
          {types.map((val, idx) => (
            <ItemHolder key={idx}>
              <ItemName>{val.name}</ItemName>
              <HrLine />
              <ItemSubfield>{keyspacesTranslations.field[language]}: {val.fields}</ItemSubfield>
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
