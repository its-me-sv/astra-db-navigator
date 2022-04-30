import React from "react";
import styled from "styled-components";

import {useLanguageContext} from '../../contexts/language.context';

const Container = styled.div`
  color: #f5f4f9;
  font-family: bahnschrift;
  align-self: flex-end;
  margin: 0.5% 1%;
  opacity: 0.84;
`;

const Language = styled.span<{selected?:boolean}>`
  cursor: pointer;
  ${(props) => props.selected && `
    color: #eb6c34;
  `}
`;

interface LanguageProps {}

const Languages: React.FC<LanguageProps> = () => {
  const {language, setLanguage} = useLanguageContext();
  return (
    <Container>
      {['US', 'IT', 'ES', 'FR'].map((val, idx) => (
        <span key={val}>
          <Language
            key={val}
            onClick={() => setLanguage!(idx)}
            selected={idx===language}
          >{val}</Language>
          <span>{idx !== 3 ? ' | ': ''}</span>
        </span>
      ))}
    </Container>
  );
};

export default Languages;
