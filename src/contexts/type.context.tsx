import React, {createContext, ReactNode, useContext, useState} from 'react';

import {TypeSchema} from '../utils/types';
import {dummyTypes} from '../utils/dummy-data';

interface TypeContextInterface {
  types: Array<TypeSchema>;
  currType: TypeSchema | null
  loading: boolean;
  setCurrType?: (val: TypeSchema | null) => void;
  setLoading?: (val: boolean) => void;
  fetchTypes?: () => void;
  resetState?: () => void;
}

const defaultState: TypeContextInterface = {
  types: [],
  currType: null,
  loading: false,
};

export const TypeContext = createContext<TypeContextInterface>(defaultState);

export const useTypeContext = () => useContext(TypeContext);

export const TypeContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [types, setTypes] = useState<Array<TypeSchema>>(defaultState.types);
  const [currType, setCurrType] = useState<TypeSchema | null>(defaultState.currType);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const fetchTypes = () => {
    setLoading(true);
    setTimeout(() => {
      setTypes(dummyTypes);
      setLoading(false);
    }, 500);
  };

  const resetState = () => {
    setTypes([]);
    setCurrType(null);
    setLoading(false);
  };

  return (
    <TypeContext.Provider
      value={{
        types, currType, loading,
        setCurrType, setLoading, fetchTypes,
        resetState
      }}
    >{children}</TypeContext.Provider>
  );
};
