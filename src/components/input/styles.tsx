import styled from "styled-components";

export const InputField = styled.div`
  display: grid;
  gap: 0.21rem;
  margin-bottom: 2.1%;
`;

export const InputLabel = styled.label`
  font-family: "bahnschrift";
  font-size: 1.4rem;
  opacity: 0.84;
`;

export const StyledInput = styled.input`
  font-family: Roboto;
  font-size: 1.6rem;
  color: #171717;
  text-align: center;
  border-radius: 0.42rem;
  outline: none;
  border: none;
  background-color: #f5f4f9;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  &:focus {
    box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
  }
`;

export const StyledTextArea = styled.textarea<{ isDesc?: boolean }>`
  border-radius: 0.3rem;
  padding: 3px;
  font-size: 1.2rem;
  resize: none;
  /*  */
  ${(props) =>
    props.isDesc &&
    `
    height: 42vh;
    width: 42vw;
  `}
`;