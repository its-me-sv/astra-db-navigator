import React, {useState} from "react";

import {RowArea as Container, RowsHeader} from '../../pages/rows/styles';
import {rowTranslations} from '../../utils/translations.utils';

import {useLanguageContext} from '../../contexts/language.context';

import SearchField from '../search-field';
import Button from '../button';

interface RowsAreaInterface {}

const RowsArea: React.FC<RowsAreaInterface> = () => {
  const {language} = useLanguageContext();

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
    </Container>
  );
};

export default RowsArea;
