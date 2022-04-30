import React from "react";

import {
  HomePageContainer,
  HomePageHeader,
  DSLogo,
  AstraLogo,
  HomeFooter,
  HomePageBody,
  BodyTop,
  CaptionText,
  BodyFooter,
  BodyForm,
  BodyInput,
} from "./styles";

import Input from '../../components/input';
import Button from '../../components/button';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
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
        <CaptionText>GUI to manage your AstraDB Database</CaptionText>
        <BodyForm>
          <span>Credentials</span>
          <BodyInput>
            <Input label="App Token" name="app-tkn" value="" setValue={() => {}}/>
            <a 
              href="https://docs.datastax.com/en/astra/docs/manage-application-tokens.html"
              target="_blank"
              rel="noreferrer"
            >Don’t have an App Token?</a>
          </BodyInput>
          <Button variant={4} text="Connect" onPress={() => {}} disabled={false} />
        </BodyForm>
        <BodyFooter>
          <span>Don’t have an account?</span>
          <a href="https://astra.datastax.com/register" target="_blank" rel="noreferrer">Sign Up</a>
        </BodyFooter>
      </HomePageBody>
      <HomeFooter>
        <span>* US</span>
        <span> | </span>
        <span>IT</span>
        <span> | </span>
        <span>ES</span>
        <span> | </span>
        <span>FR</span>
      </HomeFooter>
    </HomePageContainer>
  );
};

export default HomePage;
