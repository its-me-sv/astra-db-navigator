import styled from "styled-components";

export const KeyspaceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1%;
  margin-bottom: 0.5%;
`;

export const Seperator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  padding: 1%;
  margin-top: 3.6%;
  display: flex;
  width: 42vw;
  max-height: 67vh;
  overflow: auto;
  flex-wrap: wrap;
  gap: 2.1rem;
`;

export const ItemHolder = styled.div`
  border-radius: 0.3rem;
  padding: 0% 0.7% 0.35% 0.7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.1rem;
  cursor: pointer;
  background-color: #f5f4f9;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  &:hover {
    box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
  }
`;

export const ItemName = styled.span`
  font-family: calibri;
  font-size: 1.6rem;
  opacity: 0.91;
`;

export const HrLine = styled.div`
  border-bottom: 1px solid black;
`;

export const ItemSubfield = styled.span`
  font-family: bahnschrift;
  font-size: 1rem;
  opacity: 0.84;
`;
