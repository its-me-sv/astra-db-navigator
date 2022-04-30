import styled from "styled-components";

export const Container = styled.div`
  color: #f5f4f9;
  font-family: bahnschrift;
  align-self: flex-end;
  margin: 0.5% 1%;
  opacity: 0.84;
`;

export const Language = styled.span<{ selected?: boolean }>`
  cursor: pointer;
  ${(props) =>
    props.selected &&
    `
    color: #eb6c34;
  `}
`;