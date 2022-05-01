import React from "react";

import {MainWrapper as MainContainer, MainFooter, ButtonWrapper} from './styles';
import {mainTranslations} from '../../utils/translations.utils';

import {useLanguageContext} from '../../contexts/language.context';
import Languages from '../languages';
import Button from "../button";

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = () => {
  const {language} = useLanguageContext();

  return (
    <MainContainer>
      <div>header</div>
      <div>body</div>
      <MainFooter>
        <ButtonWrapper>
          <Button
            variant={3}
            text={mainTranslations.disconnectButton[language]}
            disabled={false}
            onPress={() => {}}
            unfilled
            tiny
          />
        </ButtonWrapper>
        <Languages dark />
      </MainFooter>
    </MainContainer>
  );
};

export default MainWrapper;
