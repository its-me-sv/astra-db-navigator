import React from "react";

import {
  KeyspaceContainer, ContentContainer,
  ItemHolder, ItemName, HrLine, ItemSubfield, Seperator,
} from './styles';
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
        <SearchField cb={() => {}} placeholder={"Table name"} />
        <ContentContainer>
          {tables.map((val, idx) => (
            <ItemHolder key={idx}>
              <ItemName>{val.name}</ItemName>
              <HrLine />
              <ItemSubfield>Columns: {val.columns}</ItemSubfield>
            </ItemHolder>
          ))}
          <Button
            variant={2}
            text="Create new table"
            onPress={() => {}}
            disabled={false}
          />
        </ContentContainer>
      </Seperator>
      <Seperator>
        <SearchField cb={() => {}} placeholder={"Type name"} />
        <ContentContainer>
          {types.map((val, idx) => (
            <ItemHolder key={idx}>
              <ItemName>{val.name}</ItemName>
              <HrLine />
              <ItemSubfield>Fields: {val.fields}</ItemSubfield>
            </ItemHolder>
          ))}
          <Button
            variant={2}
            text="Create new type"
            onPress={() => {}}
            disabled={false}
          />
        </ContentContainer>
      </Seperator>
    </KeyspaceContainer>
  );
};

export default Keyspaces;
