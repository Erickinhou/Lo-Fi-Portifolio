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
  margin: 0 0 0 8vw;
  display: flex;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  & > img{
    width: 200px
  }
`

const CardWrapper = styled.div`
  display: flex;
`

export {
  Background,
  MarginOffset,
  JobCard,
  CardWrapper
};
