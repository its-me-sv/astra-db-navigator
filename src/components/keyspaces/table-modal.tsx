import React from 'react';

import {
  ModalWrapper, ModalContainer,
  ModalTitle, ModalCloseButton, HrLine,
  ModalSubtitle, ModalSubFields,
  ModalDeleteButton, ModalSubTextsContainer,
  ModalSubItemsContainer, ModalItem, ModalItemCloseButton
} from './styles';
import {EmptyContent} from '../databases/styles';
import {general, tableModalTranslations} from '../../utils/translations.utils';

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
          <ModalSubtitle>{general.columns[language]}</ModalSubtitle>
          <Button
            variant={2}
            text={general.newCol[language]}
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
                <ModalItemCloseButton title={tableModalTranslations.delCol[language]}>x</ModalItemCloseButton>
              </div>
              <HrLine />
              <span>{general.type[language]}: uuid</span>
              <span>{general.static[language]}: false</span>
            </ModalItem>
          ))}
        </ModalSubItemsContainer>
        <ModalSubFields>
          <ModalSubtitle>{general.priKey[language]}</ModalSubtitle>
        </ModalSubFields>
        <HrLine />
        <ModalSubTextsContainer>
          <span>{general.parKey[language]}: city</span>
          <span>{general.cluKey[language]}: lastname, email</span>
        </ModalSubTextsContainer>
        <ModalSubFields>
          <ModalSubtitle>{tableModalTranslations.tblOpt[language]}</ModalSubtitle>
        </ModalSubFields>
        <HrLine />
        <ModalSubTextsContainer>
          <span>{tableModalTranslations.dTtl[language]}: 0</span>
          <span>{tableModalTranslations.cluExp[language]}: lastname(asc), email(asc)</span>
        </ModalSubTextsContainer>
        <ModalSubFields>
          <ModalSubtitle>{general.idx[language]}</ModalSubtitle>
          <Button
            variant={2}
            text={general.newIdx[language]}
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
                <ModalItemCloseButton title={tableModalTranslations.delIdx[language]}>x</ModalItemCloseButton>
              </div>
              <HrLine />
              <span>{general.knd[language]}: custom</span>
              <span>{general.ops[language]}: joined, name, role</span>
            </ModalItem>
          ))}
        </ModalSubItemsContainer>
        <ModalDeleteButton>
          <Button
            variant={3}
            text={tableModalTranslations.delTbl[language]}
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
