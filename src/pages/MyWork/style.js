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
const ProfessionalXp = styled.div`
  display: flex;
`;
const Title = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 3rem;
`;
const SideNav = styled.div`
  margin: 0 2vw 0 0;
`;

const SideButton = styled.div`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: var(--red);
  }
`;

const ProfessionalContent = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
`;
export {
  Background,
  ProfessionalXp,
  Title,
  MarginOffset,
  SideNav,
  ProfessionalContent,
  SideButton,
};
