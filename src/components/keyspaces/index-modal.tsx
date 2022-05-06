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
import {indexTypes, kinds, booleanOptions, analyzerClassses} from './data';

import Button from '../button';
import Input from '../input';
import Select from '../select';
import Standard from './standard';
import NonTokenizing from './non-tokenizing';
import {useLanguageContext} from '../../contexts/language.context';

interface IndexModalProps {
  onClose: () => void;
  columns: Array<ColumnSchema>;
  indices: Array<IndexSchema>;
  table: string;
}

const IndexModal: React.FC<IndexModalProps> = ({onClose, table, columns}) => {
  const {language} = useLanguageContext();

  // general
  const [column, setColumn] = useState<string>(columns[0].name);
  const [name, setName] = useState<string>(`${table}_idx`);
  const [type, setType] = useState<string>("SASI");
  const [kind, setKind] = useState<string>("VALUES");
  const [advanced, setAdvanced] = useState<string>('false');

  // options
  const [isLiteral, setIsLiteral] = useState<string>('false');
  const [maxCompaction, setMaxCompaction] = useState<string>('0');
  const [analysed, setAnalysed] = useState<string>('false');
  const [analyzerClass, setAnalyzerClass] = useState<string>("Standard");

  return (
    <ModalWrapper>
      <ModalContainer tiny>
        <ModalTitle>{indexModalTranslations.title[language]}</ModalTitle>
        <ModalSubtitle>{indexModalTranslations.bscOps[language]}</ModalSubtitle>
        <HrLine il />
        <ModalFlexWrap lessMargin>
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
            options={indexTypes}
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
            label="Options"
            val={advanced}
            setVal={setAdvanced}
            options={booleanOptions}
            notHeader
          />
        </ModalFlexWrap>
        {advanced === "true" && (
          <>
            <ModalSubtitle>{indexModalTranslations.advOps[language]}</ModalSubtitle>
            <HrLine il />
            <ModalFlexWrap lessMargin>
              <Select
                label="Literal"
                val={isLiteral}
                setVal={setIsLiteral}
                options={booleanOptions}
                notHeader
              />
              <Input
                label="Max compaction flush memory(mb)"
                value={maxCompaction}
                name="maxCompaction"
                setValue={setMaxCompaction}
                tiny
              />
              <Select
                label="Analysed"
                val={analysed}
                setVal={setAnalysed}
                options={booleanOptions}
                notHeader
              />
              {analysed === "true" && (
                <Select
                  label="Analyzer class"
                  val={analyzerClass}
                  setVal={setAnalyzerClass}
                  options={analyzerClassses}
                  notHeader
                />
              )}
            </ModalFlexWrap>
          </>
        )}
        {advanced === "true" && analysed === "true" && (
          <>
            <ModalSubtitle>
              {indexModalTranslations.acOps[language]}
            </ModalSubtitle>
            <HrLine il />
            <ModalFlexWrap lessMargin>
              {analyzerClass === "Standard" ? <Standard /> : <NonTokenizing />}
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
