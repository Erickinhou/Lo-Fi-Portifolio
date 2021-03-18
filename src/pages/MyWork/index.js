import React, { useState, useContext } from "react";
import { Hexagon, ArrowRight } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";

//import context
import { ModalContext } from "../../GlobalContext";
import ContactMe from "../../components/ContactMeButton";
import Modal from "../../components/Modal";
import { Background, IconContainer, Container } from "./style";
import WorkData from "./workData";

export default function MyWork() {
  const [showData, setShowData] = useState(false);
  const workDataVariants = {
    hidden: {
      opacity: 0,
      y: "-100%"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        duration: 0.3
      }
    }
  };

  const clickTextVariance = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.6
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.6
      }
    }
  };
  const hexagonVariance = {
    hover: {
      scale: 1.3,
      rotate: 90,
      transition: {
        type: "spring",
        mass: 2,
        stiffness: 500
      }
    },
    closed: {
      y: 0
    },
    opened: {
      scale: 1.3,
      rotate: 90
    }
  };

  const { isModalOpen } = useContext(ModalContext);

  return (
    <Background>
      <Container>
        <ContactMe />
        {isModalOpen && <Modal />}
        <IconContainer>
          <AnimatePresence exitBeforeEnter>
            {!showData && (
              <motion.div
                className="icon-text"
                variants={clickTextVariance}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Click Here <ArrowRight />{" "}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={hexagonVariance}
            whileHover="hover"
            animate={showData ? "opened" : "closed"}
            onClick={() => {
              setShowData(!showData);
            }}
          >
            <Hexagon />
          </motion.div>
        </IconContainer>
        <AnimatePresence exitBeforeEnter>
          {showData && (
            <motion.div
              variants={workDataVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <WorkData></WorkData>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Background>
  );
}
