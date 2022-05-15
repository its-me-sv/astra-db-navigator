import React, {useState, useRef, MutableRefObject} from "react";

import {
  ModalWrapper, ModalContainer,
  ModalCloseButton, ModalTitle,
  ModalSubFields, ModalSubtitle,
  HrLine, ModalSubItemsContainer,
  ModalItem, ModalItemCloseButton,
  ModalDeleteButton, ModalSubTextsContainer,
  SubFieldsSep
} from './styles';
import {StyledInput} from '../input/styles';
import {EmptyContent} from '../../pages/keyspace/styles';
import {dummyPars, dummyClstrs} from '../../utils/dummy-data';
import {ColumnSchema, NewColumn, ClusterSchema} from '../../utils/types';
import {
  keyspacesTranslations, general, tableModalTranslations,
  newTableTranslations
} from '../../utils/translations.utils';

import {useLanguageContext} from '../../contexts/language.context';
import {useTableContext} from '../../contexts/table.context';
import {useTypeContext} from '../../contexts/type.context';
import {useDeleteContext} from '../../contexts/delete.context';

import Button from '../button';
import ColumnModal from "./column-modal";

interface NewTableModalProps {
 onClose: () => void;
}

const NewTableModal: React.FC<NewTableModalProps> = ({onClose}) => {
  const {language} = useLanguageContext();
  const {setLoading: ls} = useTableContext();
  const {types} = useTypeContext();
  const {setText, deleteCb} = useDeleteContext();

  const [columns, setColumns] = useState<Array<ColumnSchema>>([]);
  const [showColumn, setShowColumn] = useState<boolean>(false);
  const [pars, setPars] = useState<Array<string>>(dummyPars);
  const [clstrs, setClstrs] = useState<Array<ClusterSchema>>(dummyClstrs);
  const newColRef = useRef<NewColumn>({name: '', typeDefinition: "ascii"});
  const tblNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const ttlRef = useRef() as MutableRefObject<HTMLInputElement>;

  const hideColumnModal = () => setShowColumn(false);

  const addColumn = () => {
    const newCol: ColumnSchema = {
      name: newColRef.current.name,
      type: newColRef.current.typeDefinition,
      static: false
    };
    setColumns([...columns, newCol]);
  };

  const removeColumn = (colName: string) => {
    deleteCb!.current = () => {
      setColumns(columns.filter(({name}) => name !== colName));
      setText!('');
    };
    setText!(`${general.delete[language]} ${general.column[language].toLowerCase()} ${colName}?`);
  };

  const addPar = (parName: string) => {
    if (parName.length < 1) return;
    setPars([...pars, parName]);
  };

  const remPar = (parName: string) => {
    if (parName.length < 1) return;
    setPars(pars.filter(name => name !== parName));
  };

  const addClstr = (val: ClusterSchema) => {
    setClstrs([...clstrs, val]);
  };

  const remClstr = (clName: string) => {
    setClstrs(clstrs.filter(({column}) => column !== clName));
  };

  const createTable = () => {};

  const clusExp: string = clstrs
    .map((val) => `${val.column}(${val.order})`)
    .join(", ");

  return (
    <ModalWrapper>
      {showColumn && (
        <ColumnModal
          onClose={hideColumnModal}
          types={types.map(({ name }) => name)}
          newCol={newColRef}
          ls={ls!}
          ac={addColumn}
          fromNewTbl={true}
        />
      )}
      <ModalContainer fromNew>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <ModalTitle>
          <StyledInput
            placeholder={keyspacesTranslations.newTable[language]}
            ref={tblNameRef}
          />
        </ModalTitle>
        <ModalSubFields>
          <ModalSubtitle>{general.columns[language]}</ModalSubtitle>
          <Button
            variant={2}
            text={newTableTranslations.addCol[language]}
            disabled={false}
            onPress={() => setShowColumn(true)}
            medium
          />
        </ModalSubFields>
        <HrLine />
        {columns.length === 0 && (
          <EmptyContent>{newTableTranslations.noCol[language]}</EmptyContent>
        )}
        <ModalSubItemsContainer>
          {columns.map((val) => (
            <ModalItem key={val.name}>
              <div>
                <span>{val.name}</span>
                <ModalItemCloseButton
                  title={tableModalTranslations.delCol[language]}
                  onClick={() => removeColumn(val.name)}
                >
                  🗑️
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
          <ModalSubFields withGap>
            <Button
              variant={5}
              text={newTableTranslations.addParKey[language]}
              disabled={false}
              onPress={() => setShowColumn(true)}
              medium
            />
            <Button
              variant={4}
              text={newTableTranslations.addClsKey[language]}
              disabled={false}
              onPress={() => setShowColumn(true)}
              medium
            />
          </ModalSubFields>
        </ModalSubFields>
        <HrLine />
        <ModalSubTextsContainer>
          <SubFieldsSep>
            <span>{general.parKey[language]}:</span>
            {pars.length === 0 && <span>-</span>}
          </SubFieldsSep>
          <SubFieldsSep>
            <span>{general.cluKey[language]}:</span>
            {clstrs.length === 0 && <span>-</span>}
          </SubFieldsSep>
        </ModalSubTextsContainer>
        <ModalSubFields>
          <ModalSubtitle>
            {tableModalTranslations.tblOpt[language]}
          </ModalSubtitle>
        </ModalSubFields>
        <HrLine />
        <ModalSubTextsContainer>
          <SubFieldsSep>
            <span>{tableModalTranslations.dTtl[language]}:</span>
            <StyledInput
              ref={ttlRef}
              placeholder={newTableTranslations.ttl[language]}
              tiny
            />
          </SubFieldsSep>
          <span>
            {tableModalTranslations.cluExp[language]}: {clusExp || "-"}
          </span>
        </ModalSubTextsContainer>
        <ModalDeleteButton>
          <Button
            variant={2}
            text={newTableTranslations.crtTbl[language]}
            disabled={false}
            onPress={createTable}
            medium
          />
        </ModalDeleteButton>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default NewTableModal;
