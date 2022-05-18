import styled from "styled-components";

export const RowsContainer = styled.div`
  margin-top: 0.5%;
  display: grid;
  grid-template-columns: 1.2fr 6fr;
  width: 100vw;
  height: 80vh;
`;

export const FilterArea = styled.div`
  position: relative;
  display: flex;
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
  display: flex;
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

export const ColumnTitle = styled.span`
  font-family: calibri;
  font-size: 1.6rem;
  opacity: 0.9;
  text-align: center;
  border-bottom: 1px solid #8e8e91;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0% 2.8%;
  margin-top: 4.2%;
`;

export const SubFieldItems = styled.div`
  margin: 1.4% 0%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  width: 15vw;
  padding: 2.1%;
  max-height: 42vh;
  gap: 0.4rem;
`;

export const RowsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.36rem;
`;

export const FilterFooter = styled.div`
  position: absolute;
  bottom: 1%;
  right: 2.8%;
`;

export const PagesHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0% 2.8%;
  margin: 4.2% 0%;
`;

export const NoRows = styled.div`
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;
