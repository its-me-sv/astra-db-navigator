import React from "react";

import {Container, DataStaxLogo, AstraDBLogo, HeaderRight} from './styles';
import Button from "../button";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <Container>
      <a href="https://www.datastax.com/" target="_blank" rel="noreferrer">
        <DataStaxLogo />
        <AstraDBLogo />
      </a>
      <HeaderRight>
        <select>
          <option>workshops</option>
          <option>pirate-land</option>
          <option>aneta</option>
        </select>
        <Button
          variant={2}
          text="Create new Database"
          onPress={() => {}}
          disabled={false}
          unfilled
          tiny
        />
      </HeaderRight>
    </Container>
  );
};

export default MainHeader;
