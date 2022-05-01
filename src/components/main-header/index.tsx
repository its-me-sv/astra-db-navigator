import React from "react";

import {
  Container, DataStaxLogo, 
  AstraDBLogo, HeaderRight
} from './styles';

import {mainHeaderTranslations} from '../../utils/translations.utils';
import {useLanguageContext} from '../../contexts/language.context';
import Button from "../button";
import Select from "../select";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  const {language} = useLanguageContext();

  return (
    <Container>
      <a href="https://www.datastax.com/" target="_blank" rel="noreferrer">
        <DataStaxLogo />
        <AstraDBLogo />
      </a>
      <HeaderRight>
        <Select />
        <Button
          variant={2}
          text={mainHeaderTranslations.createDB[language]}
          onPress={() => {}}
          disabled={false}
          unfilled
          tiny
        />
      </HeaderRight>
    </Container>
  );
};

export default MainHeader;
