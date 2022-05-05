import React, { useState } from 'react';

import {
  ModalWrapper,
  ModalContainer,
  ModalTitle,
  ModalFlexWrap
} from './styles';
import {ModalButtons} from '../databases/styles';
import {general, tableModalTranslations} from '../../utils/translations.utils';
import {ColumnSchema, IndexSchema} from './types';

import Button from '../button';
import Input from '../input';
import Select from '../select';
import {useLanguageContext} from '../../contexts/language.context';

const indexTypes: Array<string> = ['', 'SASI', 'SAI'];

interface IndexModalProps {
  onClose: () => void;
  columns: Array<ColumnSchema>;
  indices: Array<IndexSchema>;
  table: string;
}

const IndexModal: React.FC<IndexModalProps> = ({onClose, table, columns}) => {
  const {language} = useLanguageContext();

  const [column, setColumn] = useState<string>(columns[0].name);
  const [name, setName] = useState<string>(`${table}_idx`);
  const [type, setType] = useState<string>(indexTypes[0]);

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalTitle>Create new index</ModalTitle>
        <ModalFlexWrap>
          <Input 
            label="Name"
            value={name}
            name="Name"
            setValue={setName}
            tiny
          />
          <Select
            label="Column"
            val={column}
            setVal={setColumn}
            options={columns.map(({name}) => name)}
            notHeader
          />
          <Select
            label="Type"
            val={type}
            setVal={setType}
            options={indexTypes.map(val => val || 'SI')}
            notHeader
          />
        </ModalFlexWrap>
        <ModalButtons>
          <Button
            variant={3}
            text={general.cancel[language]}
            onPress={onClose}
            disabled={false}
          />
          <Button
            variant={4}
            text={tableModalTranslations.crtIdx[language]}
            onPress={() => {}}
            disabled={false}
          />
        </ModalButtons>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default IndexModal;
