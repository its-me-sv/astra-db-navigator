import React from "react";

import {useConnectionContext} from '../../contexts/connection.context';
import {useDeleteContext} from '../../contexts/delete.context';

import KeyspacePage from "../../pages/keyspace";
import TableAndTypePage from "../../pages/table-and-type";

import Location from '../location';
import DeleteModal from "../delete-modal";
import Tables from "../tables";
import Data from "../data";

interface MainBodyProps {}

const MainBody: React.FC<MainBodyProps> = () => {
  const {screen} = useConnectionContext();
  const {text} = useDeleteContext();

  return (
    <div>
      <Location />
      {text.length > 1 && <DeleteModal />}
      {screen === 1 && <KeyspacePage />}
      {screen === 2 && <TableAndTypePage />}
      {screen === 3 && <Tables />}
      {screen === 4 && <Data />}
    </div>
  );
};

export default MainBody;
