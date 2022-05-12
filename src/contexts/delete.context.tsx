import React, {createContext, ReactNode, useContext, useState} from "react";

interface DeleteContextInterface {
  text: string;
  setText?: (val: string) => void;
  onDelete: () => void;
  setOnDelete?: (val: () => void) => void;
}

const defaultState: DeleteContextInterface = {
  text: '',
  onDelete: () => {}
};

export const DeleteContext = createContext<DeleteContextInterface>(defaultState);

export const useDeleteContext = () => useContext(DeleteContext);

export const DeleteContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [text, setText] = useState<string>(defaultState.text);
  const [onDelete, setOnDelete] = useState<() => void>(defaultState.onDelete);

  return (
    <DeleteContext.Provider value={{
      text, onDelete,
      setText, setOnDelete
    }}>{children}
    </DeleteContext.Provider>
  );
};
