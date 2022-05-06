import React, {useState} from 'react';
import {booleanOptions} from './data';

import Select from '../select';

interface NonTokenizingProps {}

const NonTokenizing: React.FC<NonTokenizingProps> = () => {
  const [lc, setLc] = useState<string>('false');
  const [uc, setUc] = useState<string>('false');
  const [cs, setCs] = useState<string>('true');
  
  return (
    <>
      <Select
        val={lc}
        setVal={setLc}
        options={booleanOptions}
        label="Normalize lowercase"
        notHeader
      />
      <Select
        val={uc}
        setVal={setUc}
        options={booleanOptions}
        label="Normalize uppercase"
        notHeader
      />
      <Select
        val={cs}
        setVal={setCs}
        options={booleanOptions}
        label="Case sensitive"
        notHeader
      />
    </>
  );
};

export default NonTokenizing;
