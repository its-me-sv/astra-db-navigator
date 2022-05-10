import React, {useEffect} from "react";

import {
  Container, DataStaxLogo, 
  AstraDBLogo, HeaderRight
} from './styles';
import {mainHeaderTranslations} from '../../utils/translations.utils';

import {useLanguageContext} from '../../contexts/language.context';
import {useConnectionContext} from '../../contexts/connection.context';
import {useDatabaseContext} from '../../contexts/database.context';

import Button from "../button";
import Select from "../select";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  const {language} = useLanguageContext();
  const {setScreen} = useConnectionContext();
  const {
    currDatabase, databases, 
    fetchDatabases, setCurrDatabase
  } = useDatabaseContext();

  useEffect(() => {
    if (currDatabase.length < 1) return;
    fetchDatabases!(currDatabase);
  }, [fetchDatabases, currDatabase]);

  useEffect(() => {
    setScreen!(1);
  }, [currDatabase, setScreen]);

  return (
    <Container>
      <a href="https://www.datastax.com/" target="_blank" rel="noreferrer">
        <DataStaxLogo />
        <AstraDBLogo />
      </a>
      <HeaderRight>
        <Select 
          options={databases}
          val={currDatabase}
          setVal={setCurrDatabase!}
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
