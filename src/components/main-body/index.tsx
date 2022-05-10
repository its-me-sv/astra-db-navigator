import React from "react";

import {useConnectionContext} from '../../contexts/connection.context';

import KeyspacePage from "../../pages/keyspace";

import Location from '../location';
import Keyspaces from "../keyspaces";
import Tables from "../tables";
import Data from "../data";

interface MainBodyProps {}

const MainBody: React.FC<MainBodyProps> = () => {
  const {screen, keyspace} = useConnectionContext();

  return (
    <div>
      <Location />
      {screen === 1 && <KeyspacePage />}
      {screen === 2 && <Keyspaces ksName={keyspace} />}
      {screen === 3 && <Tables />}
      {screen === 4 && <Data />}
    </div>
  );
};

export default MainBody;
