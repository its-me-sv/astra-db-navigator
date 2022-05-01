import React, {useState} from "react";

import {
  HomePageContainer, HomePageHeader,
  DSLogo, AstraLogo,
  HomePageBody, BodyTop,
  CaptionText, BodyFooter,
  BodyForm, BodyInput,
  BtnContainer
} from "./styles";

import {homeTranslations} from '../../utils/translations.utils';

import Input from '../../components/input';
import Button from '../../components/button';
import Languages from '../../components/languages';

import {useLanguageContext} from '../../contexts/language.context';
import {useMainContext} from '../../contexts/main.context';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const {language} = useLanguageContext();
  const {fetchDatabase} = useMainContext();

  const [userTkn, setUsrTkn] = useState<string>('');

  const onConnect = () => {
    if (!userTkn.length) return;
    fetchDatabase!(userTkn);
  };

  return (
    <HomePageContainer>
      <HomePageHeader>
        <a href="https://www.datastax.com/" target="_blank" rel="noreferrer">
          <DSLogo />
        </a>
      </HomePageHeader>
      <HomePageBody>
        <BodyTop>
          <AstraLogo />
          <span>Navigator</span>
        </BodyTop>
        <CaptionText>{homeTranslations.topCaption[language]}</CaptionText>
        <BodyForm>
          <span>{homeTranslations.formTop[language]}</span>
          <BodyInput>
            <Input 
              label={homeTranslations.formInput[language]} 
              name="app-tkn" 
              value={userTkn} 
              setValue={setUsrTkn}
            />
            <a 
              href="https://docs.datastax.com/en/astra/docs/manage-application-tokens.html"
              target="_blank"
              rel="noreferrer"
            >{homeTranslations.formDont[language]}</a>
          </BodyInput>
          <BtnContainer>
            <Button 
              variant={4} 
              text={homeTranslations.formButton[language]} 
              onPress={onConnect} 
              disabled={userTkn.length === 0}
            />
          </BtnContainer>
        </BodyForm>
        <BodyFooter>
          <span>{homeTranslations.bottomCaption[language]}</span>
          <a href="https://astra.datastax.com/register" target="_blank" rel="noreferrer">
            {homeTranslations.bottomSignUp[language]}
          </a>
        </BodyFooter>
      </HomePageBody>
      <Languages />
    </HomePageContainer>
  );
};

export default HomePage;
