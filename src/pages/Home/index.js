import React from "react";
import { ArrowLeft } from "react-feather";
//animation
import { homePageAnimation } from "../../animations";
import {
  Background,
  Text,
  TextMain,
  MainArea,
  TextHighlight,
  Button,
  StrokeButton,
  MusicTextArea,
  Agency,
  MinorText,
  AgencyLink
} from "./style";

const buttonVariants = {
  hover: {
    backgroundColor: "#eb5757",
    color: "#101010",
    boxShadow: "0 0 50px #eb5757",
    transition: {
      delay: 0.4,
      duration: 0.1
    }
  },
  strokeHover: {
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    textShadow: "0px 0px 8px rgb(255,255,255)"
  }
};

export default function Home() {
  return (
    <Background variants={homePageAnimation}>
      <MainArea>
        <Text>Hi, my name is Erick.</Text>
        <TextMain>
          I'm a <TextHighlight>Software developer</TextHighlight>,
        </TextMain>
        <Text>
          and a Brazilian who loves to create new things
          <br /> and a listener of lofi :p
        </Text>
        <div>
          <Button variants={buttonVariants} whileHover="hover" to="/works">
            <span>See my works</span>
          </Button>
          <StrokeButton
            variants={buttonVariants}
            whileHover="strokeHover"
            fill="true"
            to="/about-me"
          >
            <span>About Me</span>
          </StrokeButton>
        </div>
      </MainArea>
      <MusicTextArea>
        <ArrowLeft></ArrowLeft>
        <MinorText> Hit the play button and chill </MinorText>
      </MusicTextArea>
      <Agency>
        Meet my agency in{" "}
        <AgencyLink target="_blank" href="http://lecode.dev">
          lecode
        </AgencyLink>
        .
      </Agency>
    </Background>
  );
}
