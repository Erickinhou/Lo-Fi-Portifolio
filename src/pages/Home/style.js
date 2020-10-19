import styled from 'styled-components';
import Its1amGif from '../../assets/Its1am.gif';
import { Link } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: url(${Its1amGif});
  background-size: cover;
  font-family: 'Montserrat', sans-serif;
`;

const MainArea = styled.div`
  color: #fff;
  margin: 4vh 0 0 8vw;
`;

const Text = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
`;
const TextMain = styled.h1`
  font-weight: 300;
  font-size: 3rem;
`;
const TextHighlight = styled.b`
  color: var(--red);
  font-weight: 400;
`;
//Buttons Area
const Button = styled(Link)`
  display: inline-block;
  padding: 15px 0;
  width: 200px;
  text-align: center;
  color: #fff;
  background-color: var(--red);
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0 2vw 0 0;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: var(--light);
  }
`;

const StrokeButton = styled(Button)`
  background-color: transparent;
  border: 2px solid white;
  margin: 0 0 0 2vw;
  &:hover {
    border: 2px solid var(--light);
  }
`;

//Agency area

const Agency = styled.p`
  position: absolute;
  bottom: 0;
  right: 1vw;
  color: var(--light);
  font-size: 1.2rem;
  font-weight: 300;
`;
const AgencyLink = styled.a`
  color: var(--blue);
`;

//Music text area
const MusicTextArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--light);
  margin: 0 0 0 8vw;
`;

const MinorText = styled.p`
  margin-left: 0.5vw;
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
  AgencyLink,
};
