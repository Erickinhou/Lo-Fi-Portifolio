import React, { useContext } from "react";
import { ChevronsLeft } from "react-feather";
import {
  Background,
  Container,
  ImageWrapper,
  TextBox,
  Title,
  ImagesWrapper,
} from "./style";
import ContactMe from "../../components/ContactMeButton";
import Modal from "../../components/Modal";
import { ModalContext } from "../../GlobalContext";
import imageErick from "../../assets/images/imageErick.png";
import redux from "../../assets/images/redux.svg";
import reactLogo from "../../assets/images/react.svg";
import nodeLogo from "../../assets/images/node.svg";
import dockerLogo from "../../assets/images/Moby-logo.png";
import awsLogo from "../../assets/images/aws-logo.png";
import typeScriptLogo from "../../assets/images/typeScript.svg";
//animation
import { sidePagesAnimation } from "../../animations";

const Index = () => {
  const techs = [
    { name: "React.js", image: reactLogo, rounded: false },
    { name: "Node.js", image: nodeLogo, rounded: false },
    { name: "TypeScript", image: typeScriptLogo, rounded: true },
    { name: "Aws", image: awsLogo, rounded: false },
    { name: "Docker", image: dockerLogo, rounded: false },
    { name: "Redux", image: redux, rounded: false },
  ];

  const { isModalOpen } = useContext(ModalContext);
  return (
    <Background variants={sidePagesAnimation}>
      <div>
        <ContactMe />
        {isModalOpen && <Modal />}
        <Container>
          <TextBox>
            <div>
              <Title>Hey what's up!</Title>
              <p>
                I’m a independent <span>software developer</span>{" "}
              </p>
              <p>
                {" "}
                with <span>+6 years</span> of professional experience
              </p>
            </div>
            <ImageWrapper draggable={true} drag rounded>
              <img src={imageErick} alt="Erick '-'" />
            </ImageWrapper>
          </TextBox>
          <TextBox size="100%" side={"space-between"}>
            <div>
              <div>
                <Title> About Me</Title>
                <p style={{ marginBottom: "10px" }}>
                  My name is Erick and I based in Montes Claros, Brazil{" "}
                  <span role="img" aria-label="Brazil">
                    🇧🇷
                  </span>{" "}
                  (GMT-3).
                </p>

                <p>
                  Currently, I'm coursing Information Systems at the State
                  University of Montes Claros,
                </p>
                <p style={{ marginBottom: "10px" }}>
                  {" "}
                  but I graduated in electrical engineering in CEFET-MG{" "}
                </p>

                <p>
                  My favorite hobby is create cool projects (Like this site).
                </p>
                <p style={{ fontSize: "12px" }}>
                  Ps. All images here are draggable.{" "}
                </p>
              </div>
            </div>

            <div className="hide-mobile">
              <Title>
                Things that I{" "}
                <span role="img" aria-label="Love">
                  ❤️
                </span>{" "}
                create
              </Title>
              <ul>
                <li>
                  API's <ChevronsLeft />
                </li>
                <li>
                  Websites <ChevronsLeft />
                </li>
                <li>
                  Apps <ChevronsLeft />
                </li>
                <li>
                  E-commerce <ChevronsLeft />
                </li>
                <li>
                  Design ( sometimes ) <ChevronsLeft />
                </li>
              </ul>
            </div>
          </TextBox>
          <TextBox align="column" side="center">
            <Title>
              Technologies that I domain (click and drag it{" "}
              <span role="img" aria-labelledby="smile">
                😊
              </span>
              )
            </Title>
            <ImagesWrapper>
              {techs.map(({ name, image, rounded }) => (
                <ImageWrapper
                  size="50px;"
                  whileHover={{ scale: 1.1 }}
                  draggable={true}
                  rounded={rounded}
                  drag
                >
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </ImageWrapper>
              ))}
            </ImagesWrapper>
          </TextBox>
        </Container>
      </div>
    </Background>
  );
};

export default Index;
