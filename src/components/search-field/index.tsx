import React, {
  useRef, 
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

  const callCallBack = () => cb(textRef.current.value);
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== "Enter") return;
    callCallBack();
  };
  const onClear = () => {
    cb('');
    textRef.current.value = '';
    textRef.current.blur();
  };

  return (
    <SearchContainer>
      <SearchIcon onClick={callCallBack} />
      <SearchInput
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        ref={textRef}
      />
      {textRef.current?.value.length > 0 && <span onClick={onClear}>x</span>}
    </SearchContainer>
  );
};

export default SearchField;
