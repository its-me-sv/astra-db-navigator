import React from "react";

import {
  MainWrapper as MainContainer,
  MainHeader, 
  DataStaxLogo, AstraDBLogo
} from './styles';
import MainFooter from '../main-footer';

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = () => {
  return (
    <MainContainer>
      <MainHeader>
        <a href="https://www.datastax.com/" target="_blank" rel="noreferrer">
          <DataStaxLogo />
          <AstraDBLogo />
        </a>
        <div>hello</div>
      </MainHeader>
      <div>body</div>
      <MainFooter />
    </MainContainer>
  );
};

export default MainWrapper;
