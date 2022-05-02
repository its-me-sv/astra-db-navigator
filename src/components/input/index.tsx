import React, {Dispatch, SetStateAction, ChangeEvent} from "react";

import {
  InputField, InputLabel,
  StyledInput, StyledTextArea
} from './styles';

interface InputProps {
  label: string;
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isPass?: boolean;
  isDesc?: boolean;
}

const Input: React.FC<InputProps> = ({label, name, value, setValue, isPass, isDesc}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
    const handleChange1 = (event: ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value);
    return (
      <InputField>
        <InputLabel>{label}</InputLabel>
        {!isDesc 
         ? (<StyledInput 
              type={isPass ? "password": "text"} 
              name={name} 
              value={value} 
              onChange={handleChange} 
            />)
         : (<StyledTextArea isDesc name={name} value={value} onChange={handleChange1} />)
        }
      </InputField>
    );
};

export default Input;
