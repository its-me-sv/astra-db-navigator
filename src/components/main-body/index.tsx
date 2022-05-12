import React from "react";

import {useConnectionContext} from '../../contexts/connection.context';

import KeyspacePage from "../../pages/keyspace";

import Location from '../location';
import TableAndTypePage from "../../pages/table-and-type";
import Tables from "../tables";
import Data from "../data";

interface MainBodyProps {}

const MainBody: React.FC<MainBodyProps> = () => {
  const {screen} = useConnectionContext();

  return (
    <div>
      <Location />
      {screen === 1 && <KeyspacePage />}
      {screen === 2 && <TableAndTypePage />}
      {screen === 3 && <Tables />}
      {screen === 4 && <Data />}
    </div>
  );
};

export default MainBody;
