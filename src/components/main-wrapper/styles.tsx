import styled from 'styled-components';
import {ReactComponent as DataStax} from "../../assets/logos/datastax-white-logo.svg";
import {ReactComponent as AstraDB} from "../../assets/logos/astra_db.svg";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.2fr 10fr 0.42fr;
`;

export const MainHeader = styled.div`
  background-color: #20293a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    padding-left: 1%;
    display: flex;
    flex-direction: column;
  }
`;

export const DataStaxLogo = styled(DataStax)`
  width: 8vw;
  height: auto;
`;

export const AstraDBLogo = styled(AstraDB)`
  width: 9vw;
  height: auto;
`;
