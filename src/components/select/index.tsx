import React, {ChangeEvent} from "react";

import {SelectStyles, OptionStyles} from './styles';

import {useConnectionContext} from '../../contexts/connection.context';

interface SelectProps {}

const Select: React.FC<SelectProps> = () => {
  const {database, setDb} = useConnectionContext();
  
  const databases: Array<string> = ["workshops", "pirate-land", "aneta"];
  const handleDbChange = (event: ChangeEvent<HTMLSelectElement>) => setDb!(event.target.value);

  return (
    <SelectStyles value={database} onChange={handleDbChange}>
      {databases.map((v) => (
        <OptionStyles key={v} value={v}>{v}</OptionStyles>
      ))}
    </SelectStyles>
  );
};

export default Select;
