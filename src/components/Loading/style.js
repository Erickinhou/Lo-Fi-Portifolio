import styled from "styled-components";
import { motion } from "framer-motion";
import Loading from "../../assets/images/Loading.gif";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(${Loading});
  background-size: cover;
`;

export const Container = motion(StyledContainer);
