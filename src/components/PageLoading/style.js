import styled from "styled-components";

export const PageLoader = styled.img`
  position: absolute;
  left: 35%;
  top: 15%;
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
  z-index: -1;
  pointer-events: none;
`;
export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #e4d5cb;
  z-index: -2;
  pointer-events: none;
`;
