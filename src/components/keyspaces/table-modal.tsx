import React from 'react';

import {
  ModalWrapper, ModalContainer,
  ModalTitle, ModalCloseButton, HrLine,
  ModalSubtitle, ModalSubFields,
  ModalDeleteButton, ModalSubTextsContainer,
  ModalSubItemsContainer, ModalItem, ModalItemCloseButton
} from './styles';
import {EmptyContent} from '../databases/styles';
import {general} from '../../utils/translations.utils';

import Button from '../button';
import {useLanguageContext} from '../../contexts/language.context';

interface TableModalProps {
  tableName: string;
  onClose: () => void;
}

const TableModal: React.FC<TableModalProps> = ({tableName, onClose}) => {
  const {language} = useLanguageContext();

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <ModalTitle>{tableName}</ModalTitle>
        <ModalSubFields>
          <ModalSubtitle>Columns</ModalSubtitle>
          <Button
            variant={2}
            text="Add new column"
            disabled={false}
            onPress={() => {}}
            medium
          />
        </ModalSubFields>
        <HrLine />
        <ModalSubItemsContainer>
          {/* <EmptyContent>{general.noData[language]}</EmptyContent> */}
          {Array(14).fill(0).map(() => (
            <ModalItem>
              <div>
                <span>videoid</span>
                <ModalItemCloseButton title='Delete column'>x</ModalItemCloseButton>
              </div>
              <HrLine />
              <span>Type: uuid</span>
              <span>Static: false</span>
            </ModalItem>
          ))}
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
            variant={2}
            text="Add new index"
            disabled={false}
            onPress={() => {}}
            medium
          />
        </ModalSubFields>
        <HrLine />
        <ModalSubItemsContainer>
          {/* <EmptyContent>{general.noData[language]}</EmptyContent> */}
          {Array(14).fill(0).map((_v, idx) => (
            <ModalItem key={idx}>
              <div>
                <span>videoid</span>
                <ModalItemCloseButton title='Delete type'>x</ModalItemCloseButton>
              </div>
              <HrLine />
              <span>Kind: custom</span>
              <span>Options: joined, name, role</span>
            </ModalItem>
          ))}
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
