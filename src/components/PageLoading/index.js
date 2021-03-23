import React from "react";
import coffeeLoading from "../../assets/images/coffeeLoading.gif";
import { Container, PageLoader } from "./style";

const Index = ({ children }) => {
  return (
    <Container>
      <PageLoader src={coffeeLoading} />
      {children}
    </Container>
  );
};

export default Index;
