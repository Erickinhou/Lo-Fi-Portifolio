import styled from "styled-components";
import { motion } from "framer-motion";
import streetLofiGif from "../../assets/images/street.gif";

const Background = motion(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: url(${streetLofiGif});
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  overflow: hidden;
`);
const Container = styled.div`
  margin: 0 0 0 8vw;
  display: flex;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    cursor: pointer;
  }
  .icon-text {
    position: absolute;
    width: 180px;
    margin-right: 20px;
    right: 0px;
    svg {
      margin-left: 5px;
    }
  }
`;

const LineBottom = styled.div`
  height: 0.2rem;
  width: 0%;
  background-color: ${({ color }) => color};
  transition: all 0.3s;
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  margin: 0px 20px;
  width: 33%;
  height: 100%;
  & > div {
    padding: 10px 20px;
    backdrop-filter: blur(10px);
    & > div {
      max-width: 100%;
    }
  }
  &:hover ${LineBottom} {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const CardWrapper = styled.div`
  display: flex;
  position: relative;
  width: 1000px;
  height: 400px;
  margin: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    text-align: center;
    margin-top: 20px;
    width: 60%;
    height: 170px;
    object-fit: cover;
  }
`;

const CardDetails = styled.div`
  margin-top: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  div:first-child {
    justify-content: center;
    margin-top: 20px;
    p {
      margin-left: 10px;
      font-weight: bold;
    }
  }
`;
const ClientMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    margin: 5px 0;
    font-style: italic;
  }
`;

const SeeMoreButton = styled.div`
  background: none;
  color: ${({ color }) => color};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 12px;
  text-decoration: underline;
`;

export {
  Background,
  Container,
  JobCard,
  CardWrapper,
  IconContainer,
  CardTitle,
  ImageContainer,
  CardDetails,
  ClientMessage,
  LineBottom,
  SeeMoreButton
};
