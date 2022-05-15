import React from "react";

import {ModalContainer, ModalWrapper} from "../keyspace-modal/styles";

interface DatabaseModalProps {}

const DatabaseModal: React.FC<DatabaseModalProps> = () => {
  return (
    <ModalWrapper>
      <ModalContainer></ModalContainer>
    </ModalWrapper>
  );
};

export default DatabaseModal;
