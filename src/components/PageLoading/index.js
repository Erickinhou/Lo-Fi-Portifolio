import styled from "styled-components";
import Loading from "../../assets/images/Loading.gif";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(${Loading});
  background-size: cover;
  z-index: -2;
`;
