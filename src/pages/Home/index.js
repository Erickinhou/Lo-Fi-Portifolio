import React from 'react';
import { ArrowLeft } from 'react-feather';
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
  AgencyLink,
} from './style';
import { useState } from 'react';

export default function Home() {
  const handleButtonOnHover = (event) => {
    if (!event.target.getAttribute('fill')) setButtonContent(!buttonContent);
    else setButtonFillContent(!buttonFillContent);
  };
  const handleButtonOffHover = (event) => {
    console.log('teste');
    if (!event.target.getAttribute('fill')) setButtonContent(!buttonContent);
    else setButtonFillContent(!buttonFillContent);
    console.log(buttonContent);
  };

  const buttonsProps = {
    onMouseOver: handleButtonOnHover,
    onMouseLeave: handleButtonOffHover,
  };
  const [buttonContent, setButtonContent] = useState(false);
  const [buttonFillContent, setButtonFillContent] = useState(false);

  return (
    <Background>
      <MainArea>
        <Text>Hi, my name is Erick.</Text>
        <TextMain>
          I'm a <TextHighlight>FullStack Developer</TextHighlight>,
        </TextMain>
        <Text>
          a Brazilian who loves to create new things
          <br /> and a listener of lofi :p
        </Text>
        <div>
          <Button {...buttonsProps} to="/works">
            {buttonContent ? 'Thanks!' : 'See my works'}
          </Button>
          <StrokeButton fill="true" {...buttonsProps}>
            {buttonFillContent ? 'Thanks!' : 'About Me'}
          </StrokeButton>
        </div>
      </MainArea>
      <MusicTextArea>
        <ArrowLeft></ArrowLeft>
        <MinorText> Hit the play button and chill </MinorText>
      </MusicTextArea>
      <Agency>
        Meet my agency in <span> </span>
        <AgencyLink target="_blank" href="http://lecode.dev">
          lecode
        </AgencyLink>
        .
      </Agency>
    </Background>
  );
}
