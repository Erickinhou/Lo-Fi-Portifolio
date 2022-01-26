import styled from "styled-components";
import { motion } from "framer-motion";

const MusicArea = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-evenly;
  padding-top: 10px;
  & > div {
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 2.5rem;
    justify-content: space-between;
    margin: 0 0 0 auto;
    & svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const VolumeWrapper = styled(motion.div)`
  padding: 3px 10px;
  position: absolute;
  input[type="range"] {
    -webkit-appearance: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
    margin-top: -4px;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ccc;
  }
`;

export { MusicArea, VolumeWrapper };
