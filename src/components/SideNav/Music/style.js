import styled from "styled-components";
import { motion } from "framer-motion";

const MusicArea = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;
  & > div {
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 2.5rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 auto;
    & svg {
      width: 1rem;
      height: 1rem;
    }
    flex-direction: row-reverse;
  }
`;

const VolumeWrapper = styled(motion.div)`
  padding: 3px 10px;
  position: absolute;
  input[type="range"] {
    height: 0.7rem;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    background: transparent;
    border: none;
  }

  .track {
    width: 100%;
    height: 0.5rem;
    position: relative;
    background-color: var(--light);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    &:hover {
      height: 0.7rem;
    }
  }

  .blank-track {
    background: rgb(204, 204, 204);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%);
    pointer-events: none;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    opacity: 1 !important;
    transform: translateX(0%) !important;
    position: relative;
    margin-bottom: 4px;
  }
`;

export { MusicArea, VolumeWrapper };
