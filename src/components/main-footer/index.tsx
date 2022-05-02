import React from "react";

import {mainTranslations} from '../../utils/translations.utils';
import {ButtonWrapper, MainFooter as Container} from './styles';

import Languages from '../languages';
import Button from "../button";

import {useLanguageContext} from '../../contexts/language.context';
import {useConnectionContext} from '../../contexts/connection.context';

interface MainFooterProps {}

const MainFooter: React.FC<MainFooterProps> = () => {
  const {language} = useLanguageContext();
  const {resetConnection} = useConnectionContext();

  return (
    <Container>
      <ButtonWrapper>
        <Button
          variant={3}
          text={mainTranslations.disconnectButton[language]}
          disabled={false}
          onPress={resetConnection!}
          unfilled
          tiny
        />
      </ButtonWrapper>
      <a
        href="https://docs.datastax.com/en/astra/docs/db-glossary.html"
        target="_blank"
        rel="noreferrer"
      >
        📜 {mainTranslations.docs[language]}
      </a>
      <Languages />
    </Container>
  );
};

export default MainFooter;
