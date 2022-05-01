import React from "react";

import {MainWrapper as MainContainer} from './styles';
import MainFooter from '../main-footer';

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = () => {
  return (
    <MainContainer>
      <div>header</div>
      <div>body</div>
      <MainFooter />
    </MainContainer>
  );
};

export default MainWrapper;
