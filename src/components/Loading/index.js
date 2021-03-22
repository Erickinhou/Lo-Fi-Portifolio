import React from "react";
import { Container } from "./style";

const loadingVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

const index = () => {
  return (
    <Container
      animate="show"
      initial="hidden"
      exit="hidden"
      variants={loadingVariants}
    />
  );
};

export default index;
