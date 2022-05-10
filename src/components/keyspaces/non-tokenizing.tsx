import React, {useState, useEffect} from 'react';
import {booleanOptions} from '../../utils/dummy-data';
import {NonTokenizingAnalyzerOptions} from '../../utils/types';

import Select from '../select';

interface NonTokenizingProps {
  updater: (obj: NonTokenizingAnalyzerOptions) => void;
}

const NonTokenizing: React.FC<NonTokenizingProps> = ({updater}) => {
  const [lc, setLc] = useState<string>('false');
  const [uc, setUc] = useState<string>('false');
  const [cs, setCs] = useState<string>('true');

  useEffect(() => {
    updater({
      normalize_lowercase: lc === 'true',
      normalize_uppercase: uc === 'true',
      case_sensitive: cs === 'true'
    });
  }, [lc, uc, cs, updater]);
  
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
