import React, { useState } from "react";
import { motion } from "framer-motion";
import { Coffee } from "react-feather";
import {
  JobCard,
  CardWrapper,
  CardTitle,
  ImageContainer,
  CardDetails,
  ClientMessage,
  LineBottom,
  SeeMoreButton,
} from "./style.js";
import storyKeeperLogo from "../../assets/images/storyKeeper.png";
import h2rLogo from "../../assets/images/H2R.png";
import ethicsNetLogo from "../../assets/images/logoEthics.png";

const cardVariant = {
  Hover: {
    scale: 1.1,
  },
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
    urlProject: "https://storekeeper.nl/",
    messageExtended: false,
  },
  {
    title: "H2R",
    image: h2rLogo,
    worked: "Front-end",
    time: "6 months",
    techs: ["JavaScript", "Angular", "Ionic"],
    color: "#68C39E",
    message:
      "Erick has evolved every day as a professional. His code improved both in legibility and in performance, so we started to pass new challenges, and as usual, he managed to stay above expectations.",
    urlProject: "https://www.linkedin.com/company/hr2tech/about",
    messageExtended: true,
  },
  {
    title: "Ethics Net",
    image: ethicsNetLogo,
    worked: "Fullstack Developer",
    time: "currently working",
    techs: ["Node.js", "React.js", "MongoDB"],
    color: "#143B53",
    message: "-",
    urlProject: "https://www.ethicsnet.org/",
    messageExtended: false,
  },
];

const arraySetSeeMore = projects.map(({ messageExtended }) => messageExtended);

export default function WorkData() {
  const [seeMores, setSeeMores] = useState(arraySetSeeMore);

  function getProjects() {
    console.log("seeMores -> ", seeMores);
    return (
      <CardWrapper>
        <div>
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
                      <ClientMessage>
                        <p
                          style={
                            seeMores[index]
                              ? {
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                }
                              : {}
                          }
                        >
                          "{message}"
                        </p>
                        {seeMores[index] ? (
                          <SeeMoreButton
                            color={color}
                            onClick={() =>
                              setSeeMores(
                                seeMores.map((seeMore, indexSeeMore) =>
                                  indexSeeMore === index ? !seeMore : seeMore
                                )
                              )
                            }
                          >
                            See more
                          </SeeMoreButton>
                        ) : (
                          <></>
                        )}
                      </ClientMessage>
                    </div>
                  </motion.div>
                </JobCard>
              );
            }
          )}
        </div>
      </CardWrapper>
    );
  }
  return <div>{getProjects()}</div>;
}
