import styled from "styled-components";

const MusicArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
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

export { MusicArea };
