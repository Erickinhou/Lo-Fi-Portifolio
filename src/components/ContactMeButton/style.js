import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled.button`
  font-size: 14px;
  padding: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: 1px solid white;
  background: transparent;
  cursor: pointer;
`;
export const ContactButton = motion(StyledButton);
