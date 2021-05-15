import React from "react";
import styled from "styled-components";
import loadingCoffee from "../../assets/images/coffee.gif";

export const Container = () => {
  return (
    <LoadingOverlay>
      <img src={loadingCoffee} alt="Coffee Loading" />
    </LoadingOverlay>
  );
};

const LoadingOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  background-size: cover;
  z-index: -2;
`;
