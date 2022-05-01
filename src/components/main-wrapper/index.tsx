import React from "react";

import {MainWrapper as MainContainer} from './styles';

import MainHeader from "../main-header";
import MainFooter from '../main-footer';

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = () => {
  return (
    <MainContainer>
      <MainHeader />
      <div>body</div>
      <MainFooter />
    </MainContainer>
  );
};

export default MainWrapper;
