import React, {createContext, ReactNode, useContext} from "react";

interface RowsContextInterface {}

const defaultState: RowsContextInterface = {};

export const RowsContext = createContext<RowsContextInterface>(defaultState);

export const useRowsContext = () => useContext(RowsContext);

export const RowsContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <RowsContext.Provider value={{}}>{children}</RowsContext.Provider>
  );
};
