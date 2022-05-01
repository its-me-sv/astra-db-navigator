import React from "react";

import Location from '../location';
import Databases from '../databases';
import Keyspaces from "../keyspaces";
import Tables from "../tables";
import Data from "../data";

import {useConnectionContext} from '../../contexts/connection.context';

interface MainBodyProps {}

const MainBody: React.FC<MainBodyProps> = () => {
  const {screen} = useConnectionContext();

  return (
    <div>
      <Location />
      {screen === 1 && <Databases />}
      {screen === 2 && <Keyspaces />}
      {screen === 3 && <Tables />}
      {screen === 4 && <Data />}
    </div>
  );
};

export default MainBody;
