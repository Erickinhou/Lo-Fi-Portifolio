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
`);

const MainArea = styled.div`
  color: #ddd;
  margin: 0 0 0 8vw;
`;

const Text = styled.h3`
  font-weight: 400;
  font-size: 16px;
`;
const TextMain = styled.h1`
  font-weight: 400;
  font-size: 32px;
`;
const TextHighlight = styled.b`
  color: var(--red);
  font-weight: 500;
`;

//
//Buttons Area
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
`;
const AgencyLink = styled.a`
  color: var(--blue);
`;

//Music text area
const MusicTextArea = styled.div`
  position: absolute;
  left: 8vw;
  bottom: 1vw;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--light);
`;

const MinorText = styled.p`
  margin: 0 0 0 0;
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
  MusicTextArea,
  MinorText,
  AgencyLink
};
