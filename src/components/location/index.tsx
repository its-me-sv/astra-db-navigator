import React from "react";

import {useConnectionContext} from '../../contexts/connection.context';
import {
  LocationContainer,
  LocationItem
} from './styles';

interface LocationProps {}

const Location: React.FC<LocationProps> = () => {
  const {database, keyspace, table, screen, setDb, setKs} = useConnectionContext();

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
