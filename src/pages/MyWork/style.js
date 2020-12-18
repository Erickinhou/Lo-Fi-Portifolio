import styled from 'styled-components';
import streetLofiGif from '../../assets/street.gif';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: url(${streetLofiGif});
  background-size: cover;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
`;
const MarginOffset = styled.div`
  margin: 10vh 0 0 8vw;
`;

export {
  Background,
  MarginOffset,
};
