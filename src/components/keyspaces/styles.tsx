import styled from "styled-components";
import infoIcon from '../../assets/icons/info.png';

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

export const SeperatorTitle = styled.span`
  font-family: Roboto;
  font-weight: 450;
  font-size: 1.4rem;
  margin-bottom: 1.4%;
  opacity: 0.91;
  text-decoration: underline;
`;

export const ContentContainer = styled.div`
  padding: 1%;
  margin-top: 3.6%;
  display: flex;
  width: 42vw;
  max-height: 61vh;
  overflow: auto;
  flex-wrap: wrap;
  gap: 2.1rem;
`;

export const ItemHolder = styled.div`
  border-radius: 0.3rem;
  padding: 0% 0.7% 0.35% 0.7%;
  display: flex;
  flex-direction: column;
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

export const Info = styled.img.attrs({
  alt: "",
  src: infoIcon
})`
  width: 1rem;
  height: auto;
  align-self: flex-start;
  padding-top: 2%;
  z-index: 200;
`;

export const ItemName = styled.span`
  font-family: calibri;
  font-size: 1.6rem;
  opacity: 0.91;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const HrLine = styled.div`
  border-bottom: 1px solid black;
`;

export const ItemSubfield = styled.span`
  font-family: bahnschrift;
  font-size: 1rem;
  opacity: 0.84;
`;

export const ModalCloseButton = styled.span`
  font-family: calibri;
  font-size: 1.4rem;
  align-self: flex-end;
  text-transform: lowercase;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  top: 0;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  width: 100vw;
  height: 100vh;
  z-index: 200;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f4f9;
  border-radius: 0.42rem;
  padding: 0% 0.7%;
  width: 60vw;
  height: 84vh;
`;

export const ModalTitle = styled.span`
  font-family: Roboto;
  font-size: 1.6rem;
  opacity: 0.84;
  align-self: center;
`;

export const ModalSubFields = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.42%;
`;

export const ModalSubtitle = styled.span`
  font-family: calibri;
  font-size: 1.4rem;
`;

export const ModalDeleteButton = styled.div`
  align-self: flex-start;
  width: 7rem;
`;

export const ModalSubTextsContainer = styled.div`
  font-family: bahnschrift;
  font-size: 1rem;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  padding-left: 0.42%;
  padding-top: 0.42%;
`;

export const ModalSubItemsContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  height: 17vh;
  gap: 1.4rem;
`;
