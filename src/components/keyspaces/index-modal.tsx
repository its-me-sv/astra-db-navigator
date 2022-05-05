import React, { useState } from 'react';

import {
  ModalWrapper,
  ModalContainer,
  ModalTitle,
  ModalFlexWrap,
  ModalSubtitle,
  HrLine
} from './styles';
import {ModalButtons} from '../databases/styles';
import {
  general, 
  tableModalTranslations, 
  indexModalTranslations
} from '../../utils/translations.utils';
import {ColumnSchema, IndexSchema} from './types';

import Button from '../button';
import Input from '../input';
import Select from '../select';
import {useLanguageContext} from '../../contexts/language.context';

const indexTypes: Array<string> = ['', 'SASI', 'SAI'];
const kinds: Array<string> = ['VALUES', 'FULL', 'KEYS', 'ENTRIES'];

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
  const [kind, setKind] = useState<string>(kinds[0]);
  const [replace, setReplace] = useState<string>('true');
  const [advanced, setAdvanced] = useState<string>('false');

  const [isLiteral, setIsLiteral] = useState<string>('false');

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalTitle>{indexModalTranslations.title[language]}</ModalTitle>
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
            options={columns.map(({ name }) => name)}
            notHeader
          />
          <Select
            label="Type"
            val={type}
            setVal={setType}
            options={indexTypes.map((val) => val || "SI")}
            notHeader
          />
          <Select
            label="Kind"
            val={kind}
            setVal={setKind}
            options={kinds}
            notHeader
          />
          <Select
            label="Replace"
            val={replace}
            setVal={setReplace}
            options={["true", "false"]}
            notHeader
          />
          <Select
            label="Options"
            val={advanced}
            setVal={setAdvanced}
            options={['true', 'false']}
            notHeader
          />
        </ModalFlexWrap>
        {advanced === 'true' && (
          <>
            <ModalSubtitle>{general.ops[language]}</ModalSubtitle>
            <HrLine il />
            <ModalFlexWrap lessMargin>
              <Select
                label="Literal"
                val={isLiteral}
                setVal={setIsLiteral}
                options={["true", "false"]}
                notHeader
              />
            </ModalFlexWrap>
          </>
        )}
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
