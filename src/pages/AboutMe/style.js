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
`;
const MotionImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  img {
    height: ${({ size = "auto" }) => size};
    border-radius: 50px;
  }
  p {
    text-align: center;
    font-weight: bold;
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
  margin: 20px 20px 20px 0px;
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
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;
export const ImageWrapper = motion(MotionImage);
