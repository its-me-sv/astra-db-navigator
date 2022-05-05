import React, {useState, useEffect} from 'react';

import {
  ModalWrapper, ModalContainer,
  ModalTitle, ModalCloseButton, HrLine,
  ModalSubtitle, ModalSubFields,
  ModalDeleteButton, ModalSubTextsContainer,
  ModalSubItemsContainer, ModalItem, ModalItemCloseButton
} from './styles';
import {EmptyContent} from '../databases/styles';
import {columns as dc, indices as di} from './data';
import {ColumnSchema, IndexSchema} from './types';
import {general, tableModalTranslations} from '../../utils/translations.utils';

import Button from '../button';
import IndexModal from './index-modal';
import {useLanguageContext} from '../../contexts/language.context';

interface TableModalProps {
  tableName: string;
  ls: (val: boolean) => void;
  onClose: () => void;
}

const TableModal: React.FC<TableModalProps> = ({tableName, onClose, ls}) => {
  const {language} = useLanguageContext();

  const [columns, setColumns] = useState<Array<ColumnSchema>>([]);
  const [indices, setIndices] = useState<Array<IndexSchema>>([]);
  const [showIndex, setShowIndex] = useState<boolean>(false);

  const hideShowIndex = () => setShowIndex(false);

  useEffect(() => {
    if (tableName.length < 1) return;
    ls!(true);
    setTimeout(() => {
      setColumns(dc);
      setIndices(di);
      ls!(false);
    }, 500);
  }, [tableName, ls]);

  return (
    <ModalWrapper>
      {showIndex && (
        <IndexModal 
          onClose={hideShowIndex} 
          columns={columns}
          indices={indices}
          table={tableName}
        />
      )}
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
        {columns.length === 0 && (
          <EmptyContent>{general.noData[language]}</EmptyContent>
        )}
        <ModalSubItemsContainer>
          {columns.map((val) => (
            <ModalItem key={val.name}>
              <div>
                <span>{val.name}</span>
                <ModalItemCloseButton
                  title={tableModalTranslations.delCol[language]}
                >
                  ❌
                </ModalItemCloseButton>
              </div>
              <HrLine />
              <span>
                {general.type[language]}: {val.type}
              </span>
              <span>
                {general.static[language]}: {"" + val.static}
              </span>
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
          <ModalSubtitle>
            {tableModalTranslations.tblOpt[language]}
          </ModalSubtitle>
        </ModalSubFields>
        <HrLine />
        <ModalSubTextsContainer>
          <span>{tableModalTranslations.dTtl[language]}: 0</span>
          <span>
            {tableModalTranslations.cluExp[language]}: lastname(asc), email(asc)
          </span>
        </ModalSubTextsContainer>
        <ModalSubFields>
          <ModalSubtitle>{general.idx[language]}</ModalSubtitle>
          <Button
            variant={2}
            text={general.newIdx[language]}
            disabled={false}
            onPress={() => setShowIndex(true)}
            medium
          />
        </ModalSubFields>
        <HrLine />
        {indices.length === 0 && (
          <EmptyContent>{general.noData[language]}</EmptyContent>
        )}
        <ModalSubItemsContainer>
          {indices.map((val) => (
            <ModalItem key={val.name}>
              <div>
                <span>{val.name}</span>
                <ModalItemCloseButton
                  title={tableModalTranslations.delIdx[language]}
                >
                  ❌
                </ModalItemCloseButton>
              </div>
              <HrLine />
              <span>
                {general.knd[language]}: {val.kind}
              </span>
              <span>
                {general.ops[language]}: {val.options.join(", ")}
              </span>
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
