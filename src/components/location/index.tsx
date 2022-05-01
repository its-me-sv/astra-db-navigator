import React from "react";

import {useConnectionContext} from '../../contexts/connection.context';
import {
  LocationContainer,
  LocationItem
} from './styles';

interface LocationProps {}

const Location: React.FC<LocationProps> = () => {
  const {database, keyspace, table, screen} = useConnectionContext();

  return (
    <LocationContainer>
      <LocationItem>{database}</LocationItem>
      {screen > 1 && (
        <>
          <span> / </span>
          <LocationItem>{keyspace}</LocationItem>
        </>
      )}
      {screen > 2 && (
        <>
          <span> / </span>
          <LocationItem>{table}</LocationItem>
        </>
      )}
    </LocationContainer>
  );
};

export default Location;
