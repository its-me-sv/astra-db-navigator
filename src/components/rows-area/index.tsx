import React, {useState} from "react";

import {RowArea as Container, RowsHeader, NoRows} from '../../pages/rows/styles';
import {EmptyContent} from "../../pages/keyspace/styles";
import {HrLine} from "../keyspaces/styles";
import {rowTranslations, general} from '../../utils/translations.utils';

import {useLanguageContext} from '../../contexts/language.context';
import {useRowsContext} from '../../contexts/rows.context';

import SearchField from '../search-field';
import Button from '../button';

interface RowsAreaInterface {}

const RowsArea: React.FC<RowsAreaInterface> = () => {
  const {language} = useLanguageContext();
  const {rows} = useRowsContext();

  const [keyword, setKeyword] = useState<string>("");
  
  const applyKeyword = (val: string) => setKeyword(val);

  return (
    <Container>
      <RowsHeader>
        <div />
        <SearchField
          cb={applyKeyword}
          placeholder={rowTranslations.keyword[language]}
          live
        />
        <Button
          text={rowTranslations.newRow[language]}
          onPress={() => {}}
          disabled={false}
          variant={2}
        />
      </RowsHeader>
      <HrLine il />
      {rows.length === 0 && (
        <NoRows>
          <EmptyContent>{general.noData[language]}</EmptyContent>
        </NoRows>
      )}
    </Container>
  );
};

export default RowsArea;
