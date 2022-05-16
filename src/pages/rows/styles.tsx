import styled from "styled-components";

export const RowsContainer = styled.div`
  margin-top: 0.5%;
  display: grid;
  grid-template-columns: 1.2fr 6fr;
  width: 100vw;
  height: 80vh;
`;

export const FilterArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f4f9;
  margin: 0.42rem;
  border-radius: 0.7rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  max-height: 80vh;
  overflow: auto;
`;

export const RowArea = styled.div`
  background-color: #f5f4f9;
  margin: 0.42rem;
  border-radius: 0.7rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  max-height: 80vh;
  overflow: auto;
`;

export const ColumnTitle = styled.span`
  font-family: calibri;
  font-size: 1.6rem;
  opacity: 0.9;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const SubFieldItems = styled.div`
  margin: 4.2% 0%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  width: 15vw;
  padding: 2.1%;
  max-height: 42vh;
  gap: 0.4rem;
`;
