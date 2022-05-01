import React from "react";

import {MainWrapper as MainContainer} from './styles';

import MainHeader from "../main-header";
import MainFooter from '../main-footer';
import MainBody from '../main-body';

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = () => {
  return (
    <MainContainer>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </MainContainer>
  );
};

export default MainWrapper;
