import styled from "styled-components";
import { motion } from "framer-motion";
import relaxStudyGif from "../../assets/images/relaxAndStudyDark.gif";

export const Background = motion(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: url(${relaxStudyGif});
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  overflow: hidden;
  & > div:first-child {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 0.85rem;
    background-position: 15%;
  }
`);

export const ContactMe = styled.div``;
export const Container = styled.div`
  width: 88%;
  margin-left: auto;
  margin-right: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-top: 7vh;
    height: 50vh;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const MotionImage = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0px 10px;
  img {
    height: ${({ size = "auto" }) => size};
    border-radius: ${({ rounded }) => (rounded ? "50px" : "0")};
  }
  p {
    text-align: center;
    font-weight: bold;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    img {
      height: ${({ size }) => (size ? "35px" : size)};
    }
    p {
      display: none;
    }
  }
`;

export const TextBox = styled.div`
  align-self: ${({ side = "left" }) => {
    switch (side) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-start";
      case "center":
        return "center";
      default:
        return "flex-start";
    }
  }};
  justify-content: ${({ side = "left" }) => {
    switch (side) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-start";
      case "space-between":
        return "space-between";
      default:
        return "flex-start";
    }
  }};
  width: ${({ size = "auto" }) => size};
  margin: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: ${({ align }) => align};
  align-items: center;
  font-size: 16px;
  & > div:first-child {
    margin-right: 10px;
  }
  span {
    font-weight: 700;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: ${({ side = "left" }) =>
      side === "left" ? "flex-start" : "flex-end"};
    svg {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 0.75rem;
    .hide-mobile {
      display: none;
    }
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 1rem;
  }
`;
export const ImageWrapper = motion(MotionImage);
