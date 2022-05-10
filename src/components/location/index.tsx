import React from "react";

import {
  LocationContainer,
  LocationItem
} from './styles';

import {useConnectionContext} from '../../contexts/connection.context';
import {useDatabaseContext} from '../../contexts/database.context';

interface LocationProps {}

const Location: React.FC<LocationProps> = () => {
  const {keyspace, table, screen, setKs} = useConnectionContext();
  const {currDatabase: database, setCurrDatabase: setDb} = useDatabaseContext();

  return (
    <LocationContainer>
      <LocationItem 
        selected={screen === 1}
        onClick={() => screen !== 1 && setDb!(database)}
      >{database}</LocationItem>
      <span> / </span>
      {screen > 1 && (
        <LocationItem 
          selected={screen === 2}
          onClick={() => screen !== 2 && setKs!(keyspace)}
        >{keyspace}</LocationItem>
      )}
      {screen > 2 && (
        <>
          <span> / </span>
          <LocationItem selected={screen === 3}>{table}</LocationItem>
          <span> / </span>
        </>
      )}
    </LocationContainer>
  );
};

export default Location;
