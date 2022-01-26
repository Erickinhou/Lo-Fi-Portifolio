import styled from "styled-components";
import Its1amGif from "../../assets/images/Its1am.gif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Background = motion(styled.div`
  display: flex;
  flex-direction: row;
  justify-content: initial;
  width: 100vw;
  height: 100vh;
  background: url(${Its1amGif});
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-position: 60%;
    overflow-y: hidden;
    height: auto;
    min-height: -webkit-fill-available;
    @supports (-webkit-appearance: none) {
      height: calc(100vh + 56px);
    }
  }
`);

const MainArea = styled.div`
  color: #ddd;
  margin: 0 0 0 8vw;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin: 12px 8vw 0 8vw;
    width: 100%;
  }
`;

const Text = styled.h3`
  font-weight: 400;
  font-size: 16px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 0.9rem;
  }
`;
const TextMain = styled.h1`
  font-weight: 400;
  font-size: 32px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 1.4rem;
  }
`;
const TextHighlight = styled.b`
  color: var(--red);
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonsProps = motion.custom(Link);
const Button = styled(ButtonsProps)`
  position: relative;
  display: inline-block;
  padding: 12px 0;
  width: 160px;
  text-align: center;
  color: var(--red);
  text-decoration: none;
  overflow: hidden;
  box-sizing: border-box;
  & > span {
    font-size: 16px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid var(--red);
    border-left: 2px solid var(--red);
    transition: 0.5s;
  }
  &:hover:before {
    width: 100%;
    height: 100%;
  }
  &:hover:after {
    width: 100%;
    height: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid var(--red);
    border-right: 2px solid var(--red);
    transition: 0.5s;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 130px;
    padding: 6px 0;
    & > span {
      font-size: 0.8rem;
    }
  }
`;

const StrokeButton = styled(ButtonsProps)`
  position: relative;
  display: inline-block;
  padding: 10px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  color: #ddd;
  border: 2px solid #ddd;
  margin: 0 0 0 2vw;
  overflow: hidden;
  box-sizing: border-box;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100px;
    padding: 4px 0;
    & > span {
      font-size: 0.8rem;
    }
  }
`;

//Agency area

const Agency = styled.p`
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  margin: 0.5vw 0 0 0;
  color: var(--light);
  font-size: 1.2rem;
  font-weight: 300;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;
const AgencyLink = styled.a`
  color: var(--blue);
`;

export {
  Background,
  Text,
  TextMain,
  TextHighlight,
  MainArea,
  Button,
  StrokeButton,
  Agency,
  AgencyLink,
  ButtonWrapper,
};
