import React from "react";

import Location from '../location';
import Databases from '../databases';
import Keyspaces from "../keyspaces";
import Tables from "../tables";
import Data from "../data";

import {useConnectionContext} from '../../contexts/connection.context';

interface MainBodyProps {}

const MainBody: React.FC<MainBodyProps> = () => {
  const {screen, database, keyspace} = useConnectionContext();

  return (
    <div>
      <Location />
      {screen === 1 && <Databases dbName={database} />}
      {screen === 2 && <Keyspaces ksName={keyspace} />}
      {screen === 3 && <Tables />}
      {screen === 4 && <Data />}
    </div>
  );
};

export default MainBody;
