import React from "react";
import { motion } from "framer-motion";
import { Coffee } from "react-feather";
import {
  JobCard,
  CardWrapper,
  CardTitle,
  ImageContainer,
  CardDetails,
  ClientMessage,
  LineBottom
} from "./style.js";
import storyKeeperLogo from "../../assets/images/storyKeeper.png";
import h2rLogo from "../../assets/images/H2R.png";
import ethicsNetLogo from "../../assets/images/logoEthics.png";

export default function workData() {
  const cardVariant = {
    Hover: {
      scale: 1.1
    }
  };

  const projects = [
    {
      title: "Story Keeper",
      image: storyKeeperLogo,
      worked: "Fullstack Developer",
      time: "Upwork",
      techs: ["React.js", "Redux", "In18next"],
      color: "#44A4E2",
      message: "Just a pleasure to work with!",
      urlProject: "https://storekeeper.nl/"
    },
    {
      title: "H2R",
      image: h2rLogo,
      worked: "Front-end / Intern",
      time: "6 months",
      techs: ["JavaScript", "Angular", "Ionic"],
      color: "#68C39E",
      message: "He was good developer",
      urlProject: "https://painel.h2recommerce.com.br/login"
    },
    {
      title: "Ethics Net",
      image: ethicsNetLogo,
      worked: "Fullstack Developer",
      time: "currently working",
      techs: ["Node.js", "React.js", "MongoDB"],
      color: "#143B53",
      message: "-",
      urlProject: "https://www.ethicsnet.org/"
    }
  ];
  function getProjects() {
    return (
      <CardWrapper>
        {projects.map(
          (
            { title, worked, image, time, techs, color, message, urlProject },
            index
          ) => {
            return (
              <JobCard key={index}>
                <motion.div variants={cardVariant} whileHover="Hover">
                  <div>
                    <a
                      href={urlProject}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardTitle color={color}>
                        {title}
                        <LineBottom color={color} />
                      </CardTitle>
                      <ImageContainer>
                        <img src={image} alt={title} />
                      </ImageContainer>
                    </a>
                    <CardDetails>
                      <div>
                        <Coffee />
                        <p>{worked}</p>
                        {/* <p>{time}</p> */}
                      </div>

                      <div>
                        {techs.map((tech, index) => (
                          <p key={index}>{tech}</p>
                        ))}
                      </div>
                    </CardDetails>
                    <ClientMessage>"{message}"</ClientMessage>
                  </div>
                </motion.div>
              </JobCard>
            );
          }
        )}
      </CardWrapper>
    );
  }
  return <div>{getProjects()}</div>;
}
