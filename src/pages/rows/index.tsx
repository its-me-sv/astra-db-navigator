import React, {useState, useEffect} from "react";

import {
  RowsContainer, FilterArea, RowArea,
  ColumnTitle, FilterHeader, SubFieldItems
} from './styles';
import {ModalItem, ModalItemCloseButton} from "../../components/keyspaces/styles";
import {rowTranslations, newTableTranslations, tableModalTranslations} from '../../utils/translations.utils';
import {dummyColumns} from '../../utils/dummy-data';

import {useLanguageContext} from '../../contexts/language.context';
import {useConnectionContext} from '../../contexts/connection.context';

import Button from '../../components/button';
import Select from '../../components/select';

interface RowsPageProps {}

const RowsPage: React.FC<RowsPageProps> = () => {
  const {language} = useLanguageContext();
  const {setLoading} = useConnectionContext();

  const [columns, setColumns] = useState<Array<string>>([]);
  const [resColumns, setResColumns] = useState<Array<string>>([]);
  const [currColumn, setCurrColumn] = useState<string>('');

  const addColumn = () => {
    if (columns.length < 1) return;
    setResColumns([...resColumns, currColumn]);
    const nc: Array<string> = columns.filter((val) => val !== currColumn);
    setColumns(nc);
    setCurrColumn(nc[0]);
  };

  const removeColumn = (colName: string) => {
    setResColumns(resColumns.filter((val) => val !== colName));
    setColumns([...columns, colName]);
  };

  useEffect(() => {
    setLoading!(true);
    setTimeout(() => {
      const availColumns = dummyColumns.map(({name}) => name);
      setColumns(availColumns);
      setCurrColumn(availColumns[0]);
      setLoading!(false);
    }, 500);
  }, []);

  return (
    <RowsContainer>
      <FilterArea>
        <ColumnTitle>{rowTranslations.filter[language]}</ColumnTitle>
        {columns.length > 0 && (
          <FilterHeader>
            <Select
              options={columns}
              val={currColumn}
              setVal={setCurrColumn}
              notHeader
              label="Column"
            />
            <Button
              variant={4}
              text={newTableTranslations.addCol[language]}
              onPress={addColumn}
              disabled={columns.length < 1}
              tiny
            />
          </FilterHeader>
        )}
        <SubFieldItems>
          {resColumns.map((val) => (
            <ModalItem key={val}>
              <div>
                <span>{val}</span>
                <ModalItemCloseButton
                  title={tableModalTranslations.delCol[language]}
                  onClick={() => removeColumn(val)}
                >
                  🗑️
                </ModalItemCloseButton>
              </div>
            </ModalItem>
          ))}
        </SubFieldItems>
        <Button
          text={rowTranslations.applyFilter[language]}
          variant={5}
          onPress={() => {}}
          disabled={false}
          medium
        />
      </FilterArea>
      <RowArea></RowArea>
    </RowsContainer>
  );
};

export default RowsPage;
