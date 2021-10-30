import styled from "styled-components";
import { motion } from "framer-motion";

const Icon = styled.a`
  padding: 2vh 2vw;
  color: var(--light);
  transition: all 0.4s ease-in-out;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0 5px;
  }
`;

const LinkedinIcon = styled(Icon)`
  &:hover {
    color: #2867b2;
    transition: all 0.4s ease-in-out;
  }
`;
const InstagramIcon = styled(Icon)`
  &:hover {
    color: #e1306c;
    transition: all 0.4s ease-in-out;
  }
`;
const GitHubIcon = styled(Icon)`
  &:hover {
    color: #fff;
    transition: all 0.4s ease-in-out;
  }
`;
const FacebookIcon = styled(Icon)`
  &:hover {
    color: #4267b2;
    transition: all 0.4s ease-in-out;
  }
`;

const SideNav = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: ${({ hideMusic }) => (hideMusic ? "-100px" : 0)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 5rem;
  transition: all 0.8s;
  border-right: 2px solid var(--light);
  backdrop-filter: blur(2px);
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 96vw;
    border-right: 0;
    margin: 0 2vw;
    height: 3rem;
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const IconBottom = styled.div`
  margin: auto 0 1vh 0;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin: 0;
    width: 100%;
  }
`;

const SpaceTop = styled.div`
  margin-bottom: auto;
`;
const StyleArrow = styled.div`
  padding: 10px;
  color: var(--light);
  cursor: pointer;
`;
const ArrowWrapper = motion(StyleArrow);
export {
  Icon,
  SideNav,
  IconBottom,
  SpaceTop,
  LinkedinIcon,
  InstagramIcon,
  GitHubIcon,
  FacebookIcon,
  ArrowWrapper,
};
