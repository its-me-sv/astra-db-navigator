import React from "react";
import styled from "styled-components";

import {useLanguageContext} from '../../contexts/language.context';

const Container = styled.div`
  color: #f5f4f9;
  font-family: bahnschrift;
  align-self: flex-end;
  margin: 0.5% 1%;
  opacity: 0.84;
  span {
    cursor: pointer;
  }
`;

interface LanguageProps {}

const Languages: React.FC<LanguageProps> = () => {
  const {language, setLanguage} = useLanguageContext();
  return (
    <Container>
      {['US', 'IT', 'ES', 'FR'].map((val, idx) => (
        <span 
          key={val}
          onClick={() => setLanguage!(idx)}
        >{`${idx === language ? '* ': ''}${val}${idx !== 3 ? ' | ': ''}`}</span>
      ))}
    </Container>
  );
};

export default Languages;
