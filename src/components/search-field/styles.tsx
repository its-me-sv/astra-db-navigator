import styled from "styled-components";
import Search from "../../assets/icons/search.png";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.30rem;
  padding: 0.21% 0.42%;
  gap: 0.14rem;
`;

export const SearchIcon = styled.img.attrs({
  src: Search,
  alt: ""
})`
  width: 1.2rem;
  height: auto;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  font-family: Roboto;
  font-size: 1.4rem;
  text-align: center;
`;
