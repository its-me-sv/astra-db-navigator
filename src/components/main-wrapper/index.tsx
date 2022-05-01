import React from "react";

import {MainWrapper as MainContainer, MainFooter, ButtonWrapper} from './styles';
import Languages from '../languages';
import Button from "../button";

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = () => {
  return (
    <MainContainer>
      <div>header</div>
      <div>body</div>
      <MainFooter>
        <ButtonWrapper>
          <Button
            variant={3}
            text="Disconnect"
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
