import React from "react";

import {useLanguageContext} from '../../contexts/language.context';
import {Container, Language} from './styles';

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
