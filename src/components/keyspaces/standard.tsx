import React, {useState} from 'react';
import {booleanOptions, locales} from './data';

import Select from '../select';
import Input from '../input';

interface StandardProps {}

const Standard: React.FC<StandardProps> = () => {
  const [stemming, setStemming] = useState<string>('false');
  const [skip, setSkip] = useState<string>('');
  const [local, setLocal] = useState<string>('en');
  const [lc, setLc] = useState<string>('false');
  const [uc, setUc] = useState<string>('false');

  return (
    <>
      <Select
        val={stemming}
        setVal={setStemming}
        options={booleanOptions}
        label="Enbale stemming"
        notHeader
      />
      <Input
        label="Skip stop words"
        value={skip}
        setValue={setSkip}
        name="Skip stop words"
        tiny
        pc="comma seperated words"
      />
      <Select
        val={local}
        setVal={setLocal}
        options={locales}
        label="Locale"
        notHeader
      />
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
    </>
  );
};

export default Standard;
