import React, {MutableRefObject, useState} from 'react';

import {
  ModalWrapper, ModalContainer,
  ModalTitle,
  ColumnOptionsContainer,
} from './styles';
import {ModalButtons} from '../../pages/keyspace/styles';
import {general} from '../../utils/translations.utils';
import {NewColumn} from '../../utils/types';
import {generateColumnTypeDefinition} from '../../utils/column.utils';
import {
  dataTypes, 
  // colTypes, 
  booleanOptions, 
  collectionDepth, collectionTypes,
  collections, nonMapCollections
} from '../../utils/dummy-data';

import {useLanguageContext} from '../../contexts/language.context';

import Input from '../input';
import Select from '../select';
import Button from '../button';

interface ColumnModalProps {
  onClose: () => void;
  types: Array<string>;
  newCol: MutableRefObject<NewColumn>;
  ls: (val: boolean) => void;
  ac: () => void;
}

const ColumnModal: React.FC<ColumnModalProps> = ({onClose, types, newCol, ls, ac}) => {
  const {language} = useLanguageContext();

  const [columnName, setColumnName] = useState<string>('column1');
  const [type, setType] = useState<string>('ascii');
  // const [keyType, setKeyType] = useState<string>("Partition");
  
  // for collections
  const [frozen, setFrozen] = useState<string>("false");
  // for list
  const [depth, setDepth] = useState<string>("1");
  const [colTyp, setColTyp] = useState<string>('ascii');
  // for map
  const [key, setKey] = useState<string>('ascii');
  const [value, setValue] = useState<string>('ascii');

  const onColumnCreate = () => {
    ls(true);
    setTimeout(() => {
      newCol.current.name = columnName;
      newCol.current.typeDefinition = generateColumnTypeDefinition(
        type, frozen === 'true', +depth, 
        colTyp, key, value
      );
      ac();
      ls(false);
      onClose();
    }, 500);
  };

  return (
    <ModalWrapper>
      <ModalContainer tiny>
        <ModalTitle>Add new column</ModalTitle>
        <ColumnOptionsContainer>
          <Input
            label="Name"
            name="Name"
            value={columnName}
            setValue={setColumnName}
            tiny
          />
          <Select
            val={type}
            setVal={setType}
            options={[...dataTypes, ...types].sort()}
            notHeader
            label="Data type"
          />
          {collections.includes(type) && (
            <Select
              val={frozen}
              setVal={setFrozen}
              options={booleanOptions}
              notHeader
              label="Frozen"
            />
          )}
          {type === "list" && (
            <Select
              val={depth}
              setVal={setDepth}
              options={collectionDepth}
              notHeader
              label="Depth"
            />
          )}
          {type === "map" && (
            <>
              <Select
                val={key}
                setVal={setKey}
                options={collectionTypes}
                notHeader
                label="Key"
              />
              <Select
                val={value}
                setVal={setValue}
                options={collectionTypes}
                notHeader
                label="Value"
              />
            </>
          )}
          {nonMapCollections.includes(type) && (
            <Select
              val={colTyp}
              setVal={setColTyp}
              options={collectionTypes}
              notHeader
              label="Collection type"
            />
          )}
          {/* <Select 
              val={keyType}
              setVal={setKeyType}
              options={colTypes}
              notHeader
              label="Key type"
            /> */}
        </ColumnOptionsContainer>
        <ModalButtons>
          <Button
            text={general.cancel[language]}
            disabled={false}
            variant={3}
            onPress={onClose}
          />
          <Button
            text={general.create[language]}
            disabled={false}
            variant={4}
            onPress={onColumnCreate}
          />
        </ModalButtons>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ColumnModal;
