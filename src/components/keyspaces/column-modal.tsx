import React, {useState} from 'react';

import {
  ModalWrapper, ModalContainer,
  ModalTitle, ModalCloseButton,
  ColumnOptionsContainer,
  ModalDeleteButton
} from './styles';
import {general} from '../../utils/translations.utils';
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
}

const ColumnModal: React.FC<ColumnModalProps> = ({onClose, types}) => {
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

  const onColumnCreate = () => {};

  return (
    <ModalWrapper>
      <ModalContainer tiny>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
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
        <ModalDeleteButton>
          <Button
            text={general.create[language]}
            disabled={false}
            variant={4}
            onPress={onColumnCreate}
          />
        </ModalDeleteButton>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ColumnModal;
