import React, { useState } from 'react';

import {
  ModalWrapper,
  ModalContainer,
  ModalTitle,
  ModalFlexWrap,
  ModalSubtitle,
  HrLine
} from './styles';
import {ModalButtons} from '../../pages/keyspace/styles';
import {
  general, 
  tableModalTranslations, 
  indexModalTranslations
} from '../../utils/translations.utils';
import {
  ColumnSchema, IndexSchema, 
  StandardAnalyzerOptions, NonTokenizingAnalyzerOptions
} from '../../utils/types';
import {
  indexTypes, kinds, booleanOptions, 
  analyzerClassses, acMap
} from '../../utils/dummy-data';

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
  ls: (val: boolean) => void;
}

const IndexModal: React.FC<IndexModalProps> = ({onClose, table, columns, ls}) => {
  const {language} = useLanguageContext();
  
  // general
  const [column, setColumn] = useState<string>(columns[0].name);
  const [name, setName] = useState<string>(`${table}_idx`);
  const [type, setType] = useState<string>("SASI");
  const [kind, setKind] = useState<string>("VALUES");
  const [replace, setReplace] = useState<string>("false");
  const [advanced, setAdvanced] = useState<string>('false');

  // options
  const [isLiteral, setIsLiteral] = useState<string>('false');
  const [maxCompaction, setMaxCompaction] = useState<string>('0');
  const [analysed, setAnalysed] = useState<string>('false');
  const [analyzerClass, setAnalyzerClass] = useState<string>("Standard");

  // analyzer options
  const [stdOps, setStdOps] = useState<StandardAnalyzerOptions>();
  const [ntknOps, setNtknOps] = useState<NonTokenizingAnalyzerOptions>();

  const onCreateIndex = () => {
    ls!(true);
    const basicOptions: {[key: string]: any} = {
      name:
        name.length > 0 && name.search(/^[a-zA-Z0-9_]+$/) !== -1
          ? name
          : `${table}_${column}_idx`,
      ifNotExists: replace,
      column, type, kind, 
    };
    const advancedOptions: {[key: string]: any} = {};
    if (advanced === 'true') {
      advancedOptions.is_literal = isLiteral === 'true';
      advancedOptions.max_compaction_flush_memory_in_mb = Number(maxCompaction) || 1;
    }
    let analyzerOptions = {};
    if (advanced === 'true' && analysed === 'true') {
      advancedOptions.analyzed = true;
      advancedOptions.analyzer_class = acMap[analyzerClass];
      if (analyzerClass === "Standard") analyzerOptions = {...stdOps};
      else analyzerOptions = {...ntknOps};
    }
    setTimeout(() => {
      console.log({...basicOptions, ...advancedOptions, ...analyzerOptions});
      ls!(false);
      onClose();
    }, 500);
  };

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
            label="If not exists"
            val={replace}
            setVal={setReplace}
            options={["true", "false"]}
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
            <ModalSubtitle>
              {indexModalTranslations.advOps[language]}
            </ModalSubtitle>
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
              {analyzerClass === "Standard" ? (
                <Standard updater={setStdOps} />
              ) : (
                <NonTokenizing updater={setNtknOps} />
              )}
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
            onPress={onCreateIndex}
            disabled={false}
          />
        </ModalButtons>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default IndexModal;
