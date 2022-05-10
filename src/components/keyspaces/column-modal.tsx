import React, {useState} from 'react';

import {
  ModalWrapper, ModalContainer,
  ModalTitle, ModalCloseButton,
  ColumnOptionsContainer
} from './styles';
import {
  dataTypes, colTypes, booleanOptions, 
  collectionDepth, collectionTypes
} from '../../utils/dummy-data';

import Input from '../input';
import Select from '../select';

interface ColumnModalProps {
  onClose: () => void;
  types: Array<string>;
}

const ColumnModal: React.FC<ColumnModalProps> = ({onClose, types}) => {
  const [columnName, setColumnName] = useState<string>('column1');
  const [type, setType] = useState<string>('ascii');
  const [keyType, setKeyType] = useState<string>("Partition");
  
  // for collections
  const [frozen, setFrozen] = useState<string>("false");
  const [depth, setDepth] = useState<string>("1");
  const [colTyp, setColTyp] = useState<string>('ascii');

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
            {type === "list" && (
              <>
                <Select
                  val={frozen}
                  setVal={setFrozen}
                  options={booleanOptions}
                  notHeader
                  label="Frozen"
                />
                <Select
                  val={depth}
                  setVal={setDepth}
                  options={collectionDepth}
                  notHeader
                  label="Depth"
                />
                <Select
                  val={colTyp}
                  setVal={setColTyp}
                  options={[...collectionTypes, ...types]}
                  notHeader
                  label="Collection type"
                />
              </>
            )}
            <Select 
              val={keyType}
              setVal={setKeyType}
              options={colTypes}
              notHeader
              label="Key type"
            />
        </ColumnOptionsContainer>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ColumnModal;
