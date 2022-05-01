import React, {
  useRef, ChangeEvent, 
  KeyboardEventHandler, MutableRefObject
} from "react";

import {
  SearchContainer, SearchIcon,
  SearchInput,
} from './styles';

interface SearchFieldProps {
  cb: (val: string) => void;
  placeholder: string;
}

const SearchField: React.FC<SearchFieldProps> = ({cb, placeholder}) => {
  const textRef = useRef() as MutableRefObject<HTMLInputElement>;

  const callCallBack = () => {
    cb(textRef.current.value);
    textRef.current.value = '';
    textRef.current.blur();
  };
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== "Enter") return;
    if (textRef.current.value.length < 1) return window.alert("Field empty");
    callCallBack();
  };

  return (
    <SearchContainer>
      <SearchIcon onClick={callCallBack} />
      <SearchInput
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        ref={textRef}
      />
    </SearchContainer>
  );
};

export default SearchField;
