import React from "react";

import {
  Container, DataStaxLogo, 
  AstraDBLogo, HeaderRight
} from './styles';

import {mainHeaderTranslations} from '../../utils/translations.utils';
import {useLanguageContext} from '../../contexts/language.context';
import {useConnectionContext} from '../../contexts/connection.context';
import Button from "../button";
import Select from "../select";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  const {language} = useLanguageContext();
  const {database, setDb} = useConnectionContext();

  return (
    <Container>
      <a href="https://www.datastax.com/" target="_blank" rel="noreferrer">
        <DataStaxLogo />
        <AstraDBLogo />
      </a>
      <HeaderRight>
        <Select 
          options={["workshops", "pirate-land", "aneta"]}
          val={database}
          setVal={setDb!}
        />
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
