import React from "react";

import {mainTranslations} from '../../utils/translations.utils';
import {ButtonWrapper, MainFooter as Container} from './styles';

import Languages from '../languages';
import Button from "../button";

import {useLanguageContext} from '../../contexts/language.context';
import {useMainContext} from '../../contexts/main.context';

interface MainFooterProps {}

const MainFooter: React.FC<MainFooterProps> = () => {
  const {language} = useLanguageContext();
  const {resetConnection} = useMainContext();

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
      <Languages dark />
    </Container>
  );
};

export default MainFooter;
