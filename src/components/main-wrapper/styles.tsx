import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 10fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const MainFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5%;
`;

export const ButtonWrapper = styled.div`
  align-self: center;
  width: 7.7vw;
`;
