import styled from "styled-components";

export const DatabaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const KeyspacesContainer = styled.div`
  margin-top: 1.4%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const KeyspaceHolder = styled.div`
  border: 1px solid black;
  border-radius: 0.42rem;
  padding: 0.5% 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const KeyspaceName = styled.span`
  font-family: calibri;
  font-size: 1.4rem;
`;

export const HrLine = styled.div`
  border-top: 1px solid black;
`;

export const KeyspaceDc = styled.span`
  font-family: bahnschrift;
  font-size: 1.2rem;
`;
