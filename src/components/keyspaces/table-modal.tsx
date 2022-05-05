import React from 'react';

import {
  ModalWrapper, ModalContainer,
  ModalTitle, ModalCloseButton, HrLine,
  ModalSubtitle, ModalSubFields,
  ModalDeleteButton, ModalSubTextsContainer,
  ModalSubItemsContainer
} from './styles';
import {EmptyContent} from '../databases/styles';

import Button from '../button';

interface TableModalProps {
  tableName: string;
  onClose: () => void;
}

const TableModal: React.FC<TableModalProps> = ({tableName, onClose}) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <ModalTitle>{tableName}</ModalTitle>
        <ModalSubFields>
          <ModalSubtitle>Columns</ModalSubtitle>
          <Button
            variant={6}
            text="Add new column"
            disabled={false}
            onPress={() => {}}
            medium
          />
        </ModalSubFields>
        <HrLine />
        <ModalSubItemsContainer>
          <EmptyContent>No data found</EmptyContent>
        </ModalSubItemsContainer>
        <ModalSubFields>
          <ModalSubtitle>Primary key</ModalSubtitle>
        </ModalSubFields>
        <HrLine />
        <ModalSubTextsContainer>
          <span>Partition key: city</span>
          <span>Clustering key: lastname, email</span>
        </ModalSubTextsContainer>
        <ModalSubFields>
          <ModalSubtitle>Table options</ModalSubtitle>
        </ModalSubFields>
        <HrLine />
        <ModalSubTextsContainer>
          <span>Default time to live: 0</span>
          <span>Clustering expression: lastname(asc), email(asc)</span>
        </ModalSubTextsContainer>
        <ModalSubFields>
          <ModalSubtitle>Indexes</ModalSubtitle>
          <Button
            variant={6}
            text="Add new index"
            disabled={false}
            onPress={() => {}}
            medium
          />
        </ModalSubFields>
        <HrLine />
        <ModalSubItemsContainer>
          <EmptyContent>No data found</EmptyContent>
        </ModalSubItemsContainer>
        <ModalDeleteButton>
          <Button
            variant={3}
            text="Delete table"
            disabled={false}
            onPress={() => {}}
            tiny
          />
        </ModalDeleteButton>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default TableModal;
