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
  background-image: linear-gradient(40deg, transparent 0%, rgba(235, 87, 87, 0.4) 51% , var(--red) 100%);
  text-decoration: none;
  background-size: 200% auto;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0 2vw 0 0;
  transition: all 0.4s ease-in-out;
  & > span{
    background: linear-gradient(to right, var(--light) , white);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

         
  &:hover{
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  &:hover > span{
    background: linear-gradient(to right, white , white);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`;

const StrokeButton = styled(Link)`
  display: inline-block;
  padding: 15px 0;
  width: 200px;
  text-decoration: none;
  text-align: center;
  background-color: transparent;
  color: #939393;
  border: 2px solid #939393;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0 0 0 2vw;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: 2px solid white;
    color: #fff;
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
