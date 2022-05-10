import React, {useState, useEffect} from 'react';
import {booleanOptions, locales} from '../../utils/dummy-data';
import {StandardAnalyzerOptions} from '../../utils/types';

import Select from '../select';
import Input from '../input';

interface StandardProps {
  updater: (obj: StandardAnalyzerOptions) => void;
}

const Standard: React.FC<StandardProps> = ({updater}) => {
  const [stemming, setStemming] = useState<string>('false');
  const [skip, setSkip] = useState<string>('');
  const [local, setLocal] = useState<string>('en');
  const [lc, setLc] = useState<string>('false');
  const [uc, setUc] = useState<string>('false');

  useEffect(() => {
    updater({
      tokenization_enable_stemming: stemming === 'true',
      tokenization_skip_stop_words: skip,
      tokenization_locale: local,
      tokenization_normalize_lowercase: lc === 'true',
      tokenization_normalize_uppercase: uc === 'true'
    });
  }, [stemming, skip, local, lc, uc, updater]);

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
