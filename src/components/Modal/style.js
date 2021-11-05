import styled from "styled-components";
import { motion } from "framer-motion";
import lofiPlace from "../../assets/images/lofiPlace.gif";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CloseModal = styled.button`
  display: none;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: inherit;
    color: white;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
`;
export const ModalCard = styled.div`
  border-radius: 20px;
  background: url(${lofiPlace});
  width: 400px;
  height: 400px;
  padding: 40px;
  font-weight: 400;
  z-index: 20;
  position: relative;
  //pointer-events: none;
`;
export const Title = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 380px;
  & > div {
    width: 100%;
  }
`;

export const Label = styled.label`
  svg {
    margin-right: 5px;
  }
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 20px;
`;

export const EmailInput = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 30px;
  padding: 5px;
  border: none;
  border: 1px #e2e8f0 solid;
  border-radius: 12px;
  &:focus {
    border: none;
    outline: none;
    border: 1px var(--light) solid;
  }
`;

export const MessageInput = styled.textarea`
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: none;
  border: 1px #e2e8f0 solid;
  &:focus {
    border: none;
    outline: none;
    border: 1px var(--light) solid;
  }
`;

export const CloseModalOverlay = styled.div`
  background: transparent;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const SubmitButton = motion(styled.button`
  border: none;
  width: fit-content;
  margin-top: 50px;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  background-color: var(--red);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`);
